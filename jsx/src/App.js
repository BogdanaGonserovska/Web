import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login'
import Main from './pages/main/main'
import SignUp from './pages/signup/signup'
import User from './pages/user_profile/user'
import Edit from './pages/edit_user/edit_user'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/user' element={<User />} />
        <Route exact path='/edit_user' element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
