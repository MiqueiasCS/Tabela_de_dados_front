import { Routes, Route } from "react-router-dom";
import { ListingPage } from "../pages/listing";
import { DashboardPage } from "../pages/dashboard";
import { LoginPage } from "../pages/login";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/table" element={<ListingPage />} />
      <Route path="/dashboard/:hostname" element={<DashboardPage />} />
    </Routes>
  );
};
