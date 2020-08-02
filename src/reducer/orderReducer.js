import { GET_ORDER_BY_ID } from "../actions/orderAction";

/**
 * initial test data - orders fetched from backend api
 * get /`${backendUrl}`/orders
 */
let orders = {
  /**
   * headers of the order table
   */
  headers: {
    id: "ID",
    orderDetail: "Order Details",
    // product: "Product",
    // quantity: "Qty",
    // offersku: "Offer SKU",
    platform: "Platform",
    totalfee: "Total Fee",
    orderstatus: "Order Status",
    orderedat: "Ordered At",
    operations: "Operations",
  },
  /**
   * orders data, shown as table record
   */
  // orders: getOrders().items.map((elem) => {
  //   console.log(elem.fields);
  //   return elem.fields;
  // }),
  orders: [],
  // orders: [
  //   {
  //     id: 1001,
  //     product:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     items: {
  //       TD001: 1,
  //       TD002: 2,
  //       TD003: 1,
  //     },
  //     orderDetail:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     platform: "amazon",
  //     quantity: 2,
  //     offersku: "TZ001",
  //     totalfee: 35.0,
  //     orderstatus: "unpaid",
  //     orderedat: "2020-07-20",
  //   },
  //   {
  //     id: 1002,
  //     product: "product 2",
  //     items: {
  //       TD001: 1,
  //       TD002: 2,
  //       TD003: 1,
  //     },
  //     orderDetail:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     platform: "catch",
  //     quantity: 2,
  //     offersku: "TZ002",
  //     totalfee: 35.0,
  //     orderstatus: "unpaid",
  //     orderedat: "2020-07-20",
  //   },
  //   {
  //     id: 1003,
  //     product:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     items: {
  //       TD001: 1,
  //       TD002: 2,
  //       TD003: 1,
  //     },
  //     orderDetail:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     platform: "amazon",
  //     quantity: 2,
  //     offersku: "TZ003",
  //     totalfee: 35.0,
  //     orderstatus: "in progress",
  //     orderedat: "2020-07-20",
  //   },
  //   {
  //     id: 1004,
  //     product:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     items: {
  //       TD001: 1,
  //       TD002: 2,
  //       TD003: 1,
  //     },
  //     orderDetail:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     platform: "website",
  //     quantity: 2,
  //     offersku: "TZ004",
  //     totalfee: 35.0,
  //     orderstatus: "in progress",
  //     orderedat: "2020-07-20",
  //   },
  //   {
  //     id: 1005,
  //     product:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     items: {
  //       TD001: 1,
  //       TD002: 2,
  //       TD003: 1,
  //     },
  //     orderDetail:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     platform: "catch",
  //     quantity: 2,
  //     offersku: "TZ005",
  //     totalfee: 35.0,
  //     orderstatus: "in progress",
  //     orderedat: "2020-07-20",
  //   },
  //   {
  //     id: 1006,
  //     product:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     items: {
  //       TD001: 1,
  //       TD002: 2,
  //       TD003: 1,
  //     },
  //     orderDetail:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati temporibus voluptate esse repudiandae aliquam, labore enim quibusdam consequatur ab.",
  //     platform: "phone",
  //     quantity: 2,
  //     offersku: "TZ006",
  //     totalfee: 35.0,
  //     orderstatus: "shipped",
  //     orderedat: "2020-07-20",
  //   },
  // ],
  filters: {
    status: "100",
    platform: "all",
    prevUpdate: new Set(),
  },
  filteredOrders: [],
  /**
   * current page no. in the pagination
   */
  currentPagi: 1,
  recordPerPage: 2,
  totalPagi: 5,
};

/**
 * getTotalPagi: how many pages shown in the pagination
 */
const getTotalPagi = (total, perpage) => {
  return Math.ceil(total / perpage);
};
const codeStatus = {
  "100": "all",
  "101": "unpaid",
  "102": "paid",
  "201": "in progress",
  "202": "shipped",
  "401": "error",
  "402": "fraud",
};

const initData = {
  ...orders,
  filteredOrders: [...orders.orders],
  totalPagi: getTotalPagi(orders.orders.length, orders.recordPerPage),
};
// const initData = orders.orders.filter((indx, item) => {
//   if (
//     orders.recordPerPage * (orders.currentPagi - 1) < indx &&
//     indx < orders.recordPerPage * orders.currentPagi
//   )
//     return true;
// });

const orderReducer = (state = initData, action) => {
  switch (action.type) {
    case "GET_USER":
      return state;
    case "UPDATE_FILTER":
      const newFilters = { ...state.filters, ...action.data };
      // const targetOrders = newFilters.prevUpdate.has(
      //   Object.keys(action.data)[0]
      // )
      //   ? initData.orders
      //   : state.orders;
      const targetOrders = state.orders;
      const newOrders = targetOrders.filter((item) => {
        /**
         * update filter for platform filed
         */
        const isPlatform =
          newFilters.platform === "all" ||
          item.platform === newFilters.platform;
        /**
         * update filter for orderstatus filed
         */
        const isStatus =
          codeStatus[newFilters.status] === "all" ||
          item.orderstatus === codeStatus[newFilters.status];
        /**
         * determine whether to show this order, true is show, false is not
         */
        if (isPlatform && isStatus) {
          return true;
        }
      });
      /**
       * save this action.data to filters.prevUpdate
       */
      // newFilters.prevUpdate.add(Object.keys(action.data)[0]);
      /**
       * update state : orders and filters
       */
      return { ...state, filteredOrders: newOrders, filters: newFilters };
    case "PAGINATION_INCREMENT":
      return { ...state, currentPagi: state.currentPagi + 1 };
    case "PAGINATION_DECREMENT":
      return { ...state, currentPagi: state.currentPagi - 1 };
    case "PAGINATION_REDIRECT":
      return { ...state, currentPagi: action.data };
    case "PAGINATION_ITEMPERPAGE":
      return {
        ...state,
        recordPerPage: action.data,
        totalPagi: getTotalPagi(state.orders.length, action.data),
      };
    case "ADD_NEWORDER":
      let newItem = {
        ...action.data,
        id: 1001 + state.orders.length,
        orderstatus: "unpaid",
        orderedat: new Date().toISOString().slice(0, 10),
      };
      return {
        ...state,
        orders: [...state.orders, newItem],
        filteredOrders: [...state.filteredOrders, newItem],
      };
    case "FETCH_ORDERS_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        error: null,
        orders: [...action.payload],
      };
    case GET_ORDER_BY_ID:
      return state;
    default:
      return state;
  }
};

export default orderReducer;
