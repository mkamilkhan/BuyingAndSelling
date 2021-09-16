import logo from './logo.svg';
import './App.css';
import './tailwind.min.css';
import AllProducts from './pages/allProducts';
import Home from './pages/home'
import AddProducts from './pages/addProducts';
import VehicalForm from './components/vehicalForm';
import BikeForm from './components/bikeForm';
import MobileForm from './components/mobileForm';
import BikeProducts from './pages/bikeProducts';
import FurnitureForm from './components/furnitureForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import FurnitureProducts from './pages/furnitureProducts';
function App() {
  return (
    <div>
      <div>
        <Router>
          <div>

            <Switch>
              <Route path={"/vehicalForm"} component={VehicalForm}>
                <VehicalForm />
              </Route>
              <Route path={"/bikeForm"} component={BikeForm}>
                <BikeForm />
              </Route>
              <Route path={"/mobileForm"} component={MobileForm}>
                <MobileForm />
              </Route>
              <Route path={"/furnitureForm"} component={FurnitureForm}>
                <FurnitureForm />

              </Route>
              <Route path={"/bikeProducts"} component={BikeProducts}>
                <BikeProducts />

              </Route>
              {/* <AddProducts></AddProducts> */}
              {/* <Home></Home> */}
              {/* <BikeProducts ></BikeProducts> */}
              <FurnitureProducts></FurnitureProducts>
              {/* <AddProducts></AddProducts> */}
              {/* <AllProducts></AllProducts> */}
            </Switch>

          </div>
        </Router>

      </div>
    </div>
  );
}

export default App;
