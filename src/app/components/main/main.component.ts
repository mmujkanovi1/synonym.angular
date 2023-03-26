import { Component, Inject, OnInit } from '@angular/core';
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
searchInput:SearchItem = {
  word: ""
}
isLoading$:Observable<boolean>
//error$: Observable<string | null>;
synonyms$: Observable<string[]>;
searchedSynonyms:SearchSynonymResult= {synonyms:[]};


  constructor(private searchService:SearchService, private store: Store<AppStateInterface>
   ) {
     this.isLoading$=this.store.pipe(select(isLoadingSelector));
    // this.error$ = this.store.pipe(select(errorSelector));
     this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
   //  this.isLoading$=this.store.select(state=>state.isLoading);
    }

  ngOnInit(): void {
  }

  async searchSynonyms(input:string) {
    console.log(input);
    this.searchInput.word=input;
this.store.dispatch(SynonymActions.searchSynonyms({word:{word:input}}));
//this.isLoading$=this.store.pipe(select(isLoadingSelector));
//this.isLoading$=this.store.select(state=>state.isLoading);
//this.error$ = this.store.pipe(select(errorSelector));
this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
console.log("searchSynonyms");
//console.log(this.isLoading$)
//console.log(this.error$);
//this.synonyms$.forEach(data=>{
//console.log(data);
this.store.subscribe(data=>{
       this.searchedSynonyms = data.synonyms.data;
       console.log("Searched synonyms: " +this.searchedSynonyms.synonyms);
})

this.store.subscribe(data=>{
 // console.log(data.synonyms);
  
});
this.isLoading$.subscribe(data=>{
  console.log(data);
})
//console.log("Loaded selector: "+this.isLoading$.);
console.log("Searched synonyms: " + this.searchedSynonyms.synonyms);




  }


}


