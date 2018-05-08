import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastsManager} from 'ng2-toastr/ng2-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blogview',
  templateUrl: './blogview.component.html',
  styleUrls: ['./blogview.component.css'],
  providers:[Location]
})
export class BlogviewComponent implements OnInit {

  public currentBlog;

  constructor(
    private _route: ActivatedRoute, 
    private router: Router,
     public blogHttpService : BlogHttpService,
     private toaster : ToastsManager,
     vcr: ViewContainerRef, private location : Location) {
    this.toaster.setRootViewContainerRef(vcr);
  }

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');

    this.currentBlog = this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {
        console.log(data)
        this.currentBlog = data["data"]
      },

      error =>{

       console.log("some error occured");
       console.log(error.errorMessage)

      }
    )
  }


  public deleteBlog(): any {
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data => {
        this.toaster.success('Blog Deleted Successfully','Success !');
         setTimeout(()=>{
             this.router.navigate(['/home'])
         }, 1000)
       },
       error =>{
        this.toaster.error('Some Error Occoured','Error !');
       }
       
    )
  }

  public goBackToPreviousPage(): any {
    this.location.back();
  }


}
