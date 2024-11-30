import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { NotFound } from './pages/NotFound/NotFound'
import { Login } from './pages/Login/Login'
import { Layout } from "./components/Layout/Layout";
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="login" element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
