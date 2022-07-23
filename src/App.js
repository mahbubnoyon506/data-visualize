import {Routes, Route} from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home';
import Results from './Pages/Dashboard/Results';
import Details from "./Pages/Dashboard/Details";

function App() {
  return (
    <div >
      <Routes>
         <Route path='/' element={<Home></Home>}>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='results' element={<Results></Results>}></Route>
          <Route path='details/:id' element={<Details></Details>}></Route>
         </Route>
      </Routes>
    </div>
  );
}

export default App;
