import logo from "./logo.svg";
import "./App.css";
import { addToCart } from "./redux/actions/basicAction";
import { removeFromCart } from "./redux/actions/basicAction";
import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";

// function App() {
//   const dispatch = useDispatch();
//   const product = {
//     name: 'Iphone',
//     price: 10000,
//     color: 'red'
//   }

//   return (
//     <div className="App">
//       <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
//       <br></br>
//       <button onClick={() => dispatch(removeFromCart(product))}>Remove From Cart</button>
//     </div>
//   );
// }
function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
export default App;
