import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import { Button } from '@mui/material';
import Orders from '../Orders/Orders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../hooks/useAuth';
import AddProducts from '../AddProducts/AddProducts';
import Payment from '../Payment/Payment';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
    <div>
      <Toolbar />
      <Divider />
      {!admin && <Box>
        <Link style={{textDecoration: 'none'}} to="/home"><Button sx={{my: 3}} variant="contained">Home</Button></Link><br />
        <Link style={{textDecoration: 'none'}} to={`${url}`}><Button  variant="contained">Dashboard</Button></Link><br />
        <Link style={{textDecoration: 'none'}} to={`${url}/payment`}><Button sx={{my: 3}}  variant="contained">Payment</Button></Link><br />
        </Box>}
      {admin && <Box>
          <Link style={{textDecoration: 'none'}} to="/home"><Button sx={{my: 3}} variant="contained">Home</Button></Link><br />
          <Link style={{textDecoration: 'none'}} to={`${url}/makeAdmin`}><Button sx={{my: 3}} variant="contained">Make Admin</Button></Link><br />
          <Link style={{textDecoration: 'none'}} to={`${url}/addProduct`}><Button  variant="contained">Add Products</Button></Link><br />
          <Link style={{textDecoration: 'none'}} to={`${url}/manageProduct`}><Button sx={{my: 3}}  variant="contained">Manage Products</Button></Link><br />
          <Link style={{textDecoration: 'none'}} to={`${url}/manageOrders`}><Button sx={{my: 3}}  variant="contained">Manage Orders</Button></Link><br />
        </Box>}
      
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
         <Switch>
        <Route exact path={path}>
            <Orders></Orders>
        </Route>
        <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/addProduct`}>
            <AddProducts></AddProducts>
        </Route>
        <Route path={`${path}/manageOrders`}>
            <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/manageProduct`}>
          <ManageProducts></ManageProducts>
        </Route>
      </Switch>   
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
