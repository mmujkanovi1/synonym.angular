import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from './state/appState.interface';
import { SearchStateInterface } from './interfaces/searchState.interface';
import { SearchSynonymResult } from './interfaces/synonymResult';

export const selectFeature = (state: AppStateInterface) => state;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => {return state.synonyms.isLoading}
);

export const searchSynonymSelector = createSelector(
    selectFeature,
    (state) => {
        console.log(state.synonyms.data);
        return state.synonyms.data.synonyms;
    }
  );

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.synonyms.error
);