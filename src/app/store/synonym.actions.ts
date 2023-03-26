import { createAction, props } from '@ngrx/store';
import { SearchItem } from '../model/search.interface';
import { SearchSynonymResult } from './interfaces/synonymResult';

export const SEARCH_SYNONYM = '[searchModule] search for synonyms';
export const SEARCH_SYNONYM_SUCCESS = '[searchModule] search for synonyms Success Action';
export const SEARCH_SYNONYM_FAILURE = '[searchModule] search for synonyms Fail Action'


export const searchSynonyms = createAction(
    SEARCH_SYNONYM,
    props<{synonym: SearchItem}>()
);

export const searchSynonymsSuccess = createAction(
    SEARCH_SYNONYM_SUCCESS,
  props<{ results: SearchSynonymResult}>()
);

export const searchSynonymsFail = createAction(
    SEARCH_SYNONYM_FAILURE,
  props<{ error: string }>()
);


