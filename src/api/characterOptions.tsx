import { queryOptions } from '@tanstack/react-query';
import { queryCharacter } from './api';

export const characterQueryOptions = (characterId: number) =>
	queryOptions({
		queryKey: ['character', { characterId }],
		queryFn: () => queryCharacter(characterId),
	});
