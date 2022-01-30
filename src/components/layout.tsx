import AppDrawer from './appDrawer';

const Layout = (props: any) => {
    
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
