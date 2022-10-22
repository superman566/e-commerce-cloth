import {
  Routes,
  Route
} from 'react-router-dom';
import Header from './routes/header/header.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />}></Route>
      </Route>
      <Route path='signin' element={<SignIn />}></Route>
    </Routes>
  )
};
export default App;
