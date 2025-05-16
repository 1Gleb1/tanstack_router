import { QueryClient } from '@tanstack/react-query';
import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		component: () => (
			<>
				<div className='p-2 flex gap-2 justify-center'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/characters'>Characters</Link>
				</div>
				<hr />
				<Outlet />
				<TanStackRouterDevtools />
			</>
		),
	}
);
