import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { error } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs;

  constructor(private blogHttpService : BlogHttpService) { }

  ngOnInit() {
    console.log("Home component OnInit called")
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(

       data => {
         this.allBlogs = data["data"]
       },

       error =>{

        console.log("some error occured");
        console.log(error.errorMessage)

       }
    )

    
}

  ngOnDestroy() {
  }


}
