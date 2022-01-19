import { useEffect } from "react";
import { AppRouter } from "./routers/AppRouter";

function App() {

  useEffect(()=>{
    if(localStorage.getItem('carrito')===null){
      localStorage.setItem('carrito', JSON.stringify([]));
    }
  }, []);

  return (
    <AppRouter />
  );
}

export default App;
