import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { error } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private blogHttpService : BlogHttpService ,private _route:ActivatedRoute, private router:Router, private toaster : ToastsManager, vcr: ViewContainerRef) { 

    this.toaster.setRootViewContainerRef(vcr);
  }

  public blogTitle : string;
  public blogBodyHtml : string;
  public blogDescription : string;
  public blogCategory : string;
  public possibleCategories = ["Comedy" , "Drama" , "Action" ,"Technology"]

  ngOnInit() {
  }

  public createBlog(): any {

    let blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody : this.blogBodyHtml,
      category : this.blogCategory
    }

    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(
        data => {
         this.toaster.success('Blog Post Successfully','Success !');
          setTimeout(()=>{
              this.router.navigate(['/blog',data.data.blogId])
          }, 1000)
        },
        error =>{
          console.log(error.errorMessage);
        }
        
    )
  }

}
