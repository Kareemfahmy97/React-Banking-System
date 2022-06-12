import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import Notification from "../UI/Notifications";
// import { uiAction } from "../../store/ui-slice";
import { fetchTableUsers } from "../../store/new-actions";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HeaderTwo() {
  const dispatch = useDispatch();
  // const newUsers = useSelector(state => state.tableUsers.data);
  const loading = useSelector(state => state.table.loading);
  // const users = useSelector((state) => state.table.users);

  
  const finalUsers = useSelector((state) => state.users.data);
  // const myError = useSelector((state) => state.users.error);
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

    const divStyle = {
      textAlign: "center",
      verticalAlign: "middle",
      margin: "2rem auto",
      display: 'flex',

    };
  
  return (
    <Fragment>
      <section>
        <div>
          <Button
            onClick={() => dispatch(fetchTableUsers())}
            disabled={loading}
            style={divStyle}
            variant="dark"
            size="lg"
          >
            {!loading ? "Get Users" : "Loading ..."}
          </Button>
        </div>
        {/* <ul>
          {finalUsers.map((user) => (
            <li key={user.id}>
              {`${user.id + 1} ${user.name} $${user.accBalance}`}{" "}
            </li>
          ))}
        </ul> */}
      </section>
    </Fragment>
  );
}
