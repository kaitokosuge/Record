import { MicroCmsPost } from "../api/repositories/microCmsPost";

export default function PostCard({ data }: { data: MicroCmsPost }) {
	console.log(data);
	return <div className="text-black">{data.comment}</div>;
}
