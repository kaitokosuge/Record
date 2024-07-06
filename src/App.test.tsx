import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import { test } from "vitest";
import { render, screen, expect } from "@testing-library/react";
import PostCard from "./features/PostCard";
import { TestProvider } from "./test/TestProvider";

test("render App.tsx", () => {
	render(
		<TestProvider>
			<PostCard
				record={{
					id: "test",
					createdAt: "2024",
					updatedAt: "",
					publishedAt: "",
					revisedAt: "",
					tmdb_id: "",
					show_day: "",
					star: 10,
					comment: "",
				}}
			/>
		</TestProvider>
	);
	expect(screen.getByText("release_day:")).toBeInTheDocument();
});
