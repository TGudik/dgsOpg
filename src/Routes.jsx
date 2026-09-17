import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

/* route imports */
import AppLayout from "./components/appLayout/AppLayout";
import Loading from "./components/loading/Loading";
import Home from "./pages/Home";
import { categoriesLoader, employeesLoader, fetchDishById, homeLoader } from "./loaders/DataLoaders";
import EmployeesPage from "./pages/EmployeesPage";
import Dish from "./pages/Dish";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import BaOfEmployees from "./pages/backoffice/baOfEmployees";
import Login from "./pages/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Backoffice from "./pages/backoffice/Backoffice";
import BoCategories from "./pages/backoffice/BoCategories";

/* Opretter ruter som, hvor relevant, indeholder en loader der gør data tilgængeligt til alle komponenter, når man er på ruten */
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
              path="login"
              element={<Login />}
            />
            <Route 
              path="backoffice"
              element={<ProtectedRoute/>}
            >
              <Route
                index
                element={<Backoffice />}
              />
              <Route 
                path="employees"
                element={<BaOfEmployees/>}
                loader={employeesLoader}
              />
              <Route
                path="categories"
                element={<BoCategories />}
                loader={categoriesLoader}
              />
            </Route>
        </Route>
    )
)


export default routes