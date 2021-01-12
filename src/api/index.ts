const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async () => {
  await delay(1000);
  return { type: "login", payload: null };
};

export const logout = async () => {
  await delay(1000);
  return { type: "logout", payload: null };
};
