import { useContext } from "react";
import ListItem from "./ListItem";
import CartContext from "../contexts/CartContext";

const List = () => {

    const { cart } = useContext(CartContext);

    const getTotal = (basket) =>{
        let total = 0;
        basket.map(item =>{
            total+= item.price * item.count
        })

        return total;
    }

    return (
        <ul className="list-group list-group-flush">
            {cart.map(item => (
                <li className="list-group-item">
                    <ListItem item={item} />
                </li>
            ))}
            <li className="list-group-item">
            <p>Checkout: {`£${getTotal(cart).toFixed(2)}`} </p>
            </li>
        </ul>
    )
}

export default List;