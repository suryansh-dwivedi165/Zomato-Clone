import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "../components/AuthPage"
import DashboardPage from "../components/DashboardPage"

const AppRouts = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<AuthPage role="user" mode="register" />} />
        <Route path="/user/login" element={<AuthPage role="user" mode="login" />} />
        <Route path="/user/forgot-password" element={<AuthPage role="user" mode="forgot-password" />} />
        <Route path="/user/reset-password" element={<AuthPage role="user" mode="reset-password" />} />
        <Route path="/user/dashboard" element={<DashboardPage role="user" />} />
        <Route path="/food-partener/register" element={<AuthPage role="partner" mode="register" />} />
        <Route path="/food-partener/login" element={<AuthPage role="partner" mode="login" />} />
        <Route path="/food-partener/forgot-password" element={<AuthPage role="partner" mode="forgot-password" />} />
        <Route path="/food-partener/reset-password" element={<AuthPage role="partner" mode="reset-password" />} />
        <Route path="/food-partener/dashboard" element={<DashboardPage role="partner" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouts
