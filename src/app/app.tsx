import  GlobalStyle from '.././global';
import Home from '../pages/home/home';
import { TaskListContextProvider } from '../contexts/taskTypeContext';

export function App() {
  return (
    <TaskListContextProvider>
      <Home></Home>
      <GlobalStyle/>
    </TaskListContextProvider>
  );
}

export default App;
