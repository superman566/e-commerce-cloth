import {
  Routes,
  Route
} from 'react-router-dom';
import Header from './routes/header/header.component';
import Home from './routes/home/home.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  )
};

export default App;
