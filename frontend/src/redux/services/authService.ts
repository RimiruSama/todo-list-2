import axios from 'axios';

const API_URL = '/api/users';

// Register user
const register = async (userData: object) => {
    const response = await axios.post(API_URL, userData);
}