import List from "../components/List";
import Message from "../components/Message";

const Cart = () => {

    return (
        
        <div className="container">
            <Message>Thank you for supporting the artist </Message>

            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-lg-6">
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Cart;