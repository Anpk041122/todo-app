
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useReducer } from 'react';
import Header from './layout/Header';
import Body from './layout/Body';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import cookie from 'react-cookies';
import myUserReducer from './reducers/MyUserReducer';
import { MyUserContext } from './config/MyContext';

const body = {
  marginTop: '35px',
  minHeight: '700px',
  position: 'relative'
}
function App() {
  let current = cookie.load("current-user")
  if (current == undefined)
    current = null

  const [user, dispatch] = useReducer(myUserReducer, current)

  return (
    <MyUserContext.Provider value={[user, dispatch]}>
      <BrowserRouter>
        <Header />
        <Outlet />
        <div style={body}>
          <Routes>
            <Route path='/' element={<Body />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </MyUserContext.Provider>
  );
}

export default App;
