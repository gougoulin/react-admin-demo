import React from "react";
import Layout from "../../component/layout";
import "../../sass/style.scss";
import { useSelector, useDispatch } from "react-redux";
import Section from "../../component/section";
import PagePath from "../../component/pagePath";
import { useState } from "react";
import More from "../../imgs/more.svg";
import { useHistory } from "react-router-dom";

function CreateOrder({ sidebarMenu }) {
  /**
   * hook connect store
   */
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  // const history = useHistory();

  const [state, setState] = useState({
    counter: 1,
    items: [],
    data: {
      "product-0": {},
    },
  });
  /**
   * handleMore: click More icon to add a new product
   */
  const handleMore = (e, counter, sku, qty) => {
    const newItem = (
      <div key={counter} className="form__set__inline">
        <div className="form__group__inline">
          <label htmlFor={`product-${counter}-sku`}>Item SKU</label>
          <input
            name={`product-${counter}-sku`}
            type="text"
            value={sku}
            required
          />
          <div className="hidden"></div>
        </div>
        <div className="form__group__inline">
          <label htmlFor={`product-${counter}-qty`}>Qty.</label>
          <input
            name={`product-${counter}-qty`}
            type="number"
            value={qty}
            required
          />
          <div className="hidden"></div>
        </div>
      </div>
    );
    const addedData = {};
    addedData[`product-${counter}`] = { sku, qty };
    setState({
      counter: counter + 1,
      items: [newItem, ...state.items],
      data: {
        ...state.data,
        ...addedData,
        "product-0": { sku: "", qty: "" },
      },
    });
  };
  /**
   * formatData: handle state.data and format it to an order object data
   * make it ready to dispatch to orderReducer
   */
  const formatData = (e, obj) => {
    let out = { items: {} };
    for (let element of Object.keys(obj)) {
      if (element.match(/product-*/)) {
        if (obj[element].sku) {
          let key = obj[element].sku.toUpperCase();
          out.items[key] = obj[element].qty;
        }
      } else {
        out[element] = obj[element];
      }
    }
    return out;
  };

  const main = (
    <div id="neworder__layout">
      <PagePath />
      <Section>
        <form action="">
          <div id="neworder__items_template">
            <div className="form__set__inline">
              <div className="form__group__inline">
                <label htmlFor="product-0-sku">Item SKU</label>
                <input
                  required
                  name="product-0-sku"
                  type="text"
                  value={state.data["product-0"].sku}
                  onChange={(e) => {
                    setState({
                      ...state,
                      data: {
                        ...state.data,
                        "product-0": {
                          sku: e.target.value,
                          qty: state.data["product-0"].qty,
                        },
                      },
                    });
                  }}
                />
                <div className="hidden"></div>
              </div>
              <div className="form__group__inline">
                <label htmlFor="product-0-qty">Qty.</label>
                <input
                  required
                  name="product-0-qty"
                  type="number"
                  value={state.data["product-0"].qty}
                  onChange={(e) => {
                    setState({
                      ...state,
                      data: {
                        ...state.data,
                        "product-0": {
                          sku: state.data["product-0"].sku,
                          qty: e.target.value,
                        },
                      },
                    });
                  }}
                />
                <div className="hidden"></div>
              </div>
              <img
                className="icon icon__more"
                src={More}
                alt="plus icon"
                onClick={(e) => {
                  handleMore(
                    e,
                    state.counter,
                    state.data["product-0"].sku,
                    state.data["product-0"].qty
                  );
                }}
              />
            </div>
          </div>
          <div id="neworder__items">{state.items}</div>
          <div className="neworder__textarea__inline">
            <label htmlFor="product-0-qty">Detail</label>
            <textarea
              required
              name="neworder__detail"
              id=""
              onChange={(e) => {
                setState({
                  ...state,
                  data: { ...state.data, orderDetail: e.target.value },
                });
              }}
              className="neworder__textarea__control neworder__textarea"
            ></textarea>
            <div className="hidden"></div>
          </div>
          <div className="neworder__inline">
            <label htmlFor="neworder__platform">Platform</label>
            <select
              required
              className="neworder__select__control"
              name="neworder__platform"
              id=""
              onChange={(e) => {
                setState({
                  ...state,
                  data: { ...state.data, platform: e.target.value },
                });
              }}
            >
              <option value="all">Select</option>
              <option value="amazon">Amazon</option>
              <option value="catch">Catch</option>
              <option value="ebay">Ebay</option>
              <option value="phone">Phone</option>
            </select>
            <div></div>
          </div>
          <div>
            {/* <button className="form__button">Go Back</button> */}
            <button
              className="form__button"
              onClick={(e) => {
                e.preventDefault();
                const newRecord = formatData(e, state.data);
                if (
                  Object.keys(newRecord).length > 1 ||
                  Object.keys(newRecord).length === 0
                ) {
                  dispatch({
                    type: "ADD_NEWORDER",
                    data: newRecord,
                  });
                  alert("order has been saved!");
                  setState({
                    counter: 1,
                    items: [],
                    data: {
                      "product-0": { sku: "", qty: "" },
                    },
                  });
                  //   history.push("/order");
                } else {
                  alert("all field must be inputed");
                }
              }}
            >
              Save Order
            </button>
          </div>
        </form>
      </Section>
    </div>
  );

  return (
    <>
      <Layout main={main} currentUser={currentUser} sidebarMenu={sidebarMenu} />
    </>
  );
}

export default CreateOrder;
