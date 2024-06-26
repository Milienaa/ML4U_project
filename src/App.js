import './app.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<HomePage />} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;