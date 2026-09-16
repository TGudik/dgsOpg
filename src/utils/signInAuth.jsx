import { getToken, setToken } from "./token";

const apiUrl = "http://localhost:3042";

export async function signIn(email, password) {
  try {
    const res = await fetch(`${apiUrl}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!res.ok) throw new Response("Login fejlede", { status: res.status });
    const data = await res.json();
    const token = data.data.token;
    setToken(token);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function authToken() {
  try {
    const token = getToken();
    const res = await fetch(`${apiUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    if (!res.ok)
      throw new Response("Autenticering fejlede", { status: res.status });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
