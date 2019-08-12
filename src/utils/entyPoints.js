const baseUrl = ' https://task-manager.goit.co.ua/api/';

export const url = {
  // example
  // login & register
  registerUser: () => `${baseUrl}auth/register`,
  loginUser: () => `${baseUrl}auth/login`,
  logoutUser: () => `${baseUrl}auth/logout`
};
