import { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Members from "./members";
import Cart from "./Cart";
import Nav from "./Nav";
// import Login from "./COMPONENTS/LogIn";
// import Register from "./COMPONENTS/Registor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Members />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
