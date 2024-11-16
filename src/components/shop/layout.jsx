import { Outlet } from "react-router-dom";
import ShopHeader from "./header";

const ShopLayout = () => {
  return (
    <div>
      <ShopHeader />
      <Outlet />
    </div>
  );
};

export default ShopLayout;
