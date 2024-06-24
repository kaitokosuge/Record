import { useQuery } from "@tanstack/react-query";
import { getMicroCmsPost } from "../repositories/microCmsPost";

export const useMicroCmsPostsQuery = (postId: string) => {
	return useQuery({
		queryKey: [`${postId}`],
		queryFn: async () => await getMicroCmsPost(postId),
	});
};
