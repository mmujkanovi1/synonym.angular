import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchItem } from '../model/search.interface';

@Injectable({
    providedIn:'root'
})
export class SearchService {
    searchData= {
        word:'laptop'
      }
constructor(private http:HttpClient){}

getSynonyms(searchItem:SearchItem) : Observable<Object>{
    console.log(this.searchData);
    //this.searchData.word=input;
    //this.searchItem.word = input
   return  this.http.post("http://localhost:8080/synonym/find",searchItem)
}

}


