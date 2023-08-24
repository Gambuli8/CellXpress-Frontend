import { orderBuy } from "../../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const OrderBuy = () => {

    const allOrderBuy = useSelector((state) => state.orderBuy);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderBuy());
    }, [dispatch, id]);
    console.log(allOrderBuy)



    return (
        <div>
            <h1>Order Buy</h1>
            {allOrderBuy.products.map((elemento) => {
                return (
                    <div key={elemento._id} className={style.ordenCompra}>
                        {console.log(elemento)}
                        <div className={style.ordenDetail}>
                            {elemento.products.map((e) => {
                                return (
                                    <ul key={e._id} className={style.containerProduct}>
                                        <img
                                            src={e.product.image}
                                            alt={e.product.title}
                                            width="80px"
                                            height="80px"
                                        />
                                        <li className={style.label}>{e.product.title}</li>
                                        <li className={style.label}>{e.product.brand}</li>
                                        <li className={style.label}>${elemento.total}</li>
                                        <li className={style.label}>{e.quantity}</li>
                                    </ul>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default OrderBuy;