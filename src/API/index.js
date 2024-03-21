export const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json());
};

export const getInventory = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

export const getCustomers = () => {
  return fetch("https://dummyjson.com/users").then((res) => res.json());
};
export const getComments = () => {
  return fetch("https://dummyjson.com/comments").then((res) => res.json());
};


export const getAccounts = (role) => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/account?role=${role}`).then((res) => res.json());
};

export const getPaidOrders = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/customer-order?status=Paid`).then((res) => res.json());
};

export const getShippers = (page_number) => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/shipper?page_number=${page_number}&page_size=5`).then((res) => res.json());
};