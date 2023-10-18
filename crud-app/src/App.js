import AllUsers from './Component/AllUsers';
import AllProducts from './Component/AllProducts';
import AddUser from './Component/AddUser';
import AddProduct from './Component/AddProduct';
import EditUser from './Component/EditUser';
import EditProduct from './Component/EditProduct';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import CodeForInterview from './Component/CodeForInterview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeForInterview /> } />
        <Route path="all" element={<AllUsers /> } />
        <Route path="/products/allProducts" element={<AllProducts /> } />
        <Route path="/products" element={<AllProducts /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
