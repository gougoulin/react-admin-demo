import React from "react";
import Layout from "../../component/layout";
import "../../sass/style.scss";
import { useSelector, useDispatch } from "react-redux";
import Section from "../../component/section";
import PagePath from "../../component/pagePath";
import More from "../../imgs/more.svg";
import { useParams } from "react-router-dom";
import { getOrderByID } from "../../actions/orderAction";

function ViewOrder({ sidebarMenu }) {
  /**
   * hook connect store
   */
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = dispatch(getOrderByID(id));
  console.log(data);
  const main =
    data.length === 0 ? (
      "data is loading"
    ) : (
      <div className="vieworder__layout">
        <PagePath />
        <Section>
          <div>{data[0].id}</div>
          <div>{JSON.stringify(data[0].detail)}</div>
          <div>{data[0].fee}</div>
          <div>
            {Object.keys(data[0].items).map((item) => (
              <li key={`${item}-${data[0].items[item]}`}>
                <span>
                  <strong>SKU: </strong>
                </span>
                <span>{item}</span> |
                <span>
                  <strong>Quantity: </strong>
                </span>
                <span>{data[0].items[item]}</span>
              </li>
            ))}
          </div>
          <div>{data[0].orderedat}</div>
          <div>{data[0].orderstatus}</div>
          <div>{data[0].platform}</div>
        </Section>
      </div>
    );

  return (
    <>
      <Layout main={main} currentUser={currentUser} sidebarMenu={sidebarMenu} />
    </>
  );
}

export default ViewOrder;
