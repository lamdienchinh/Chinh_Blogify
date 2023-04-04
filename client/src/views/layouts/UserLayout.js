import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
function UserLayout() {
  return (
    <div className="wrapper">
      <div className="content">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
export default UserLayout;