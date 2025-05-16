import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { characterQueryOptions } from '../../api/characterOptions';
import CharacterCard from '../../components/CharacterCard';

export const Route = createFileRoute('/characters/$characterId')({
	loader: ({ context: { queryClient }, params: { characterId } }) => {
		return queryClient.ensureQueryData(characterQueryOptions(+characterId));
	},
	component: CharacterComponent,
});

function CharacterComponent() {
	const characterId = Route.useParams().characterId;
	const { data: character } = useSuspenseQuery(
		characterQueryOptions(+characterId)
	);
	return (
		<CharacterCard
			id={character.id}
			image={character.image}
			name={character.name}
		/>
	);
}
