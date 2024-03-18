const USER_API_ENDPOINT = `https://jsonplaceholder.typicode.com/users`;

export async function fetchUsers() {
  const response = await fetch(USER_API_ENDPOINT);
  return await response.json();
}
