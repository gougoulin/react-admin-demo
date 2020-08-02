import React from "react";
import { useSelector } from "react-redux";
import OrderListItem from "./orderListItem";
import { Link } from "react-router-dom";
import "../sass/style.scss";

function OrderList() {
  const { headers, filteredOrders, currentPagi, recordPerPage } = useSelector(
    (state) => state.orders
  );
  // throw new Error("stop here");
  const start = (currentPagi - 1) * recordPerPage;
  const end = currentPagi * recordPerPage;
  const orderItems = filteredOrders.slice(start, end).map((item) => {
    const operations = (
      <>
        <Link to={`/order/view/${item.id}`} className="btn btn__operation">
          view
        </Link>
        {/* <Link to={`/order/${item.id}/edit`} className="btn btn__operation">
          edit
        </Link> */}
        <Link to={`/order/${item.id}/delete`} className="btn btn__operation">
          delete
        </Link>
      </>
    );
    return (
      <OrderListItem key={item.id} record={item} operations={operations} />
    );
  });
  // const operations = (
  //   <>

  //   </>
  // );
  return (
    <>
      <OrderListItem record={headers} operations="Operations" />
      {orderItems}
    </>
  );
}

export default OrderList;
