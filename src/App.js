// import Users from './components/users/Users';

import { Fragment} from "react";
import GetUsersButton from './components/layout/GetUsersButton'
// import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/layout/NavBar';
import TransHistoryButton from './components/layout/TransHistoryButton'
import UsersTableData from "./components/layout/UsersTableData";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/layout/Home";
// import { useDispatch } from "react-redux";
// import { fetchMyTableHistory } from "./store/table-slice";

// let initialValue  = true;
// let ifButtonClicked = true;
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMyTableHistory());
  // }, [fetchMyTableHistory, dispatch]);
  return (
    // <Routes>
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/AllUsers" element={<GetUsersButton />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/History-Trans" element={<TransHistoryButton />} />
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
      {/* </Routes> */}
      {/* <NavBar />

      <TransHistoryTable /> */}
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