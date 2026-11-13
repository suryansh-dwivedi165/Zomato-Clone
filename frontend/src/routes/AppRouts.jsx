import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthPage from "../components/AuthPage"
import DashboardPage from "../components/DashboardPage"

const AppRouts = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Route */}
        <Route path="/user/register" element={<AuthPage role="user" mode="register" />} />
        <Route path="/user/login" element={<AuthPage role="user" mode="login" />} />
        <Route path="/user/dashboard" element={<DashboardPage role="user" />} />

        {/* Food Partener Route */}
        <Route path="/food-partener/register" element={<AuthPage role="partner" mode="register" />} />
        <Route path="/food-partener/login" element={<AuthPage role="partner" mode="login" />} />
        <Route path="/food-partener/dashboard" element={<DashboardPage role="partner" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouts
