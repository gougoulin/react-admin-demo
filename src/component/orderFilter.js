import React from "react";
import { useDispatch, useSelector } from "react-redux";

function OrderFilter() {
  const dispatch = useDispatch();
  const { status, platform } = useSelector((state) => state.orders.filters);

  return (
    <>
      <div>
        <form className="form__inline" action="">
          <div className="form__group">
            <label htmlFor="order-status">Order Status</label>
            <select
              name="order-status"
              id="order-status"
              value={status}
              onChange={(e) => {
                dispatch({
                  type: "UPDATE_FILTER",
                  data: { status: e.target.value },
                });
              }}
            >
              <option value="100">all</option>
              <option value="101">unpaid</option>
              <option value="102">paid</option>
              <option value="201">in progress</option>
              <option value="202">shipped</option>
              <option value="401">error</option>
              <option value="402">fraud</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="order-status">Platform</label>
            <select
              name="order-platform"
              id="order-platform"
              value={platform}
              onChange={(e) => {
                dispatch({
                  type: "UPDATE_FILTER",
                  data: { platform: e.target.value },
                });
              }}
            >
              <option value="all">all</option>
              <option value="amazon">amazon</option>
              <option value="catch">catch</option>
              <option value="website">website</option>
              <option value="phone">phone</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className="form__group">
            <span>Ordered from</span>
            <input
              type="date"
              name="order_date_min"
              // value={e.target.value && new Date().toISOString().slice(0, 10)}
              // value={pl}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <span>to</span>
            <input type="date" name="order_date_max" />
          </div>
        </form>
      </div>
    </>
  );
}

export default OrderFilter;
