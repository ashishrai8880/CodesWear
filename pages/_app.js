import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState , useEffect } from 'react'


export default function App({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    
    if(localStorage.getItem('cart')){
      setCart(JSON.parse(localStorage.getItem('cart')));
    }

  }, [])
  

  const saveCart = (myCart)=>{
    console.log('my cart : ',myCart)
    localStorage.setItem('cart' , JSON.stringify({...JSON.parse(localStorage.getItem('cart')) , ...myCart}));

    let subt = 0 ;
    let keys = Object.keys(cart);

    for(let i=0 ; i<keys.length ; i++){
      subt += cart[keys[i]].price * cart[keys[i]].qty ;
    }
    setSubTotal(subt);
  }

  const addToCart = (itemCode , qty , price , name , size , variant)=>{
    console.log('in add to cart ',itemCode , qty , price , name , size , variant)

    let newCart = cart ;

    if(itemCode in cart){
      newCart[itemCode].qty = newCart[itemCode].qty + 1 ;
    }
    else{
      newCart[itemCode] = {itemCode , qty:1 , price , name , size , variant} ;
    }

    setCart(newCart);
    saveCart(newCart);

  }
  const removeFromCart = (itemCode , qty , price , name , size , variant)=>{

    let newCart = cart ;

    if(itemCode in cart){
      newCart[itemCode].qty = newCart[itemCode].qty - 1 ;
    }
    
    if(newCart[itemCode].qty <= 0){
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);

  }

  const clearCart = ()=>{
    localStorage.clear();
    setCart({});
    setSubTotal(0);
  }


  return <> <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
          <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />  

          <Footer/></>
}
