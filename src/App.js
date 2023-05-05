import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Products from "./components/Products/Products";
import Main from './components/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
