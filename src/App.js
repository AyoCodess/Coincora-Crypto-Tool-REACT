import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MarketCapOf from './Pages/MarketCapOf';
import NavbarLayout from './UI/NavbarLayout.js';
import Newbies from './Pages/Newbies';
import { ThemeProvider } from '@emotion/react';
import theme from './MUIthemeOverrides';
import Footer from './UI/Footer/Footer';
import GoogleForm from './Pages/GoogleForm';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLayout>
          <Routes>
            <Route path='*' exact element={<GoogleForm />}></Route>
            <Route path='/marketcapof' element={<MarketCapOf />}></Route>
            <Route path='/newbies' element={<Newbies />}></Route>
          </Routes>
          <Footer />
        </NavbarLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
