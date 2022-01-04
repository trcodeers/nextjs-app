import AppDrawer from './appDrawer';

const Layout = (props: any) => {
    
    const { children } = props
    return (
      <div>
        <AppDrawer>
          {children}
        </AppDrawer>
      </div>
    );

}

export default Layout;
