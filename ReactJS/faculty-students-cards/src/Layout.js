import { Outlet } from "react-router-dom";
import Header from './Header';

const Layout = ()=>{
  return (
    <>
      <div class="container-fluid">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;