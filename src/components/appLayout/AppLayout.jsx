import { Outlet, ScrollRestoration } from "react-router-dom";
import Hero from "../hero/Hero";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";
import { CartProvider } from "../../context/Cart";


export default function AppLayout() {

    /* CartProvider tillader at children kan hente context */
    return(
        <CartProvider>
            <div style={{minHeight: "100vh"}}>
                <Hero />
                <Navigation />
                <main>
                        <Outlet/>
                    <ScrollRestoration/>
                </main>
                <Footer />
            </div>
        </CartProvider>
    )

}