
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/MovieList/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import DetailPage from './Pages/DetailPage/DetailPage';
import Layout from './HOC/Layout';
import AdminUserPage from './Pages/AdminUserPage/AdminUserPage';
import AdminMoviePage from './Pages/AdminMoviePage/AdminMoviePage';
import Spinner from './Pages/Component/Spinner/Spinner';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
function App() {
  return (
    <div >
      <Spinner />
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/' element={<Layout><HomePage /></Layout>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/detail/:id' element={<Layout><DetailPage /></Layout>} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/admin/user' element={<AdminUserPage />} />
          <Route path='/admin/movie' element={<AdminMoviePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
