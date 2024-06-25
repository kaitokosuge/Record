import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { createQueryClient } from "./libs/react-query/createQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

test("render App.tsx", () => {
	const queryClient = createQueryClient();
	render(
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
	const loadingText = screen.getByText("記事を取得しています");
	expect(loadingText).toBe;
});
