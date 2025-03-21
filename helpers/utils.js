import jwt from "jsonwebtoken"
export const getJwtToken = (jwtObj, expiresIn) => {
  return jwt.sign(jwtObj, process.env.JWT_SECRET, {
    expiresIn: expiresIn
  });
};


export const deepClone = (item) => {
  if (!item) {
    return null;
  }
  if (typeof item === 'object' && Object.keys(item).length !== 0) {
    return JSON.parse(JSON.stringify(item)); // Deep clone for non-empty object
  } else if (Array.isArray(item)) {
    return [...item]; // Shallow copy for an array
  } else {
    return null; // Return null for unsupported types or empty object
  }
}