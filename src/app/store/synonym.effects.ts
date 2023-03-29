import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { SynonymService } from "src/app/services/synonymService";
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import * as SynonymActions from './synonym.actions';
import { SearchSynonymResult } from './interfaces/synonymResult';
import { SearchItem } from "../model/search.interface";

@Injectable()
export class SearchEffects {
    searchSynonymResult: SearchSynonymResult = {
        synonyms: []
    };
    constructor(private actions$: Actions, private synonymService: SynonymService) { }

    searchSynonyms$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SynonymActions.searchSynonyms),
            mergeMap((action) => {
                return this.synonymService.getSynonyms(action.synonym).pipe(
                    map((data: any) => {
                        this.searchSynonymResult = data;
                        return SynonymActions.searchSynonymsSuccess({ results: this.searchSynonymResult });
                    }
                    ),
                    catchError((error: any) => of(SynonymActions.searchSynonymsFail(error)))
                )
            }
            )
        )
    });

}


