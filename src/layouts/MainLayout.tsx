import { Outlet } from "react-router-dom";

const mainStyle: React.CSSProperties = {
};

const MainLayout = () => {
  return (
    <main style={mainStyle}>
      <Outlet />
    </main>
  );
};

export default MainLayout;
