import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { SearchService } from "src/app/services/searchService";
import { catchError, map, mergeMap, of } from 'rxjs';
import * as SynonymActions from './synonym.actions';
import {SearchSynonymResult} from './interfaces/synonymResult';
import { SearchItem } from "../model/search.interface";

@Injectable()
export class SearchEffects {
    searchSynonymResult:SearchSynonymResult = {
        synonyms:[]
    };
    constructor(private actions$:Actions, private searchService:SearchService){}

searchSynonyms$ = createEffect(() => {
return this.actions$.pipe(
    ofType(SynonymActions.searchSynonyms),
    mergeMap((action)=>{
    return this.searchService.getSynonyms(action.word).pipe(
        map((data:any) => {
            const SynonymResult = {data};
             console.log(data);
              this.searchSynonymResult=data;
              console.log(this.searchSynonymResult);
             
           return SynonymActions.searchSynonymsSuccess({results:this.searchSynonymResult});
        }
    )
    )}
)
    )});
}

