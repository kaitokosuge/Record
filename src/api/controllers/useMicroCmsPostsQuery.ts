import { useInfiniteQuery } from "@tanstack/react-query";

import { getMicroCmsPosts } from "../repositories/microCmsPosts";

export const useMicroCmsPostsQuery = () => {
	return useInfiniteQuery({
		queryKey: ["data"],
		queryFn: ({ pageParam }) => getMicroCmsPosts(pageParam),
		initialPageParam: 0,
		getNextPageParam: (pageParam) => {
			if (pageParam.contents.length !== 0) {
				const nextOffset = pageParam.offset + 10;
				return nextOffset;
			}
			return undefined;
		},
	});
};
