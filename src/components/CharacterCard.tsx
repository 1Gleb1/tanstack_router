import { Link } from '@tanstack/react-router';

const CharacterCard = ({
	image,
	name,
	id,
}: {
	name: string;
	image: string;
	id: number;
}) => {
	return (
		<div>
			<Link
				to='/characters/$characterId'
				params={{
					characterId: id.toString(),
				}}
			>
				<img src={image} alt={name} />
				<h2>{name}</h2>
			</Link>
		</div>
	);
};

export default CharacterCard;
