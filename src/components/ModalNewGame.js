
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { restart,newGame } from '../actions'


export default function ModalNewGame(props) {

  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
    let { newGameModal } = game
   
    let [show, setShow] = useState(false);

    const handleClose = () => dispatch(restart());
    const handleShow = () => dispatch(newGame(false));

    return (
      <>
    
    <Modal show={newGameModal}  {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
      onHide={handleClose}>
            
          <Modal.Body>
            <div>
              начать игру заново?
            </div>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              да
            </Button> <Button variant="secondary" onClick={handleShow}>
              нет
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
}