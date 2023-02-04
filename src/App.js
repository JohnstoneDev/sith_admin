import './App.css';
import Paths from './Components/Routes';
import { Link } from "react-router-dom"; 


function App() {

  function Navigation(){
      return(
          <header className="flex gap-8 align-bottom text-center justify-center items-center">
              <section className="mr-24">
                  <Link to="/">
                      <h2 className=" text-heading text-4xl font-semibold animate-pulse border-b-4 border-btn-bg">Sith Admin </h2>
                  </Link>
              </section>
              <Link to="/profits" className='border-b-4 border-btn-bg'>Profits</Link>
              <Link to="/orders" className='border-b-4 border-btn-bg'>Pending Orders</Link>
              <Link to="/inventory" className='border-b-4 border-btn-bg'>Update Inventory</Link>
          </header>
      )
  }

    function Footer(){
      return(
        <footer className='p-4'>
            ProDev Copyright 2023. All Rights Reserved. 
        </footer>
      )
    }




  return (
    <div className="App p-2 m-0 font-main bg-modal-bg text-heading leading-5 snap-align-none min-h-screen">
        <Navigation />
        <Paths />
        <Footer />
    </div>
  );
}

export default App;
