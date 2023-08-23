import axios from 'axios';

// const apiUrl = 'https://langy-api.onrender.com/api/v1';
// const apiUrl = 'http://localhost:3000/api/v1';
// const apiUrl = process.env.SERVER_URL
const apiUrl = 'http://localhost:3000/api/v1'

// const token = () => {
//   let storedToken
//   if(typeof window !== 'undefined') {
//       storedToken = localStorage.getItem('token')
//   }
//   return storedToken
// }

const options = { withCredentials: true, headers: { 'Content-Type': 'application/json'}}

export const registerUser = async (bodyData) => {
    return await axios.post(`${apiUrl}/users/signup`, bodyData, options )
 } 

// export const registerUser = async (bodyData) => {
//    return await axios.post(`${apiUrl}/users/signup`, bodyData)
// }

export const loginUser = async (bodyData) => {
  return await axios.post(`${apiUrl}/users/login`, bodyData, options)
}

export const getMe = async () => {

// const storedToken = token()
// const headers = {
//   'Authorization': `Bearer ${storedToken}`,
//   'Content-Type': 'application/json', 
// };

  return await axios.get(`${apiUrl}/users/me`, options);
}

export const setCurrentLessonData = async (bodyData) => {
  
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };
  
    return await axios.patch(`${apiUrl}/users/me`, bodyData, options);
  }

 export const setProgressData = async (progressBody) => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };

  return await axios.post(`${apiUrl}/users/addProgress`, progressBody, options);
 } 

 export const getProgressData = async () => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };

  return await axios.get(`${apiUrl}/users/progress`, options);
 } 

 export const subscribeMe = async (subscribeBody) => {
  
  return await axios.patch(`${apiUrl}/users/subscribe`, subscribeBody, options);
 } 

 export const createServiceRequest = async (requestBody) => {
  // const storedToken = token()
  // const headers = {
  //   'Authorization': `Bearer ${storedToken}`,
  //   'Content-Type': 'application/json', 
  // };

  return await axios.post(`${apiUrl}/services`, requestBody, options);
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
  
    return await axios.post(`${apiUrl}/users/addMultipleProgresses`, bodyData, options);
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
    
      return await axios.patch(`${apiUrl}/users/me`, bodyData, options);
    }

    export const forgotPassword = async (email) => {
      const bodyData = {
        email
      }
    
      // const headers = {
      //   'Content-Type': 'application/json', 
      // };
      
        return await axios.post(`${apiUrl}/users/forgotPassword`, bodyData, options);
      }

    export const resetPassword = async (password, passwordConfirm, token) => {
      const bodyData = {
        password,
        passwordConfirm
      }
    
      // const headers = {
      //   'Content-Type': 'application/json', 
      // };
      
        return await axios.patch(`${apiUrl}/users/resetPassword/${token}`, bodyData, options);
      }

    export const resetProgress = async () => {
      
      // const storedToken = token()
      // const headers = {
      //   'Authorization': `Bearer ${storedToken}`,
      //   'Content-Type': 'application/json', 
      // };
      
        return await axios.delete(`${apiUrl}/users/progress`, options);
      }

      export const userLogout = async () => {
          return await axios.get(`${apiUrl}/users/logOut`, options);
        }

      export const getUserByEmail = async (email) => {
        
        return await axios.get(`${apiUrl}/users/byEmail/${email}`, options);
      }

      export const subscribeUser = async (subscribeBody, id) => {
  
        return await axios.patch(`${apiUrl}/users/subscribeById/${id}`, subscribeBody, options);
       } 

      export const getAllServices = async (page) => {
      
      return await axios.get(`${apiUrl}/services?page=${page}&limit=10`, options);
    } 

    export const getServiceById = async (id) => {
      
      return await axios.get(`${apiUrl}/services/${id}`, options);
    } 

    export const resolveService = async (id) => {
      return await axios.post(`${apiUrl}/services/${id}`, {}, options);
    } 

    export const showNotResolvedService = async (page) => {
      
      return await axios.get(`${apiUrl}/services?page=${page}&limit=10&isResolved=false`, options);
    } 

  export const getStatistics = async () => {
      
    return await axios.get(`${apiUrl}/users/statistics`, options);
  }






 



