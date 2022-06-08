import React, { useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendTableUsers, getTableUsers } from "../../store/user-actions";
import Notification from "../UI/Notifications";
import { uiAction } from "../../store/ui-slice";
import { getUsers } from "../../store/new-slice";

export default function HeaderTwo() {
  const dispatch = useDispatch();
  const newUsers = useSelector(state => state.users.data);
  const loading = useSelector(state => state.table.loading);
  const users = useSelector((state) => state.table.users);
  // const notifications = useSelector((state) => state.ui.notification);
  // const showTable = useSelector((state) => state.ui.tableIsVisible);
  
  //   const loading = useSelector((state) => state.table.loading);
  // const toggleHandler = () => {
  //   dispatch(uiAction.toggle());
  // };
  // useEffect(() => {
  //   dispatch(getTableUsers());
  // }, [dispatch]);

  
// if(users.changed){
//   console.log('yes')
// }

if(newUsers){
  console.log(newUsers);

}
  
  return (
    <Fragment>
      <section>
        <button onClick={() => dispatch(getUsers())} disabled={loading}>
          {!loading ? "Get Users" : "Loading ..."}
        </button>
        <ul>
          
          {newUsers.map((user) => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
        <button onClick={() => dispatch(getTableUsers())}>Get them</button>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>
    </Fragment>
  );
}
