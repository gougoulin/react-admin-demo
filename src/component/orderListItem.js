import React, { useState } from "react";

function OrderListItem({ record, operations }) {
  const [showDetail, setshowDetail] = useState(false);
  return (
    <div className="order__item">
      <span>
        <input type="checkbox" />
      </span>
      <span>{record.id}</span>
      <span
        className={
          showDetail
            ? "order__list__item__product"
            : "order__list__item__product order__list__item__nowrap"
        }
        onClick={() => {
          setshowDetail(!showDetail);
        }}
      >
        {JSON.stringify(record.items)}
      </span>
      {/* <span>{record.quantity}</span> */}
      {/* <span>{record.offersku}</span> */}
      {/* <span>{record.totalfee}</span> */}
      <span>{record.platform}</span>
      <span>{record.orderstatus}</span>
      <span>{record.orderedat ? record.orderedat.slice(0, 10) : ""}</span>
      <div>{operations}</div>
    </div>
  );
}

export default OrderListItem;
