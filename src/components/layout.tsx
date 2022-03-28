import { useEffect, useState } from 'react';
import DekstopDrawer from './Drawer/DekstopDrawer';
import MobileDrawer from "./Drawer/MobileDrawer";
import { isDesktop } from 'react-device-detect';

const Layout = (props: any) => {
    
    const [viewPort, setViewPort] = useState<String>()

    useEffect(() =>{
     setViewPort(isDesktop ? 'dekstop' : 'mobile')
    }, [])
  
    const { children, ...restprops } = props;
    
    return (
      <>
        {viewPort && viewPort !== 'dekstop' && 
            <MobileDrawer
              {...restprops}
            >
          {children}
        </MobileDrawer>
        }
      
        {viewPort && viewPort === 'dekstop' && 
            <DekstopDrawer
              {...restprops}
            >
              {children}
            </DekstopDrawer> 
        }   
      </>
    );

}

export default Layout;
