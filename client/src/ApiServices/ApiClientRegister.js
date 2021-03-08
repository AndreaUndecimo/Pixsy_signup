import axios from 'axios';

export async function registerUser({ email }) {
  return axios.post(`${process.env.REACT_APP_BASE_URL}/user/register`, {
    email,
  });
}

export async function getProfile(accessToken) {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/user/profile`, {
    headers: { Authorization: accessToken },
  });
}

export function completeAuthentication(token) {
  localStorage.setItem('token', token);
}

export async function sendEmailAgain({ newEmail, oldEmail }) {
  return axios.put(`${process.env.REACT_APP_BASE_URL}/user/edit_email`, {
    newEmail,
    oldEmail,
  });
}

export function handleLogout() {
  localStorage.removeItem('token');
}
