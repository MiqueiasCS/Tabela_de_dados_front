import { Routes, Route } from "react-router-dom";
import { ListingPage } from "../pages/listing";
import { DashboardPage } from "../pages/dashboard";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<ListingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
