import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import PortfolioPage from "./pages/PortfolioPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<RootLayout />}>
					<Route index element={<PortfolioPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
