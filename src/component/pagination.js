import React from "react";
import "../sass/style.scss";
import { useSelector, useDispatch } from "react-redux";

function Pagination({ numPagi }) {
  const current = useSelector((state) => state.orders.currentPagi);
  const totalPagi = useSelector((state) => state.orders.totalPagi);
  const dispatch = useDispatch();

  const pagis = [...Array(numPagi).keys()].map((indx, item) => {
    return (
      <span
        className="pagination__item"
        key={`pagi_${indx}`}
        onClick={() => {
          dispatch({ type: "PAGINATION_REDIRECT", data: indx + 1 });
        }}
      >
        {indx + 1}
      </span>
    );
  });
  return (
    <div>
      <span
        className="pagination__item"
        onClick={() => {
          if (current !== 1) {
            dispatch({ type: "PAGINATION_DECREMENT", data: current });
          } else {
            alert("no more data");
          }
        }}
      >
        Previous
      </span>
      {pagis}
      <span
        className="pagination__item"
        onClick={() => {
          if (current !== totalPagi) {
            dispatch({ type: "PAGINATION_INCREMENT", data: current });
          } else {
            alert("no more data");
          }
        }}
      >
        Next
      </span>
    </div>
  );
}

export default Pagination;
