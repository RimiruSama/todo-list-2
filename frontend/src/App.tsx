import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Container from '@mui/material/Container';

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
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Routes>
                </Container>
            </Router>
            <ToastContainer />
        </>
    );
}

export default App;
