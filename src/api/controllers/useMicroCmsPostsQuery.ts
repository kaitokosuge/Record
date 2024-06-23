import { useQuery } from "@tanstack/react-query";
import { getMicroCmsPosts } from "../repositories/microCmsPost";

export const useMicroCmsPostsQuery = () => {
	return useQuery({
		queryKey: ["micro-cms-posts"],
		queryFn: async () => await getMicroCmsPosts(),
	});
};
