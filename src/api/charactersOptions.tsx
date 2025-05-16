import { queryOptions } from '@tanstack/react-query';
import { queryCharacters } from './api';

export const charactersQueryOptions = queryOptions({
	queryKey: ['characters'],
	queryFn: () => queryCharacters(),
});
