export async function registerUser({ email }) {
  await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
    method: 'POST',
    body: JSON.stringify({ data: { email } }),
    headers: { 'Content-Type': 'application/json' },
  })
}
