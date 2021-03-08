export async function registerUser({ email }) {
  return fetch(`${process.env.REACT_APP_BASE_URL}/user/register`, {
    method: 'POST',
    body: JSON.stringify({ data: { email } }),
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function completeAuthentication(token) {
  localStorage.setItem('token', token);
}
