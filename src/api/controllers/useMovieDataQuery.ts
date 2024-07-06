import { useQuery } from "@tanstack/react-query";

import { getMovieData } from "../repositories/movieData";

export const useMovieDataQuery = (tmdb_id: string) => {
	return useQuery({
		queryKey: [`${tmdb_id}`],
		queryFn: async () => await getMovieData(tmdb_id),
	});
};
