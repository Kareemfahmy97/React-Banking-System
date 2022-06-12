// import Users from './components/users/Users';
import UsersTable from "./components/layout/UsersTable";

import { Fragment } from "react";
import HeaderTwo from './components/layout/HeaderTwo'
// import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/layout/NavBar';
import UsersTableData from "./components/layout/UsersTableData";


// let initialValue  = true;
// let ifButtonClicked = true;
function App() {

  return (
    <Fragment>
      <NavBar />
      <HeaderTwo />
      
      <UsersTableData />
      {/* {ifButtonClicked ? <UsersTable /> : ""} */}

      {/* <UsersTable />
      <Users /> */}
    </Fragment>
  );
}

export default App;

// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
  // const dispatch = useDispatch();
  // const showTable = useSelector((state) => state.ui.tableIsVisible);
  // const cart = useSelector((state) => state.cart);
  // const notification = useSelector((state) => state.ui.notification);

  // useEffect(()=>{
  //   dispatch(fetchTableData());
  // },[dispatch]);

  // useEffect(() => {
    //         if (initialValue) {
      //           initialValue = false;
      //           return;
      //         }
  //         if(cart.changed){
  //           dispatch(sendTableData(cart));
  //         }

  // }, [cart, dispatch]);