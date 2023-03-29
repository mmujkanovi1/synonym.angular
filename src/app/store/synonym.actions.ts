import { createAction, props } from '@ngrx/store';
import { SearchItem } from '../model/search.interface';
import { SearchSynonymResult } from './interfaces/synonymResult';
import { AddSynonymModel } from '../model/addSynonym.interface';

export const SEARCH_SYNONYM = '[synonymModule] search for synonyms';
export const SEARCH_SYNONYM_SUCCESS = '[synonymModule] search for synonyms Success Action';
export const SEARCH_SYNONYM_FAILURE = '[synonymModule] search for synonyms Fail Action'


export const searchSynonyms = createAction(
  SEARCH_SYNONYM,
  props<{ synonym: SearchItem }>()
);

export const searchSynonymsSuccess = createAction(
  SEARCH_SYNONYM_SUCCESS,
  props<{ results: SearchSynonymResult }>()
);

export const searchSynonymsFail = createAction(
  SEARCH_SYNONYM_FAILURE,
  props<{ error: string }>()
);




