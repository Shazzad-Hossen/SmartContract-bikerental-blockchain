import Nav from '../pages/Shared/Nav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            
        </div>
    );
};

export default MainLayout;