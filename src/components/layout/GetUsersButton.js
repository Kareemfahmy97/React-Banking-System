import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchTableUsers } from "../../store/new-actions";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UsersTableData from "./UsersTableData";

export default function GetUsersButton() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.users.loading);

  
  const finalUsers = useSelector((state) => state.users.data);

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
            disabled={loading == "loading"}
            style={divStyle}
            variant="dark"
            size="lg"
          >
            {loading == 'loading' ?  "Loading ..." : "Get Users" }
          </Button>
        </div>
        <UsersTableData />
      </section>
    </Fragment>
  );
}
