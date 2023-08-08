import axios from 'axios';

const apiUrl = 'https://langy-api.onrender.com/api/v1';

const token = () => {
  let storedToken
  if(typeof window !== 'undefined') {
      storedToken = localStorage.getItem('token')
  }
  return storedToken
}

export const registerUser = async (bodyData) => {
   return await axios.post(`${apiUrl}/users/signup`, bodyData)
}

export const loginUser = async (bodyData) => {
  return await axios.post(`${apiUrl}/users/login`, bodyData)
}

export const getMe = async () => {
const storedToken = token()
const headers = {
  'Authorization': `Bearer ${storedToken}`,
  'Content-Type': 'application/json', 
};

  return await axios.get(`${apiUrl}/users/me`, { headers });
}

export const setCurrentLessonData = async (currentLesson, currentChapter) => {
  const bodyData = {
    currentLesson: currentLesson,
    currentChapter: currentChapter
  }
  const storedToken = token()
  const headers = {
    'Authorization': `Bearer ${storedToken}`,
    'Content-Type': 'application/json', 
  };
  
    return await axios.patch(`${apiUrl}/users/me`, bodyData, { headers });
  }



