import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Success 🎉</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Successfully Sent 👍</h4>
        <p>This operation has been added to transactions history.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;