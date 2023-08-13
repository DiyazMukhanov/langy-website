import axios from 'axios';

const apiUrl = 'https://langy-api.onrender.com/api/v1';

const token = () => {
    let storedToken
    if(typeof window !== 'undefined') {
        storedToken = localStorage.getItem('token')
    }
    return storedToken
  }

  export const sendAssay = async (essay) => {
    const storedToken = token()
    const headers = {
      'Authorization': `Bearer ${storedToken}`,
      'Content-Type': 'application/json', 
    };
  
    return await axios.post(`${apiUrl}/users/essay`, { essay }, { headers });
   } 