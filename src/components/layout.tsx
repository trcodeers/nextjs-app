import { useEffect } from 'react';
import AppDrawer from './appDrawer';
import PersistentDrawerLeft from './desktopdrawer';
import ResponsiveDrawer from './mobileDrawer';

const Layout = (props: any) => {
    
  useEffect(() =>{
    console.log('Layout rtendered');
    
  }, [])
  
    const { children, ...restprops } = props
    return (
      <div>
        <ResponsiveDrawer sx={{ display: { sm: 'none' } }} {...restprops}>
          {children}
        </ResponsiveDrawer>
      </div>
    );

}

export default Layout;
