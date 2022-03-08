import { useEffect } from 'react';
import AppDrawer from './appDrawer';

const Layout = (props: any) => {
    
  useEffect(() =>{
    console.log('Layout rtendered');
    
  }, [])
  
    const { children, ...restprops } = props
    return (
      <div>
        <AppDrawer {...restprops}>
          {children}
        </AppDrawer>
      </div>
    );

}

export default Layout;
