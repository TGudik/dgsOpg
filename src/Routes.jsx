import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

/* route imports */
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import { employeesLoader, fetchDishById, homeLoader } from "./loaders/DataLoaders";
import EmployeesPage from "./pages/EmployeesPage";
import Dish from "./pages/Dish";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import BaOfEmployees from "./pages/backoffice/baOfEmployees";


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppLayout />} hydrateFallbackElement={<Loading/>}>
            <Route
              index
              element={<Home />}
              loader={homeLoader}
            />
            <Route 
              path="employees"
              element={<EmployeesPage />}
              loader={employeesLoader}
            />
            <Route
              path="dish/:id"
              element={<Dish />}
              loader={fetchDishById}
            />
            <Route
              path="contact"
              element={<Contact />}
            />
            <Route
              path="cart"
              element={<CartPage />}
            />
            <Route 
              path="backoffice/employees"
              element={<BaOfEmployees/>}
              loader={employeesLoader}
            />
        </Route>
    )
)


export default routes