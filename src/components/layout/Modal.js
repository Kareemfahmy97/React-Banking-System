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
  fetchTableUsers,
  setTableUsers,
  updateUserData,
} from "../../store/new-actions";

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
  const [disableMe, setDisableMe] = useState(false);
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
    console.log(modalKey);
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
        console.log("Sender Selected");
        setFirstUserData(element);
      }
    });
    const sameUser = keyOfReceiver == event;
    sameUser ? setErrorMsg(true) : setErrorMsg(false);
    console.log(sameUser);
  };

  // Filter All Users and get secondUserData

  const handleReceive = (event) => {
    setKeyOfReceiver(event);
    finalUsers.forEach((secondUser) => {
      if (secondUser.id == event) {
        console.log("Receive Selected");
        setSecondUserData(secondUser);
      }
    });
    const sameUser = event == keyOfSender;
    sameUser ? setErrorMsg(true) : setErrorMsg(false);
    console.log(sameUser);
  };

  // Get Inputs
  const getInputValue = (event) => {
    const inputValue = event.target.value;
    setMoneyValue(inputValue);
    setMoneyLimit(inputValue.slice(0, 4));
    console.log(inputValue);
    console.log(inputOnFocus);

    if (
      inputOnFocus &&
      (inputValue.includes("-") ||
        inputValue <= 0 ||
        inputValue > firstUserData.accBalance)
    ) {
      console.log("no you cant exceed the balance");
      setMinusValue(true);
    } else {
      console.log("okay");
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

      console.log(typeof moneyValue);
      console.log(`User message : ${userMessage}`);
      console.log(`Money amount : ${Number(moneyValue)}`);
      console.log(`reciever: ${keyOfReceiver}`);
      console.log(`sender: ${keyOfSender}`);
      console.log(
        `First User data : ${firstUserData.name}, ${firstUserData.country}`
      );
      console.log(
        `Second User data : ${secondUserData.name}, ${secondUserData.country}`
      );
      const myDate = new Date(Date.now());
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

      // setKeyOfSender (null);
      // setKeyOfReceiver (null);
      // setMoneyValue (0);
      // setUserMessage("");
      // setValueCompareCheck (false);
      // setFirstUserData (null);
      // setSecondUserData (null);
      // setModalShow (false);
      // setMinusValue (false);
      // setErrorMsg (false);
      // setDisableMe (false);
      // setMoneyLimit("");
      // setInputOnFocus (false);
      setShow(false);
      setModalShow(true);
    }
  };
  const displayError = errorMsg && (
    <p class="text-danger bg-light">'Are you kidding me?'</p>
  );
  const chooseUserMsg = (
    <p class={displayError ? "text-danger" : "text-secondary"}>
      Choose another user
    </p>
  );

  //  const sameUser = keyOfReceiver === keyOfSender;
  //  const atLeastValue = firstUserData.accBalance < moneyNumber;
  //  const validData = usersSelected && sameUser && atLeastValue;
  //  console.log(usersSelected, sameUser, atLeastValue);
  //  console.log(firstUserData.accBalance);
  const usersSelected = () => {
    if (moneyValue && keyOfSender && keyOfReceiver) {
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
                placeholder={"Amount"}
                onChange={getMessageValue}
                autoFocus
              />
            </Form.Group>
          </Form>
          {displayError};
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
