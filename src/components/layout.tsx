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
            <MobileDrawer {...restprops}>
          {children}
        </MobileDrawer>
      {/* {!isDesktop &&
        <MobileDrawer {...restprops}>
          {children}
        </MobileDrawer>

      }
      {
        isDesktop && 
          <DekstopDrawer {...restprops}>
            {children}
          </DekstopDrawer> 
      } */}
         
      </>
    );

}

export default Layout;
