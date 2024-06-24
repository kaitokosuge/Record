import { useQuery } from "@tanstack/react-query";
import { getMicroCmsPosts } from "../repositories/microCmsPosts";

export const useMicroCmsPostsQuery = () => {
	return useQuery({
		queryKey: ["micro-cms-posts"],
		queryFn: async () => await getMicroCmsPosts(),
	});
};
