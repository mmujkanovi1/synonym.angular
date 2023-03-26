import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SearchService } from 'src/app/services/searchService';
import * as SynonymActions from '../../store/synonym.actions';
import { SearchItem } from 'src/app/model/search.interface';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, searchSynonymSelector } from 'src/app/store/synonym.selectors';
import { AppStateInterface } from 'src/app/store/state/appState.interface';
import { SearchStateInterface } from 'src/app/store/interfaces/searchState.interface';
import { SearchSynonymResult } from 'src/app/store/interfaces/synonymResult';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchSynonymForm:string="";
searchInput:SearchItem = {
  word: ""
}
isLoading$:Observable<boolean>
error$: Observable<string | null>;
synonyms$: Observable<string[]>;
searchedSynonyms:SearchSynonymResult= {synonyms:[]};
searchValue:string = '';


  constructor(private searchService:SearchService, private store: Store<AppStateInterface>
   ) {
     this.isLoading$=this.store.pipe(select(isLoadingSelector));
     this.error$ = this.store.pipe(select(errorSelector));
     this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
    }

  ngOnInit(): void {
  }

  async searchSynonyms(input:string) {
this.store.dispatch(SynonymActions.searchSynonyms({synonym:{word:input}}));
this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
this.error$ = this.store.pipe(select(errorSelector));
this.searchSynonymForm=input;
  }

  clearSearch() {
    this.searchValue = '';
  }



}


