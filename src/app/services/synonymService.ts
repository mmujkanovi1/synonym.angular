import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SearchItem } from '../model/search.interface';
import { AddSynonymModel } from '../model/addSynonym.interface';

@Injectable({
    providedIn: 'root'
})
export class SynonymService {

    constructor(private http: HttpClient) { }

    getSynonyms(searchItem: SearchItem): Observable<Object> {
        return this.http.post("http://localhost:8080/synonym/find", searchItem)
    }

    addSynonym(addSynonym: AddSynonymModel) {
        return this.http.post<any>("http://localhost:8080/synonym/add", addSynonym)
    }


}


