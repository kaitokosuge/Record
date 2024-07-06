import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const TestProvider: FC<PropsWithChildren> = ({ children }) => (
	<QueryClientProvider client={new QueryClient()}>
		{children}
	</QueryClientProvider>
);
