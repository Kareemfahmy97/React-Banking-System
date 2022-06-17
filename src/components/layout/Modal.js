import {
  Modal,
  Button,
  Form,
  DropdownButton,
  Dropdown,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyVerticallyCenteredModal from "./VerticalCenteredModal";
import {
  updateUserData,
} from "../../store/new-actions";
import { setTableTrans } from "../../store/table-slice";

function ModalMe(props) {
  const { modalKey } = props;
  const dispatch = useDispatch();
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
  const [errorMsg, setErrorMsg] = useState(false);
  const [moneyLimit, setMoneyLimit] = useState("");
  const [inputOnFocus, setInputOnFocus] = useState(false);

  const finalUsers = useSelector((state) => state.users.data);

  // Handles to use state and event trageting
  const handleClose = () => setShow(false);
  const onFocus = () => setInputOnFocus(true);
  const onBlur = () => setInputOnFocus(false);
  const handleShow = () => {
    setShow(true);
    setKeyOfSender(modalKey);
    finalUsers.forEach((element) => {
      if (element.id == modalKey) {
        setFirstUserData(element);
      }
    });
  };

  // Filter All Users and get firstUserData
  const handleSend = (event) => {
    setKeyOfSender(event);
    finalUsers.forEach((element) => {
      if (element.id == event) {
        setFirstUserData(element);
      }
    });
    const sameUser = keyOfReceiver == event;
    sameUser ? setErrorMsg(true) : setErrorMsg(false);
  };

  // Filter All Users and get secondUserData

  const handleReceive = (event) => {
    setKeyOfReceiver(event);
    finalUsers.forEach((secondUser) => {
      if (secondUser.id == event) {
        setSecondUserData(secondUser);
      }
    });
    const sameUser = event == keyOfSender;
    sameUser ? setErrorMsg(true) : setErrorMsg(false);
  };

  // Get Inputs
  const getInputValue = (event) => {
    const inputValue = event.target.value;
    setMoneyValue(inputValue);
    setMoneyLimit(inputValue.slice(0, 6));


    if (
      inputOnFocus &&
      (inputValue.includes("-") ||
        inputValue <= 0 ||
        inputValue > firstUserData.accBalance)
    ) {
      setMinusValue(true);
    } else {
      setMinusValue(false);
    }
  };
  const getMessageValue = (event) => {
    setUserMessage(event.target.value);
  };

  // Closeing Handle
  const handleDone = () => {
    let moneyNumber = Number(moneyValue);
    if (firstUserData.accBalance < moneyNumber) {
      console.log("no you cant exceed the balance");
    } else if (keyOfReceiver === keyOfSender) {
      setValueCompareCheck(true);
    } else {
      setValueCompareCheck(false);

      const amountChange = firstUserData.accBalance - moneyNumber;

      const myDate = new Date(Date.now());
      dispatch(
        setTableTrans({
          firstUser: firstUserData.name,
          secondUser: secondUserData.name,
          key: myDate,
          amountChange: moneyNumber,
          lastTrans: myDate.toGMTString(),
        })
      );
      dispatch(
        updateUserData({
          allData: firstUserData,
          userId: firstUserData.id,
          amountChange: firstUserData.accBalance - moneyNumber,
          lastTrans: myDate.toGMTString(),
        })
      );
      dispatch(
        updateUserData({
          allData: secondUserData,
          userId: secondUserData.id,
          amountChange: secondUserData.accBalance + moneyNumber,
          lastTrans: myDate.toGMTString(),
        })
      );

      setShow(false);
      setModalShow(true);
    }
  };
  const displayError = errorMsg && (
    <p class="text-danger bg-light">'You can't choose same user!'</p>
  );
  const chooseUserMsg = (
    <p class={displayError ? "text-danger" : "text-secondary"}>
      Choose another user
    </p>
  );

  const usersSelected = () => {
    if (moneyValue.length <= 5 && keyOfSender >= 0 && keyOfReceiver >= 0) {
      return false;
    } else {
      return true;
    }
  };

 

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
            {chooseUserMsg}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea2"
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
                onFocus={onFocus}
                onBlur={onBlur}
                color="text-danger"
              />
              <Form.Control
                type="text"
                disabled={usersSelected()}
                placeholder={"Optional: Leave a message for the user"}
                onChange={getMessageValue}
                autoFocus
              />
            </Form.Group>
          </Form>
          {displayError}
          {!valueCompareCheck ? (
            ""
          ) : (
            <Alert key="ALERT" variant="danger">
              You can't choose same users!
            </Alert>
          )}
          {minusValue ? (
            <Alert key="ALERT" variant="danger">
              You can't send these values, Try again!!
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
            disabled={usersSelected()}
            onClick={handleDone}
          >
            Send Money
          </Button>
        </Modal.Footer>
      </Modal>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </>
  );
}

export default ModalMe;
