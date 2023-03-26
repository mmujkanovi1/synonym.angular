import { createReducer, on } from '@ngrx/store';
import { SearchStateInterface } from './interfaces/searchState.interface';
import * as SynonymActions from './synonym.actions';
import { SearchSynonymResult } from './interfaces/synonymResult';

export const initialState: SearchStateInterface = {
  isLoading: true,
  data: {synonyms:[]}/*{word:""}*/,
  error: null,
};


export const reducers = createReducer(
  initialState,
  on(SynonymActions.searchSynonyms, (state) => ({ ...state, isLoading: true })),
  on(SynonymActions.searchSynonymsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    data: action.results,
  })),
  on(SynonymActions.searchSynonymsFail, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
