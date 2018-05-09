import { Injectable } from '@angular/core';

// importing http client to make the requests

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

// import observable related code.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public key = 'MzQzNGQ5MDg5NjkwODZkMmFjOTEzODU5NGU3Zjc0MDgyNzczMTBhYTE2YzZkZTg3MDYxZWE3MGEzMjVjNzA3ODBkMTI0MDdiZWI2Nzc0MTlkMTU5YTQ4NjE2NjdhOTA5ZWQzY2E5ZmMzMzJiZTc5MTY4MDgyMTQxNmIwNWRkYjhmOQ=='

  constructor(private _http: HttpClient) { }

  private handleError(err : HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllBlogs() : any {

   let myResponse = this._http.get(this.baseUrl+'/all?authToken='+this.key);
   return myResponse;
   
  }
  
    public getSingleBlogInformation(currentBlogId): any {
  
      let myResponse = this._http.get(this.baseUrl+'/view'+'/'+currentBlogId+'?authToken='+this.key)
      return myResponse;
     
    }

  public createBlog(blogData) :any {

    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=' + this.key,blogData)
    return myResponse
  }

  public deleteBlog(blogId) :any {
      
    let data = { }
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete'+ '?authToken=' + this.key,data)
    return myResponse
  }

  public editBlog(blogId,blogData) :any {
      
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=' + this.key,blogData)
    return myResponse
  }

}
