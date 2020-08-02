export const FETCH_ORDERS_BEGIN = "FETCH_ORDERS_BEGIN";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAIL = "FETCH_ORDERS_FAIL";
export const UPDATE_FILTERED_ORDERS = "UPDATE_FILTERED_ORDERS";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";

// "PAGINATION_INCREMENT"
// "PAGINATION_DECREMENT"

export const fetchOrdersBegin = (text) => {
  return { type: FETCH_ORDERS_BEGIN, data: text };
};
export const fetchOrdersFail = (err) => {
  return {
    type: FETCH_ORDERS_FAIL,
    err,
  };
};
export const fetchOrders = (url) => {
  return async function (dispatch, getState) {
    try {
      dispatch({ type: FETCH_ORDERS_BEGIN, data: url });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: FETCH_ORDERS_SUCCESS, data });
    } catch (err) {
      dispatch({ type: FETCH_ORDERS_FAIL, err });
      console.log(err);
    }
  };
};

export const updateFilteredOrders = (data) => {
  return { type: UPDATE_FILTERED_ORDERS, data };
};

export const getOrderByID = (id) => {
  return (dispatch, getState) => {
    const data = getState().orders.orders.filter((item) => item.id == id);
    dispatch({ type: GET_ORDER_BY_ID, payload: data });
    return data;
  };
};
