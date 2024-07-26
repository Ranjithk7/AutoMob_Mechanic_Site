import './App.css';
import Nav from './Nav';
import HomePage from './pages/HomePage';
import ServiceListPage from './pages/ServiceListPage';
import ServicePage from './pages/ServicePage';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Nav />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<ServiceListPage />} />
            <Route path='/services/:serviceId' element={<ServicePage />} />
            <Route path='/booking' element={<BookingPage />} />
            <Route path='/success' element={<SuccessPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
