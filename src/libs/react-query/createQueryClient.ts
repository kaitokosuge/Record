import { QueryClient } from "@tanstack/react-query";

export const createQueryClient = (): QueryClient =>
	new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnMount: false,
				refetchOnWindowFocus: false,
				staleTime: 1000 * 60 * 10, // 10分
			},
		},
	});
