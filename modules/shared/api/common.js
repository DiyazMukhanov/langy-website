export const apiUrl = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? 'http://localhost:3000/api/v1' : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`

export const options = { withCredentials: true, headers: { 'Content-Type': 'application/json' } }