import { useEffect } from 'react';
import DekstopDrawer from './Drawer/DekstopDrawer';
import { isDesktop } from 'react-device-detect';
import MobileDrawer from './Drawer/MobileDrawer';

const Layout = (props: any) => {
    
  useEffect(() =>{
    console.log('Layout rtendered');
    
  }, [])
  
    const { children, ...restprops } = props
    return (
      <>
        {
          !isDesktop ? 
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
