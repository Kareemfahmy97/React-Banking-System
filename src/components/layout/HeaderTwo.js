import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendTableUsers, getTableUsers } from "../../store/user-actions";
import Notification from "../UI/Notifications";
import { uiAction } from "../../store/ui-slice";


export default function HeaderTwo() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.table.data);
  const notifications = useSelector((state) => state.ui.notification);
  const showTable = useSelector((state) => state.ui.tableIsVisible);

  //   const loading = useSelector((state) => state.table.loading);
  const toggleHandler = () => {
    dispatch(uiAction.toggle());
  };
  useEffect(() => {
    dispatch(getTableUsers());
  }, [dispatch]);


  console.log(users);
  
  return (
    <Fragment>
      <section >
        
        <button onClick={toggleHandler}>Toggle</button>
        
      </section>
    </Fragment>
  );
}
