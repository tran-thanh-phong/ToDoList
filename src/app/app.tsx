import  GlobalStyle from '.././global';
import Home from '../pages/home/home';
import ContextProviders  from '../contextProviders';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'src/pages/login/login';
import Category from 'src/pages/category/category';

export function App() {
  return (
    <ContextProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/category/:name" element={<Category/>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle/>
    </ContextProviders>
  );
}

export default App;
