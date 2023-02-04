import { Routes, Route } from "react-router-dom"; 
import CompleteOrders from "./CompleteOrder";
import InventoryForm from "./InventoryForm";
import Home from "./Home";
import Profits from "./ProfitsMade";


function Paths(){
    return(
        <Routes>
            <Route path="/orders" element={<CompleteOrders />} />
            <Route path="/inventory" element={<InventoryForm />} />
            <Route path="/profits" element={<Profits />} />
            <Route path="/" element={<Home />} /> 
        </Routes>
    )
}


export default Paths; 