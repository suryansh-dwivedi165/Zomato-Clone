import { BrowserRouter, Routes, Route } from "react-router-dom"

const AppRouts = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/user/register" element={<h1>User Register</h1>}/>
            <Route path="/user/login" element={<h1>User Login</h1>}/>
            <Route path="food-partener/register" element={<h1>Food Partener Register</h1>}/>
            <Route path="food-partener/login" element={<h1>Food Partener Login</h1>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouts;
