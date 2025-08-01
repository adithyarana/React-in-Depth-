import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import {Provider} from "react-redux"
import Appstote from "./utils/Appstore";

const AppLayout = () => {
  return (
    <div className="app">
      <Provider store={Appstote}>
      <Header/>
      <Outlet />             {/* This will render the matched child route */}
      </Provider>
    </div>
  );
};
export default AppLayout; 
