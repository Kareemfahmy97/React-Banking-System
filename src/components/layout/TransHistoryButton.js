import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchMyTableHistory } from "../../store/table-slice";
import TransHistoryTable from "./TransHistoryTable";

export default function GetUsersButton() {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.table.loading);
  const finalUsers = useSelector((state) => state.users.data);

  const divStyle = {
    textAlign: "center",
    verticalAlign: "middle",
    margin: "2rem auto",
    display: "flex",
  };

  return (
    <Fragment>
      <section>
        <div>
          <Button
            onClick={() => dispatch(fetchMyTableHistory())}
            disabled={loading == "loading"}
            style={divStyle}
            variant="dark"
            size="lg"
          >
            {loading == "loading" ? "Loading ..." : "All Transactions"}
          </Button>
        </div>
        <TransHistoryTable />
      </section>
    </Fragment>
  );
}
