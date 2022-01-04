import AppDrawer from './appDrawer';
import AppHeader from './appHeader';

const Layout = (props: any) => {
    
    const { children } = props
    return (
      <div>
        {/* <AppHeader /> */}
        <AppDrawer>
          {children}
        </AppDrawer>
      </div>
    );

}

export default Layout;
