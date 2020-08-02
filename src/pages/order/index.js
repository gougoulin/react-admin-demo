import React from "react";
import Layout from "../../component/layout";
import "../../sass/style.scss";
import { useSelector, useDispatch } from "react-redux";
import OrderList from "../../component/orderList";
import Section from "../../component/section";
import PagePath from "../../component/pagePath";
import Pagination from "../../component/pagination";
import OrderFilter from "../../component/orderFilter";
import { useEffect, useState } from "react";
import ItemPerPageControl from "../../component/itemPerPageControl";
import Search from "../../imgs/search.svg";
import { useHistory } from "react-router-dom";
import Client from "../../contentful";

// const test = getOrders();h

function Order({ sidebarMenu }) {
  /**
   * fetch data from contentful api
   */
  const getOrders = async () => {
    const res = await Client.getEntries({
      // order: "-sys.createdAt",
      order: "-fields.id",
      content_type: "orders",
    });
    const data = await res.items.map((each) => {
      return each.fields;
    });
    dispatch({ type: "FETCH_ORDERS_SUCCESS", payload: data });
    dispatch({ type: "UPDATE_FILTER", payload: {} });
  };

  /**
   * object
   * avatar and user name of current logged in user
   */
  const currentUser = useSelector((state) => state.currentUser);
  /**
   * param integeter
   * determine how may records shown per page
   */
  const orders = useSelector((state) => state.orders);
  /**
   * show the search input or not
   * default: not show
   */
  const [isSearching, setIsSearching] = useState(false);
  /**
   * useHistory hook
   */
  let history = useHistory();
  /**
   * useDispatch hook
   */
  const dispatch = useDispatch();

  /**
   * useEffect, make sure fetch data only once
   */
  useEffect(() => {
    dispatch({ type: "FETCH_ORDERS_BEGIN", payload: null });
    getOrders();
  }, []);

  const handleToggle = () => {
    setIsSearching(!isSearching);
  };

  const main = (
    <>
      <div className="grid_row_aawa">
        <PagePath />
        <Section>
          <div className="section__title flex__between">
            Order Filter
            <div className="section__order__functions flex__between">
              <div
                className="section__order__search__wrap"
                // onMouseOut={() => {
                //   setIsSearching(!isSearching);
                // }}
              >
                <input
                  type="text"
                  onSubmit={handleToggle}
                  className={isSearching || "hidden"}
                />
                <button
                  className={isSearching || "hidden"}
                  onClick={handleToggle}
                >
                  Search
                </button>
              </div>
              <img
                className={isSearching ? "icon hidden" : "icon"}
                src={Search}
                alt="search"
                onClick={handleToggle}
              />
            </div>
          </div>
          <OrderFilter />
        </Section>
        <Section>
          <div className="section__header">
            <div className="section__title">Orders</div>
            <Pagination numPagi={orders.totalPagi} />
            <div>
              <ItemPerPageControl num={5} />
              <ItemPerPageControl num={10} />
              <ItemPerPageControl num={50} />
            </div>
            <button
              className="callforaction"
              onClick={() => {
                history.push("/order/new");
              }}
            >
              New Order
            </button>
          </div>
          <OrderList />
        </Section>
        <Section className="flex__between">
          <div>
            <span>View</span> | <span>Delete</span>
          </div>
          <Pagination numPagi={orders.totalPagi} />
        </Section>
      </div>
    </>
  );

  return (
    <>
      <Layout main={main} currentUser={currentUser} sidebarMenu={sidebarMenu} />
    </>
  );
}

export default Order;
