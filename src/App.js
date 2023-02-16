import './App.css';
import Paths from './Components/Routes';
import { Link } from "react-router-dom"; 


function App() {

  function Navigation(){
      return(
          <header className="flex flex-col gap-3 align-bottom text-left">
              <section className="mr-24">
                  <Link to="/">
                      <h3 className=" text-heading text-2xl font-semibold animate-pulse border-b-4 border-btn-bg">Sith Admin </h3>
                  </Link>
              </section>
              <Link to="/profits" className='font-semibold'>Profits</Link>
              <Link to="/orders" className='font-semibold'>Pending Orders</Link>
              <Link to="/inventory" className='font-semibold'>Update Inventory</Link>
              <button className='w-1/2 p-3 bg-deep-red border rounded text-main-bg hover:bg-main-bg hover:text-deep-red'>Log Out</button>
          </header>
      )
  }

  return (
    <div className="App p-2 m-0 font-main bg-modal-bg text-heading leading-5 snap-align-none min-h-screen flex gap-10">
        <div className='flex flex-col gap-40 width-1/2'>
          <Navigation />
        </div>
        <Paths />
    </div>
  );
}

export default App;
