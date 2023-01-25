import jwtDecode from "jwt-decode";

const getUserId = () => {
  const token = localStorage.getItem("jwt");
  const decoded = jwtDecode(token);
  const userId = decoded.userId;
  return userId;
};

export default getUserId;
