import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';
import { error } from 'protractor';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-blogedit',
  templateUrl: './blogedit.component.html',
  styleUrls: ['./blogedit.component.css']
})
export class BlogeditComponent implements OnInit {

 

  public currentBlog;
  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private _route : ActivatedRoute, private router : Router,private blogHttpService : BlogHttpService,private toaster : ToastsManager, vcr : ViewContainerRef) {
    this.toaster.setRootViewContainerRef(vcr);
   }

  ngOnInit() {

    let myBlogId = this._route.snapshot.paramMap.get('blogId');

    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data => {

          this.currentBlog = data["data"]
      },
      error => {
        console.log(error.errorMessage);
      }
      
    )
  }

  public editThisBlog() :any {
  this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(
    data =>{
      this.toaster.success("Blog Edited successfully");
      setTimeout(() => {
         this.router.navigate(['/blog',this.currentBlog.blogId])
      },1000)
    },

    error =>{
      this.toaster.error('Some Error Occured','Error');
    }
  )

  }

}
