import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Container from '@mui/material/Container';
import CategoryList from "./pages/CategoryList";

function App() {
    return (
        <>
            <Router>
                <Container
                    maxWidth='lg'
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/product-list' element={<ProductList/>}/>
                        <Route path='/category-list' element={<CategoryList/>}/>
                    </Routes>
                </Container>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;
