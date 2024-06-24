import axios from "axios";
import { isNullOrUndefined } from "../../utils/isNullOrUndefined";
import { MicroCmsPost } from "./microCmsPosts";

export const getMicroCmsPost = async (
	postId: string
): Promise<MicroCmsPost> => {
	return axios
		.get<MicroCmsPost>(`https://os1eystqtr.microcms.io/api/v1/record/${postId}`)
		.then((res) => {
			if (isNullOrUndefined(res.data)) {
				throw Error("データが存在しません");
			}
			return res.data;
		});
};
