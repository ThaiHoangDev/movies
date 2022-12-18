import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import RootRouters from './RootRouters';

function App() {
  return (
    <BrowserRouter>
      <RootRouters />
    </BrowserRouter>
  );
}

export default App;
