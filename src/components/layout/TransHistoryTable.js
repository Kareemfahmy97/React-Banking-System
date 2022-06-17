import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

 
export const TransHistoryTable = () => {
  const tableTrans = useSelector((state) => state.table.data);
  const tableNew= [...tableTrans].reverse();

    const divStyle = {
    height: "20px",
    width: "1200px",
    textAlign: "center",
    verticalAlign: "middle",
    margin: "0 auto 2rem",
  };

  const tableHead = (
    <thead size="sm">
      <tr>
        <th>Id</th>
        <th>From</th>
        <th>To</th>
        <th>Amount</th>
        <th>History</th>
      </tr>
    </thead>
  );
  return (
    <section>
      <Table bordered hover variant="dark" size="sm">
        {tableTrans.length > 0 && tableHead}
        <tbody>
          {tableNew.map((user) => (
            <tr key={user.key}>
              <td>{tableTrans.length > 0 && `${user.id.substr(2, 6)}... `}</td>
              <td>{user.from}</td>
              <td>{user.to}</td>
              <td>${user.amount}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
};
export default TransHistoryTable;
