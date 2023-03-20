/* eslint-disable prettier/prettier */
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/login`,
  },
  products: {
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  }
};

export default endPoints;