import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? 'http://localhost:3000/api/v1' : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`

const options = { withCredentials: true, headers: { 'Content-Type': 'application/json'}}

export const registerUser = async (bodyData) => {
    return await axios.post(`${apiUrl}/users/signup`, bodyData, options )
 } 

export const loginUser = async (bodyData) => {
  return await axios.post(`${apiUrl}/users/login`, bodyData, options)
}

export const getMe = async () => {

  return await axios.get(`${apiUrl}/users/me`, options);
}

export const setCurrentLessonData = async (bodyData) => {
  
    return await axios.patch(`${apiUrl}/users/me`, bodyData, options);
  }

 export const setProgressData = async (progressBody) => {
  
  return await axios.post(`${apiUrl}/users/addProgress`, progressBody, options);
 } 

 export const getProgressData = async () => {
 
  return await axios.get(`${apiUrl}/users/progress`, options);
 } 

 export const subscribeMe = async (subscribeBody) => {
  
  return await axios.post(`${apiUrl}/users/payment`, subscribeBody, options);
 } 

 export const saveSubscriptionInBd = async (subscribeBody) => {
  
  return await axios.patch(`${apiUrl}/users/subscribe`, subscribeBody, options);
 } 

 export const createServiceRequest = async (requestBody) => {

  return await axios.post(`${apiUrl}/services`, requestBody, options);
 }

 export const assignLevel = async (level) => {
  const bodyData = {
    level: level
  }
  
    return await axios.post(`${apiUrl}/users/addMultipleProgresses`, bodyData, options);
  }

  export const setLevelChecked = async () => {
    const bodyData = {
      levelChecked: true
    }
  
      return await axios.patch(`${apiUrl}/users/me`, bodyData, options);
    }

    export const forgotPassword = async (email) => {
      const bodyData = {
        email
      }
    
        return await axios.post(`${apiUrl}/users/forgotPassword`, bodyData, options);
      }

    export const resetPassword = async (password, passwordConfirm, token) => {
      const bodyData = {
        password,
        passwordConfirm
      }
    
        return await axios.patch(`${apiUrl}/users/resetPassword/${token}`, bodyData, options);
      }

    export const resetProgress = async () => {

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

  export const getBeginnerProgress = async () => {

    return await axios.get(`${apiUrl}/beginner`, options);
  }

  export const createBeginnerProgress = async () => {
  
    return await axios.post(`${apiUrl}/beginner`, {}, options);
   } 

  export const updateBeginnerProgress = async (updateBody) => {
  
    return await axios.patch(`${apiUrl}/beginner`, updateBody, options);
   } 

   export const exitBeginnerProgress = async () => {
  
    return await axios.patch(`${apiUrl}/beginner/exit`, {}, options);
   } 





