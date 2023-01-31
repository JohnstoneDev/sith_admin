import './App.css';

function App() {
  return (
    <div className="App font-main  bg-main-bg text-heading leading-5">
      <h2 className=" text-heading p-2 text-4xl font-semibold animate-pulse border-b-4 border-modal-bg">This is the Admin side </h2>
      <div className=" flex  flex-col p-2 text-left items-center align-middle justify-center">
          elements that should be here : 
          <ol className='p-3'>
              <li>A form to add the elements to the db(add inventory items) </li>
              <li>A Section to complete orders </li>
              <li>Confirmation of payments / total items sold </li>
          </ol>
      </div>
    </div>
  );
}

export default App;
