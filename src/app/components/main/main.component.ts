import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SynonymService } from 'src/app/services/synonymService';
import * as SynonymActions from '../../store/synonym.actions';
import { SearchItem } from 'src/app/model/search.interface';
import { Observable } from 'rxjs';
import { errorSelector, isLoadingSelector, searchSynonymSelector } from 'src/app/store/synonym.selectors';
import { AppStateInterface } from 'src/app/store/state/appState.interface';
import { AddSynonymModel } from '../../model/addSynonym.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchSynonymForm!: string;
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


  constructor(private synonymService: SynonymService, private store: Store<AppStateInterface>,
    private toastr: ToastrService
  ) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
  }

  ngOnInit(): void {
  }

  searchSynonyms(input: string) {

    if (input != "") {
      this.store.dispatch(SynonymActions.searchSynonyms({ synonym: { word: input.trim() } }));
      this.synonyms$ = this.store.pipe(select(searchSynonymSelector));
      this.error$ = this.store.pipe(select(errorSelector));
      this.searchSynonymForm = input.trim();
    }

  }


  async addSynonym(input1: string, input2: string, searchInput: string) {
    this.addSynonymModel.word = input1.trim();
    this.addSynonymModel.word2 = input2.trim();
    if (input1 == "" || input2 == "") {
      this.toastr.error('You cannot set empty input. Try again!!!');
    }

    else if (input1 == input2) {
      this.toastr.warning('Word and its synonym cannot be the same');
    }
    else {
      this.synonymService.addSynonym(this.addSynonymModel).subscribe(data => {
        if (data.responseMessage == "Synonym added successfully") {
          this.toastr.success(data.responseMessage);
          if (searchInput != "") {
            this.searchSynonyms(searchInput);
          }
        }
        else {
          this.toastr.warning(data.responseMessage);
        }
      })
    }
  }
}


