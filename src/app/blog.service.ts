import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {


  public allBlogs = [
    {
      "blogId" : "1",
      "lastmodified" : "2018-04-28",
      "created":"2018-04-27",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished":true,
      "views" : 0,
      "bodyHtml" :"this is blog body",
      "description" : "this is blog 1 description",
      "title" : "This is blog 1"
    },
    {
      "blogId" : "2",
      "lastmodified" : "2018-04-28",
      "created":"2018-04-27",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished":true,
      "views" : 0,
      "bodyHtml" :"<h1>this is big text</h1> <p>Small text</p>",
      "description" : "this is the description of example blog and this is a comedy blog",
      "title" : "This is blog 2"
    },
    {
      "blogId" : "3",
      "lastmodified" : "2018-04-28",
      "created":"2018-04-27",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished":true,
      "views" : 0,
      "bodyHtml" :"this is blog body",
      "description" : "this is blog 3 description",
      "title" : "This is blog 3"
    }
  ];

  public currentBlog;

  constructor() {
    console.log("Service constructor is called");
   }

public getAllBlogs() : any {

  return this.allBlogs;
 
}

  public getSingleBlogInformation(currentBlogId): any {

    for (let blog of this.allBlogs) {
      if (blog.blogId == currentBlogId) {
        this.currentBlog = blog;
      }
    }
    return this.currentBlog;
  }


}
