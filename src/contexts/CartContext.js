import { createContext, useState } from "react";

const CartContext = createContext(null);

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const handleAdd = (item) =>{
        
        const filtered = cart.filter(product => item.id === product.id )
        if(filtered.length === 0){
            setCart(prevState => [...prevState, {...item, count:1}])
        } else{
            const temp = [...cart];
            const index = temp.findIndex(product => product.id === item.id)
            temp[index].count+=1;
            setCart(temp)
        }
    }

    const handleRemove = (item) =>{
        const selectedItem = cart.filter(product => product.id === item.id);
        if(selectedItem[0].count > 1){
            const temp = [...cart];
            const index = temp.findIndex(element => element.id === item.id);
            temp[index].count-=1;
            setCart(temp);
        } else{
            const newCart = cart.filter(cartItem => cartItem.id !== item.id );
            setCart(newCart);
        }
    }
    return <CartContext.Provider value={{cart, setCart, handleAdd, handleRemove}}>{children}</CartContext.Provider>
}

export default CartContext;