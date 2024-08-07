const url = 'http://127.0.0.1:8000';

export const registerUser = async (username: string, password: string) => {
  const response = await fetch(`${url}/api/user/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  return response;
};
