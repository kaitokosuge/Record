import axios from "axios";

import { isNullOrUndefined } from "../../utils/isNullOrUndefined";

export type MicroCmsDatas = {
	contents: MicroCmsPost[];
	limit: number;
	offset: number;
	totalCount: number;
};

export type MicroCmsPost = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	tmdb_id: string;
	show_day: string;
	star: number;
	comment: string;
};

export const getMicroCmsPosts = async (
	pageParam: number
): Promise<MicroCmsDatas> => {
	return axios
		.get<MicroCmsDatas>(
			`https://os1eystqtr.microcms.io/api/v1/record/?offset=${pageParam}`,
			{
				headers: {
					"X-MICROCMS-API-KEY": import.meta.env.VITE_MICROCMS_KEY,
				},
			}
		)
		.then((res) => {
			if (isNullOrUndefined(res.data)) {
				throw Error("データが見つかりませんでした");
			}

			return res.data;
		});
};
