import React from "react";
import { useDispatch } from "react-redux";

function ItemPerPageControl({ num }) {
  const dispatch = useDispatch();
  return (
    <span
      className="itemperpage"
      onClick={() => {
        dispatch({
          type: "PAGINATION_ITEMPERPAGE",
          data: num,
        });
      }}
    >
      {num}
    </span>
  );
}

export default ItemPerPageControl;
