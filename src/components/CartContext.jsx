import {createContext, useState} from "react"; 

export const CartContext = createContext()

const CartContextProvider = ({children}) =>{

    const [CartList,setCartList] = useState([])

    const addItem = (item,quantity) =>{
        if(isInCart(item.id)){
               setCartList(CartList.map(product=>{
                return product.id === item.id ? {...product,quantity: product.quantity + quantity} : product
            }));
        }else {
            setCartList([...CartList,{...item,quantity}]);
        }
    }
    const clear = () =>{
        setCartList([])
    }
    const totalProductsQty =() =>{
        return CartList.reduce((acc,itemCart) => acc + itemCart.quantity,0)
    }
    const totalPrice = () => {
        return CartList.reduce((acc,itemCart) => acc + (itemCart.quantity * itemCart.price),0);
    }
    
    const isInCart = (id) =>{
        return CartList.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => setCartList(CartList.filter(product => product.id !== id));
    
    return(
        <CartContext.Provider value={{CartList,addItem,clear,isInCart,removeProduct,totalProductsQty,totalPrice}}>
           {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;