import axios from 'axios';

const apiUrl = 'http://localhost:3000';

export const googleRegistration = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/auth/google`);
    console.log('Registration successful:', response.data);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Error status:', error.response.status);
      console.log('Error data:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.log('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error message:', error.message);
    }
  }
};
