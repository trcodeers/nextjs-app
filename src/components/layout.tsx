import { useEffect, useState, useContext } from 'react';
import DekstopDrawer from './Drawer/DekstopDrawer';
import MobileDrawer from "./Drawer/MobileDrawer";
import { isDesktop } from 'react-device-detect';
import DarkModeContext from '../context/DarkModeContext';

const Layout = (props: any) => {
    
    const [viewPort, setViewPort] = useState<String>()
    const {  handleDarkModeChange } = useContext(DarkModeContext);

    useEffect(() =>{
     setViewPort(isDesktop ? 'dekstop' : 'mobile')
    }, [])
  
    const { children, ...restprops } = props;
    
    return (
      <>
        {viewPort !== 'dekstop' && 
            <MobileDrawer
              handleDarkModeChange={handleDarkModeChange}
              {...restprops}
            >
          {children}
        </MobileDrawer>
        }
      
        {viewPort === 'dekstop' && 
            <DekstopDrawer
              handleDarkModeChange={handleDarkModeChange}
              {...restprops}
            >
              {children}
            </DekstopDrawer> 
        }   
      </>
    );

}

export default Layout;
