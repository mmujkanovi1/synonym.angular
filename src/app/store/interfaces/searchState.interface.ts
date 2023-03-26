import { SearchItem } from '../../model/search.interface';
import { SearchSynonymResult } from './synonymResult';

export interface SearchStateInterface {
    isLoading: boolean;
    data: SearchSynonymResult;
    error: string | null;
}