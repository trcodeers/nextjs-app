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
        <PersistentDrawerLeft sx={{ display: { sm: 'none' } }} {...restprops}>
          {children}
        </PersistentDrawerLeft>
      </div>
    );

}

export default Layout;
