import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext';
import "./Product.css"

const Product = ({ item }) => {
    const { cart, handleAdd } = useContext(CartContext);
    const targetItem = cart.find(cartItem => cartItem.id === item.id);

    return (
        <div className="card mb-4">
            <Link to={`/products/${item.id}`}>
                <div className="card-img-top">
                    <img 
                        src={item.images[0]} 
                        alt={item.title} 
                    />
                </div>
            </Link>
            <div className="card-body">
                <p className="card-title">{item.title}</p>
                <p className="card-text">{item.description}</p>
                <p className="card-text">
                    <strong>{`£${item.price.toFixed(2)}`}</strong>
                </p>
                {targetItem ? (
                    <button className="btn btn-secondary" disabled> you bought this</button>
                ) : (
                    <button 
                        className="btn btn-primary" 
                        onClick={() => handleAdd(item)}
                    >
                        Buy 
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
