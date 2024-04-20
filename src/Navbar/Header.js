import React from 'react'
import { Link } from 'react-router-dom'
import {Routes,Route} from "react-router-dom"
import Home from '../Components/Home'
import Explore from '../Components/Explore'
import BookTodo from '../Components/BookTodo'
import Signup from '../Components/Signup'
import Contact from '../Components/Contact'



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {
  return (
    <div>
        {/* <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/btodo">Book Todo</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/login-signup">Signup</Link> */}

       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit"><Link to="/explore">Explore</Link></Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit"><Link to="/btodo">Book Todo</Link></Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit"><Link to="/contact">Contact us</Link></Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit">  <Link to="/login-signup">Signup</Link></Button>
        
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  


        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/btodo' element={<BookTodo/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login-signup' element={<Signup/>}/>

        </Routes>
      
    </div>
  )
}

export default Header
