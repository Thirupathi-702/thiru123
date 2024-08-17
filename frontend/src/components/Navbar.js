// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           Stock Market App
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
//         <Button color="inherit" component={Link} to="/watchlist">Watchlist</Button>
//         <Button color="inherit" component={Link} to="/login">Login</Button>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const token = localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/login';
//   };

//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/portfolio">Portfolio</Link></li>
//         {token ? (
//           <li onClick={handleLogout}>Logout</li>
//         ) : (
//           <li><Link to="/login">Login</Link></li>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
import { useRecoilValue } from 'recoil'; 
import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { authState } from "../store/authState";
function Navbar() {
  const token = localStorage.getItem('token');
  const authStateValue = useRecoilValue(authState);
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <AppBar position="static">
        <h4>Welcome {authStateValue.username}</h4>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stock Market App
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/portfolio">Portfolio</Button>
        {token ? (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
