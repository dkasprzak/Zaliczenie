import { FC } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import { Navbar } from './Components/Navbar/navbar';
import { Home } from './Components/Routes/Home/home';
import { Users } from './Components/Routes/Users/users';
import { Posts } from './Components/Routes/Posts/posts';

export const App : FC = () => {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
          <Link to="Posts">Posts</Link>
          <Link to="Users">Users</Link>
          <Link to="/">Home</Link>
      <Routes>
        <Route path='Routes' element={<Users/>}/>
        <Route path='Posts' element={<Posts/>}/>
        <Route index element = {<Home/>}/>
      </Routes>
    </BrowserRouter>
  </>  
  );
}

export default App;
