import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { CartProvider, CartContext } from "./context/CartContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import AdminHome from "./admin/AdminHome.jsx";
import AdminUsers from "./admin/AdminUsers.jsx";
import AdminProducts from "./admin/AdminProducts.jsx";
import AdminSettings from "./admin/AdminSettings.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";


export default function App() {
  return (
    <CartProvider>
      <AppLayout />
    </CartProvider>
  );
}

function AppLayout() {
  const location = useLocation();
  const { cartItems } = React.useContext(CartContext);

  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Navbar cartCount={cartItems.length} />}

      <main className="flex-1">
        <UserProvider>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />


            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<AdminHome />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
          </Routes>
        </UserProvider>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}
