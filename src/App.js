import React from 'react';
import {Global} from './GlobalState'
import './App.css';
import TodoComponent from './TodoComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Toolbar,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function PageOne(){
  return(
    <div>
      <h2>Page One</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  )
}
function PageTwo(){
  return(
    <div>
      <h2>Page Two</h2>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:600px")

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }

  const drawerContent = (
    <div>
      <Toolbar />
          <List>
            <ListItem button component={Link} to="/todos">
              <ListItemText primary="Todo List"/>
            </ListItem>
            <ListItem button component={Link} to="/page-one">
              <ListItemText primary="Page One"/>
            </ListItem>
            <ListItem button component={Link} to="/page-two">
              <ListItemText primary="Page Two"/>
            </ListItem>
          </List>
    </div>
  );

  return (
    <Global>
    <Router>
      <CssBaseline />
      <div style={{ display: "flex"}}>
      {isMobile ? (
        <>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ position: "fixed", top: 10, left: 10, zIndex: 1300}}
          >
            <MenuIcon/>
          </IconButton>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
          {drawerContent}
          </Drawer>
        </>
      ): (
        <Drawer
          variant='permanent'
          anchor='left'
          sx={{
            width: 240,
            flexShrink: 0,
          }}
        >
        {drawerContent}
        </Drawer>
      )}
          <main style={{ flexGrow: 1, padding: "20px"}}>
            <Toolbar />
            <Routes>
              <Route path='/todos' element={<TodoComponent />} />
              <Route path='/page-one' element={<PageOne />} />
              <Route path='/page-two' element={<PageTwo />} />
              <Route path='/' element={<TodoComponent />} />
            </Routes>
          </main>
      </div>
    </Router>
    </Global>
  );
};