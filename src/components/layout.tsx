import { useEffect } from 'react';
import AppDrawer from './appDrawer';
import PersistentDrawerLeft from './desktopdrawer';
import ResponsiveDrawer from './mobileDrawer';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

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
        {/* {
          !isMobile ? 
            <PersistentDrawerLeft sx={{ display: { sm: 'none' } }} {...restprops}>
              {children}
            </PersistentDrawerLeft> 
          :
            <ResponsiveDrawer sx={{ display: { sm: 'none' } }} {...restprops}>
              {children}
            </ResponsiveDrawer>
        } */}
  

      </div>
    );

}

export default Layout;
