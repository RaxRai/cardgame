export const doLogin = () => {
    localStorage.setItem("isLoggedIn", true);
  };

  export const doLogout = () => {
    localStorage.setItem("isLoggedIn", false);
  };

export const isLoggedIn = () => {
    return Boolean(localStorage.getItem("isLoggedIn"));
  };
