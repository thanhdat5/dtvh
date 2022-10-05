export const isValidEmail = (email: string) => {
  if (!email || email.trim() === "") return false;
  return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
};