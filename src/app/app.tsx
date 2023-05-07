import  GlobalStyle from '.././global';
import Home from '../pages/home/home';
import ContextProviders  from '../contextProviders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'src/pages/login/login';
import Category from 'src/pages/category/category';
import ProtectedRoute from 'src/routes/route';

export function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute priv={true}>
              <Home/>
            </ProtectedRoute>
          } />
          <Route path="/login" element={
            <ProtectedRoute priv={false}>
              <Login/>
            </ProtectedRoute>
          } />
          <Route path="/category/:name" element={
            <ProtectedRoute priv={true}>
              <Category/>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </ContextProviders>
  );
}

export default App;
