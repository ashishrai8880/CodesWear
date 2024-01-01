import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState , useEffect , useRef , React} from 'react'
import { useRouter } from 'next/router';

import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  console.log('coming in app.js')
  const router = useRouter();
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)

  const cartRef = useRef();
  const [cart, setCart] = useState({})

  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {

    router.events.on('routeChangeComplete', ()=>{setProgress(100)})
    router.events.on('routeChangeStarts', ()=>{setProgress(30)})

    // console.log('router object : ',router)
    if(!localStorage.getItem('token') && !(router.pathname == '/login' || router.pathname == '/register' || router.pathname == '/forgot-password' )){
      const nextRoute = router.pathname.split('/')[1] ;
      router.push(`/login?to=${nextRoute}`);
    }
    
    if(localStorage.getItem('cart')){
      setCart(JSON.parse(localStorage.getItem('cart')));
    }

  }, [router.query])
  

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

  const addToCart = (itemCode , qty , price , name , size , variant , img)=>{
    console.log('in add to cart ',itemCode , qty , price , name , size , variant)

    let newCart = cart ;

    if(itemCode in cart){
      newCart[itemCode].qty = newCart[itemCode].qty + 1 ;
    }
    else{
      newCart[itemCode] = {itemCode , qty:1 , price , name , size , variant , img} ;
    }

    setCart(newCart);
    saveCart(newCart);
    console.log(' this is cart ref : ',cartRef)

    cartRef.current.click();

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


  return <>
      <LoadingBar
        color='#FF647F'
        waitingTime={500}
        // loaderSpeed={5000}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
   <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} cartRef={cartRef}/>
          <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} cartRef={cartRef}/>  

          <Footer/></>
}
