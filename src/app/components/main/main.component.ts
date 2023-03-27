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
import { AddSynonymModel } from '../../model/addSynonym';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchSynonymForm: string = "";
  addSynonymModel: AddSynonymModel = {
    word: "",
    word2: ""
  };
  searchInput: SearchItem = {
    word: ""
  }
  isLoading$: Observable<boolean>
  error$: Observable<string | null>;
  synonyms$: Observable<string[]>;
  searchedSynonyms: SearchSynonymResult = { synonyms: [] };
  searchValue: string = '';


  constructor(private searchService: SearchService, private store: Store<AppStateInterface>,
     private toastr:ToastrService
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
  }

  ngOnInit(): void {
  }

  async searchSynonyms(input: string) {
    this.searchInput.word = input;
    this.store.dispatch(SynonymActions.searchSynonyms({ synonym: { word: input } }));
    this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.searchSynonymForm = input;
  }

  addSynonym(word1: string, word2: string) {
    this.addSynonymModel.word = word1;
    this.addSynonymModel.word2 = word2;
    
    if(word1=="" || word2==""){
      this.toastr.error('You cannot set empty input. Try again!!!');
console.log("prvi if");
    }

    else if (word1 == word2) {
      this.toastr.warning('Word and its synonym cannot be the same');
console.log("drugi if");
    }
    else {
      console.log("treci if");
      this.toastr.success('Synonyms successufully added');
   // this.searchService.addSynonym(this.addSynonymModel);
   this.store.dispatch(SynonymActions.addSynonymAction({twoWords:{word:"pet",word2:"sest"}}));
    }
    console.log(this.addSynonymModel.word + ", " + this.addSynonymModel.word2);
   // this.searchService.addSynonym(this.addSynonymModel);

  }

   handleKeyPress(e:any, searchValue:string){
     console.log("dosao ovdjee");
    var key=e.keyCode || e.which;
     if (key==13){
      this.searchSynonyms(searchValue);
     }
   }


}


