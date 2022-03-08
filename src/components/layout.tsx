import { useEffect } from 'react';
import DekstopDrawer from './Drawer/DekstopDrawer';
import MobileDrawer from './Drawer/mobileDrawer';
import { BrowserView, MobileView, isBrowser, isMobile, isDesktop } from 'react-device-detect';

const Layout = (props: any) => {
    
  useEffect(() =>{
    console.log('Layout rtendered');
    
  }, [])
  
    const { children, ...restprops } = props
    return (
      <>
        {
          isDesktop ? 
            <DekstopDrawer {...restprops}>
              {children}
            </DekstopDrawer> 
          :
            <MobileDrawer {...restprops}>
              {children}
            </MobileDrawer>
        }
      </>
    );

}

export default Layout;
