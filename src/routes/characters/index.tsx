import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, HeadContent } from '@tanstack/react-router';
import { charactersQueryOptions } from '../../api/charactersOptions';
import Character from '../../Page/Character';

export const Route = createFileRoute('/characters/')({
	head: () => ({
		meta: [
			{
				title: 'Character',
			},
			{
				name: 'description',
				content: 'Character List',
			},
		],
	}),
	component: () => (
		<>
			<HeadContent />

			<CharactersIndexComponent />
		</>
	),
	loader: ({ context: { queryClient } }) =>
		queryClient.ensureQueryData(charactersQueryOptions),
});

function CharactersIndexComponent() {
	const charactersQuery = useSuspenseQuery(charactersQueryOptions);

	return <Character charactersQuery={charactersQuery} />;
}
