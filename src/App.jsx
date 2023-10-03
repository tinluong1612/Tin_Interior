import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes'
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';

function App() {
  return (
    <div>
      <Header/>
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
      <Footer/>
    </div>
  );
}

export default App;
