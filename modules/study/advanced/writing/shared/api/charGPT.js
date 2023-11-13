import axios from 'axios';

// const apiUrl = 'https://langy-api.onrender.com/api/v1';
const apiUrl = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? 'http://localhost:3000/api/v1' : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`

// const token = () => {
//     let storedToken
//     if(typeof window !== 'undefined') {
//         storedToken = localStorage.getItem('token')
//     }
//     return storedToken
//   }

let token

if (typeof window !== 'undefined') {
  token = localStorage.getItem('token')
}

const options = { withCredentials: true, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }

export const sendAssay = async (essay) => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 

  return await axios.post(`${apiUrl}/users/essay`, { essay }, options);
} 