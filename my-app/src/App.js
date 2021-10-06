import logo from './logo.svg';
import './App.css';
import './tailwind.min.css';
import AllProducts from './pages/allProducts';
import Home from './pages/home'
import AddProducts from './pages/addProducts';
import VehicalForm from './components/vehicalForm';
import BikeForm from './components/bikeForm';
import MobileForm from './components/mobileForm';
import FurnitureForm from './components/furnitureForm';
import BikeProducts from './pages/bikeProducts';
import FurnitureProducts from './pages/furnitureProducts';
import MobileProducts from './pages/mobileProducts'
import VehicalProducts from './pages/vehicalProducts'
import VehicalDetails from './components/vehicalDetails';
import BikeDetails from './components/bikeDetails';
import MobileDetails from './components/mobileDetails'
import FurnitureDetails from './components/furnitureDetails';
import Admin from './admin/admin';
import AdminLogin from './admin/adminLogin';
import AdminRegister from './admin/adminRegister';
// import AdminSign from './admin/adminSign';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Router>
          <div>

            <Switch>
              <Route path={"/home"} component={Home}>
                <Home />
              </Route>
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
              <Route path={"/furnitureProducts"} component={FurnitureProducts}>
                <FurnitureProducts />

              </Route>
              <Route path={"/mobileProducts"} component={MobileProducts}>
                <MobileProducts />

              </Route>
              <Route path={"/vehicalProducts"} component={VehicalProducts}>
                < VehicalProducts />

              </Route>
              <Route path={"/vehicalDetails/:id"} component={VehicalDetails}>
                < VehicalDetails />

              </Route>
              <Route path={"/bikeDetails/:id"} component={BikeDetails}>
                < BikeDetails />

              </Route>
              <Route path={"/mobileDetails/:id"} component={MobileDetails}>
                < MobileDetails />

              </Route>
              <Route path={"/furnitureDetails/:id"} component={FurnitureDetails}>
                < FurnitureDetails />

              </Route>
              <Route path={"/AddProducts/"} component={AddProducts}>
                < AddProducts />

              </Route>
              <Route path={"/AllProducts/"} component={AllProducts}>
                < AllProducts />

              </Route>
              <Route path={"/admin/"} component={Admin}>
                < Admin />

              </Route>
              <Route path={"/adminRegister"} component={AdminRegister} exact>

                < AdminRegister />
              </Route>
              <Route path={"/adminLogin"} component={AdminLogin} exact>

                < AdminLogin />
              </Route>
              {/* <Admin></Admin> */}
              {/* <AdminRegister></AdminRegister> */}
              <Home />
              {/* <AdminLogin></AdminLogin> */}

              {/* <AdminSign ></AdminSign > */}

            </Switch>

          </div>
        </Router>

      </div >
    </div >
  );
}

export default App;
