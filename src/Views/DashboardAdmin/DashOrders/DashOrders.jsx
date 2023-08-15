import { getProduct } from "../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from "./DashOrder.module.css";

export default function DashOrder() {
  const allOrders = useSelector((state) => state.orderBuy);
  const dispatch = useDispatch();
  console.log("ordenessss", allOrders);
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div>
      {allOrders.map((order, index) => (
        <ul className={style.listContainer}>
          <li key={order._id} className={style.itemList}>
            {order.userId}
          </li>
          <li key={index} className={style.itemList}>
            {order.products}
          </li>
          🚝🛺
        </ul>
      ))}
    </div>
  );
}
