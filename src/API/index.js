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


export const getAccounts = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/account`).then((res) => res.json());
};

export const getPaidOrders = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/customer-order?status=Paid`).then((res) => res.json());
};

export const getShippers = (page_number) => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/shipper?page_number=${page_number}&page_size=20`).then((res) => res.json());
};

export const loginAccount = (username, password) => {
  const url = 'https://onlinemarket-api.nguyenminhhai.us/api/v1/account?action=login';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      return data;
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
};

export const getBuilding = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/building`).then((res) => res.json());
};

export const getBrands = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/brands`).then((res) => res.json());
};

export const getProductsInSystem = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/products?page_number=1&page_size=100`).then((res) => res.json());
};

export const getPendingOrder = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/customer-order?status=Pending`).then((res) => res.json());
};
export const getPaidOrder = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/customer-order?status=Paid`).then((res) => res.json());
};
export const getCanceledOrder = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/customer-order?status=Canceled`).then((res) => res.json());
};
export const getSuccessOrder = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/customer-order?status=Success`).then((res) => res.json());
};

export const getDeposit = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/deposit?page_number=1&page_size=100`).then((res) => res.json());
}

export const getTransaction = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/transaction?page_number=1&page_size=100`).then((res) => res.json());
}

export const getStore = () => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/store?page_number=1&page_size=100`).then((res) => res.json());
};
export const getListProductInStore = (id) => {
  return fetch(`https://onlinemarket-api.nguyenminhhai.us/api/v1/products-in-store/${id}?page_number=1&page_size=100`).then((res) => res.json());
};



