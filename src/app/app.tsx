import  GlobalStyle from '.././global';
import Home from '../pages/home/home';
import ContextProviders  from '../contextProviders';

export function App() {
  return (
    <ContextProviders>
      <Home></Home>
      <GlobalStyle/>
    </ContextProviders>
  );
}

export default App;
