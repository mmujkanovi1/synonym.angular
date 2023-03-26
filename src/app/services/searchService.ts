import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchItem } from '../model/search.interface';

@Injectable({
    providedIn: 'root'
})
export class SearchService {

    constructor(private http: HttpClient) { }

    getSynonyms(searchItem: SearchItem): Observable<Object> {
        return this.http.post("http://localhost:8080/synonym/find", searchItem)
    }

    addSynonym(searchItem: SearchItem): Observable<Object> {
        return this.http.post("http://localhost:8080/synonym/add", searchItem)
    }

}


