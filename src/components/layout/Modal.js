import { Modal, Button, Form, DropdownButton, Dropdown } from "react-bootstrap";
import { useRef, useState } from "react";

function ModalMe() {
  const [show, setShow] = useState(false);
  const [nameOfSender, setNameOfSender] = useState("");
  const [nameOfReceiver, setNameOfReceiver] = useState("");
  const [moneyValue, setMoneyValue] = useState(0);
  const [userMessage, setUserMessage] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const messageUserRef = useRef(null);
  // const amountUserRef = useRef(null);
  // const messageValue = messageUserRef.current.value;
  // const amountValue = amountUserRef.current.value;

 
  const handleSender = (event) => {
    setNameOfSender(event);
  };
  const handleReceive = (event) => {
    setNameOfReceiver(event);
  };
  const getInputValue = (event) => {
    setMoneyValue(event.target.value);
  }
  const getMessageValue = (event) => {
    setUserMessage(event.target.value)
  }
   const handleDone = () => {
    //  console.log(messageUserRef.current.value);
    
     console.log(userMessage);
     console.log(moneyValue ? 'yes we have money' : 'no');
     console.log(Number(moneyValue) + 1);
     console.log(nameOfReceiver);
     console.log(nameOfSender);

     setShow(false);
   };
  // const firstUserRef = useRef();
  // const secondUserRef = useRef();

  // const firstUserValue = firstUserRef.current.value;
  // const secondUserValue = secondUserRef.current.value;

  // const handleKeyClicks = () => {
  //   console.log(firstUserValue);
  // };
// , secondUserValue, messageValue, amountValue
  // if(firstUserValue && secondUserValue && amountValue){
  //   submitButton.removeAttribute('disabled');
  // } else {

  // }
  const usersSelected = nameOfSender && nameOfReceiver  && moneyValue  ;
  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Transfer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name of First User</Form.Label>

              {/* <Form.Control
                type="text"
                disabled={!nameOfSender}
                ref={firstUserRef}
                onKeyUpCapture={handleKeyClicks}
                placeholder={nameOfSender.slice() === "" ? "Amount '$'" : nameOfSender}
                autoFocus
              /> */}
              <DropdownButton
                alignRight
                // ref={firstUserRef}
                title={
                  nameOfSender.slice() === ""
                    ? "User Will Send Money"
                    : nameOfSender
                }
                id="dropdown-menu-align-right"
                onSelect={handleSender}
              >
                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name of Second User</Form.Label>

              {/* <Form.Control
                type="text"
                disabled={!nameOfSender}
                ref={firstUserRef}
                onKeyUpCapture={handleKeyClicks}
                placeholder={nameOfSender.slice() === "" ? "Amount '$'" : nameOfSender}
                autoFocus
              /> */}
              <DropdownButton
                alignRight
                // ref={secondUserRef}
                title={
                  nameOfReceiver.slice() === ""
                    ? "User Will Receive Money"
                    : nameOfReceiver
                }
                id="dropdown-menu-align-right"
                onSelect={handleReceive}
              >
                <Dropdown.Item eventKey="option-1">option-1</Dropdown.Item>
                <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
                <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Amount</Form.Label>

              <Form.Control
                type="text"
                disabled={!usersSelected}
                placeholder={
                  nameOfSender.slice() === ""
                    ? "Amount '$'"
                    : `Send Message to ${nameOfSender}`
                }
                // ref={messageUserRef}
                onChange={getMessageValue}
                important
                autoFocus
              />
              <Form.Control
                type="number"
                placeholder="Ex: $25"
                // ref={amountUserRef}
                onChange={getInputValue}
                important
                rows={3}
              />
            </Form.Group>
          </Form>
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
    </>
  );
}

export default ModalMe;
