import { UseSuspenseQueryResult } from '@tanstack/react-query';
import CharacterCard from '../components/CharacterCard'

const Character = ({
	charactersQuery,
}: {
	charactersQuery: UseSuspenseQueryResult<any, Error>;
}) => {
	return (
		<div className='mt-5'>
			{charactersQuery.isLoading && <p>Loading...</p>}
			{charactersQuery.error && <p>Error: {charactersQuery.error.message}</p>}
			{charactersQuery.data && (
				<ul className='grid grid-cols-3 container mx-auto gap-5'>
					{charactersQuery.data.map(character => (
						<li key={character.id} className='max-w-max'>
							<CharacterCard
								name={character.name}
								image={character.image}
								id={character.id}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Character;
