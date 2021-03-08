import axios from 'axios';

export async function registerUser({ email }) {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`, {
    email,
  });
}

export async function completeAuthentication(token) {
  localStorage.setItem('token', token);
}
