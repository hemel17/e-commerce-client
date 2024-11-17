import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./pages/admin/dashboard";
import AdminOrders from "./pages/admin/orders";
import AdminProducts from "./pages/admin/products";
import AdminFeatures from "./pages/admin/features";
import ShopLayout from "./components/shop/layout";
import ShopHome from "./pages/shop/home";
import ShopAccount from "./pages/shop/account";
import ShopListing from "./pages/shop/listing";
import ShopCheckout from "./pages/shop/checkout";
import Error from "./pages/error";
import NoAccess from "./pages/no-access";

const App = () => {
  return (
    <div>
      <Routes>
        {/* authentication */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* admin */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        {/* shop */}
        <Route path="/shop" element={<ShopLayout />}>
          <Route path="home" element={<ShopHome />} />
          <Route path="account" element={<ShopAccount />} />
          <Route path="listing" element={<ShopListing />} />
          <Route path="checkout" element={<ShopCheckout />} />
        </Route>

        {/* not found */}
        <Route path="*" element={<Error />} />

        {/* no access */}
        <Route path="/no-access" element={<NoAccess />} />
      </Routes>
    </div>
  );
};

export default App;
