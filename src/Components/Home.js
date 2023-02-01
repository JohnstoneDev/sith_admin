import { Link, Switch, Route  } from "react-router-dom"

import CompleteOrders from "./CompleteOrder";
import InventoryForm from "./InventoryForm";

function Navigation(){
    return(
        <div className="flex p-2 gap-8 align-bottom justify-center items-center">
            <section className="mr-24">
                <Link to="/">
                    <h2 className=" text-heading text-4xl font-semibold animate-pulse border-b-4 border-btn-bg">Sith Admin </h2>
                </Link>
            </section>
            <Link to="/orders">Pending Orders</Link>
            <Link to="/inventory">Update Inventory</Link>
        </div>
    )
}


function Home(){
    return(
        <div>
            <Navigation />
            <Switch>
                <Route path="/orders">
                    <CompleteOrders />
                </Route>

                <Route path="/inventory">
                    <InventoryForm />
                </Route>
            </Switch>
        </div>
    )
}; 


export default Home; 