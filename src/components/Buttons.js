import { useContext } from "react";
import CartContext from "../contexts/CartContext";

const Buttons = ({ count, item }) => {
    const { handleAdd, handleRemove } = useContext(CartContext);



    return (
        <div className="d-flex justify-content-center align-items-center">
            <button
                className="btn btn-outline-success"
                onClick={() => { handleAdd(item) }}
                style={{ width: '40px', height: '40px', padding: '0', fontSize: '18px' }} 
            >
                +
            </button>

            <button
                style={{
                    margin: '0 15px',
                    width: '60px',
                    height: '60px',
                    fontSize: '18px',
                    borderRadius: '30%',
                    backgroundColor: 'cb9a9a', 
                    color: '',
                    
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'default'
                }}
            >
                {count}
            </button>

            <button
                className="btn btn-outline-danger"
                onClick={() => { handleRemove(item) }}
                style={{ width: '40px', height: '40px', padding: '0', fontSize: '18px' }} 
            >
                -
            </button>
        </div>

    )
}

export default Buttons;