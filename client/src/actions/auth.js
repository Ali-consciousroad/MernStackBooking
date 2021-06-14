import axios from "axios";

// Async function
export const register = async (user) =>
    await axios.post(`${process.env.REACT_APP_API}/register`, user);

export const login = async (user) =>
    await axios.post(`${process.env.REACT_APP_API}/login`, user);