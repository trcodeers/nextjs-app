import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

const DrawerAppBar = (props: any) =>{

    const { handleDrawerToggle } = props
    return(
        <AppBar
            position="fixed"
            sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            }}
            style={{zIndex:1301}}
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
    )
}

export default DrawerAppBar;