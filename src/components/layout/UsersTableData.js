import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import ModalMe from "./Modal";
import "bootstrap/dist/css/bootstrap.min.css";


export const UsersTableData = ()=> {
    const finalUsers = useSelector((state) => state.users.data);
  
    const divStyle = {
        height: '20px',
        width: '1200px',
        textAlign: 'center',
        verticalAlign: 'middle',
        margin: '0 auto 2rem',
      };

    const tableHead = (
      <thead size="sm">
        <tr>
          <th>Id</th>
          <th>Full Name</th>
          <th>balance</th>
          <th>Country</th>
          <th>Transfer</th>
        </tr>
      </thead>
    );
    return (
      <section>
          <Table  bordered hover variant="dark" size="sm">
              {finalUsers.length > 0 && tableHead }
            <tbody >
                {finalUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id +1 }</td>
                    <td>{user.name}</td>
                    <td>${user.accBalance}</td>
                    <td>{user.country}</td>
                    <td>
                      <ModalMe modalKey={user.id}/>
                    </td>
                  </tr>
                ))}
                </tbody>
          </Table>
      </section>
    );
};
export default UsersTableData;
