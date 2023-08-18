import axios from 'axios';

// const apiUrl = 'https://langy-api.onrender.com/api/v1';
const apiUrl = 'http://localhost:3000/api/v1';

// const token = () => {
//   let storedToken
//   if(typeof window !== 'undefined') {
//       storedToken = localStorage.getItem('token')
//   }
//   return storedToken
// }

export const registerUser = async (bodyData) => {
   return await axios.post(`${apiUrl}/users/signup`, bodyData)
}

export const loginUser = async (bodyData) => {
  return await axios.post(`${apiUrl}/users/login`, bodyData)
}

export const getMe = async () => {
 
// const storedToken = token()
// const headers = {
//   'Authorization': `Bearer ${storedToken}`,
//   'Content-Type': 'application/json', 
// };

  return await axios.get(`${apiUrl}/users/me`, { withCredentials: true, headers: { 'Content-Type': 'application/json'} } );
}

export const setCurrentLessonData = async (bodyData) => {
  
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };
  
    return await axios.patch(`${apiUrl}/users/me`, bodyData, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
  }

 export const setProgressData = async (progressBody) => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };

  return await axios.post(`${apiUrl}/users/addProgress`, progressBody, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
 } 

 export const getProgressData = async () => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };

  return await axios.get(`${apiUrl}/users/progress`, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
 } 

 export const subscribeMe = async (subscribeBody) => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };

  return await axios.patch(`${apiUrl}/users/subscribe`, subscribeBody, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
 } 

 export const createServiceRequest = async (requestBody) => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };

  return await axios.post(`${apiUrl}/services`, requestBody, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
 }

 export const assignLevel = async (level) => {
  const bodyData = {
    level: level
  }
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };
  
    return await axios.post(`${apiUrl}/users/addMultipleProgresses`, bodyData, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
  }

  export const setLevelChecked = async () => {
    const bodyData = {
      levelChecked: true
    }
    // const storedToken = token()
    // const headers = {
    //   'Authorization': `Bearer ${storedToken}`,
    //   'Content-Type': 'application/json', 
    // };
    
      return await axios.patch(`${apiUrl}/users/me`, bodyData, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
    }

    export const forgotPassword = async (email) => {
      const bodyData = {
        email
      }
    
      // const headers = {
      //   'Content-Type': 'application/json', 
      // };
      
        return await axios.post(`${apiUrl}/users/forgotPassword`, bodyData, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
      }

    export const resetPassword = async (password, passwordConfirm, token) => {
      const bodyData = {
        password,
        passwordConfirm
      }
    
      // const headers = {
      //   'Content-Type': 'application/json', 
      // };
      
        return await axios.patch(`${apiUrl}/users/resetPassword/${token}`, bodyData, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
      }

    export const resetProgress = async () => {
      
      // const storedToken = token()
      // const headers = {
      //   'Authorization': `Bearer ${storedToken}`,
      //   'Content-Type': 'application/json', 
      // };
      
        return await axios.delete(`${apiUrl}/users/progress`, { withCredentials: true, headers: { 'Content-Type': 'application/json'} });
      }

 



 



