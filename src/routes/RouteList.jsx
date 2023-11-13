import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { DashboardPage } from "../pages/movie/DashboardPage";
import { DetailPage } from "../pages/movie/DetailPage";
import { SearchPage } from "../pages/movie/SearchPage";
import TokenProtected from "../asset/components/protected/TokenProtected";
import { ResponsivePage } from "../pages/movie/ResposivePage";

export const RouteList = () => {
  //untuk menggunakan react query di index
  const queryMovie = new QueryClient();
  return (
    <BrowserRouter>
      {/* menggunakan react query */}
      <QueryClientProvider client={queryMovie}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <TokenProtected>
              <DashboardPage/>
            </TokenProtected>
          }/>
          <Route path="/login1" element={<LoginPage />} />
          {/* <Route path="/" element={<RegisterPage />} /> */}
          <Route path="/" element={<ResponsivePage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/search/:query" element={<SearchPage />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
