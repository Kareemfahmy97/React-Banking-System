import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalMe from "./Modal";
const UsersTable = () => {
    const divStyle = {
        height: '20px',
        width: '1200px',
        textAlign: 'center',
        verticalAlign: 'middle',
        margin: 'auto',
       };
  return (
    <Table style={divStyle} bordered hover variant="dark" size="sm">
      <thead size="sm">
        <tr>
          <th>#</th>
          <th>E-mail</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Job</th>
          <th>Transfer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>MarkJohn18@gmail.com</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Frank_forever@yahoo.com</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Twad_chris652@hotmail.com</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>9</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>10</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><ModalMe /></td>
        </tr>
        <tr>
          <td>11</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td><ModalMe /></td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UsersTable;
