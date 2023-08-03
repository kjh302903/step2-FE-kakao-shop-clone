import "@styles/default.css";
import Detail from "@pages/Detail";
import Login from "@pages/Login";
import Main from "@pages/Main";
import Order from "@pages/Order";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "@pages/Register";
import Layout from "@pages/Layout";
import NotFound from "@pages/NotFound";
import Cart from "@pages/Cart";
import Complete from "@pages/Complete";
import { staticServerUri } from "@utils/staticuri";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={staticServerUri + "/login"} element={<Login />} />
          <Route path={staticServerUri + "/register"} element={<Register />} />
          <Route element={<Layout />}>
            <Route path={staticServerUri + "/"} element={<Main />} />
            <Route path={staticServerUri + "/cart"} element={<Cart />} />
            <Route
              path={staticServerUri + "/product/:id"}
              element={<Detail />}
            />
            <Route path={staticServerUri + "/order"} element={<Order />} />
            <Route
              path={staticServerUri + "/orders/complete/:id"}
              element={<Complete />}
            />
          </Route>
          <Route path={staticServerUri + "/*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
