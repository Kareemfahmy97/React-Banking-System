import {
  Modal,
  Button,
  Form,
  DropdownButton,
  Dropdown,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import MyVerticallyCenteredModal from "./VerticalCenteredModal";

function ModalMe() {
  //States of buttons to recieve and store values and clicks
  const [show, setShow] = useState(false);
  const [keyOfSender, setKeyOfSender] = useState(null);
  const [keyOfReceiver, setKeyOfReceiver] = useState(null);
  const [moneyValue, setMoneyValue] = useState(0);
  const [userMessage, setUserMessage] = useState("");
  const [valueCompareCheck, setValueCompareCheck] = useState(false);
  const [firstUserData, setFirstUserData] = useState(null);
  const [secondUserData, setSecondUserData] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [minusValue, setMinusValue] = useState(false);
  const [disableMe, setDisableMe] = useState(false);
  const [moneyLimit, setMoneyLimit] = useState('');
  const finalUsers = useSelector((state) => state.users.data);

  // Handles to use state and event trageting
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(finalUsers);
  };

  const handleSend = (event) => {
    setKeyOfSender(event);
    finalUsers.forEach((element) => {
      if(element.id == event){
        console.log('Sender Selected');
        setFirstUserData(element);
      };
    });
  };

  const handleReceive = (event) => {
    setKeyOfReceiver(event);
     finalUsers.forEach((secondUser) => {
       if (secondUser.id == event) {
         console.log("Receive Selected");
         setSecondUserData(secondUser);
       };
     });
     
  };

 
  // Get Inputs 
  const getInputValue = (event) => {
    setMoneyValue(event.target.value);
    setMoneyLimit(event.target.value.slice(0, 5));
    // if(event.target.value.length >= 5){
    //   setDisableMe(true);
    // };
  };
  const getMessageValue = (event) => {
    setUserMessage(event.target.value);
  };
  


  // Closeing Handle 
  const handleDone = () => {
      if (moneyValue.includes("-") || moneyValue <= 0) {
        setMinusValue(true);
      } else if (keyOfReceiver === keyOfSender) {
        setValueCompareCheck(true);
      } else {
        setValueCompareCheck(false);
        console.log(`User message : ${userMessage}`);
        console.log(`Money amount : ${Number(moneyValue) + 1}`);
        console.log(`reciever: ${keyOfReceiver}`);
        console.log(`sender: ${keyOfSender}`);
        console.log(
          `First User data : ${firstUserData.name}, ${firstUserData.country}`
        );
        console.log(
          `Second User data : ${secondUserData.name}, ${secondUserData.country}`
        );
        setShow(false);
        setModalShow(true);
      }
  };

  const usersSelected = keyOfSender && keyOfReceiver && moneyValue;



  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Transfer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sending Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name of Sending User</Form.Label>

              <DropdownButton
                title={
                  firstUserData === null
                    ? "User Will Send Money"
                    : `"${firstUserData.name}" Balance: $${firstUserData.accBalance}`
                }
                id="dropdown-menu-align-right"
                onSelect={handleSend}
              >
                {finalUsers.map((user) => (
                  <Dropdown.Item eventKey={user.id}>
                    {user.key} - {user.name} : ${user.accBalance}
                    <Dropdown.Divider />
                  </Dropdown.Item>
                ))}
                ;
              </DropdownButton>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name of Recieving User</Form.Label>
              <DropdownButton
                
                title={
                  secondUserData === null
                    ? "User Will Receive Money"
                    : `"${secondUserData.name}"  Balance: $${secondUserData.accBalance}`
                }
                id="dropdown-menu-align-right"
                onSelect={handleReceive}
              >
                {finalUsers.map((user) => (
                  <Dropdown.Item eventKey={user.id}>
                    {user.key} - {user.name} : ${user.accBalance}
                    <Dropdown.Divider />
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ex: $25"
                min={1}
                maxLength={5}
                onChange={getInputValue}
                value={moneyLimit}
                rows={3}
              />
              <Form.Control
                type="text"
                disabled={!usersSelected}
                placeholder={"Amount"}
                onChange={getMessageValue}
                autoFocus
              />
            </Form.Group>
          </Form>
          {!valueCompareCheck ? (
            ""
          ) : (
            <Alert key="ALERT" variant="danger">
              You can't choose same users!
            </Alert>
          )}
          {minusValue ? (
            <Alert key="ALERT" variant="danger">
              You can't send this values, Try bigger numbers!
            </Alert>
          ) : (
            ""
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={!usersSelected}
            onClick={handleDone}
          >
            Send Money
          </Button>
        </Modal.Footer>
      </Modal>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalMe;
