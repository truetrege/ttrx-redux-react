
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { restart,settings } from '../actions'


export default function ModalSettings(props) {

  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
    let { menuModal } = game
   
    let [show, setShow] = useState(false);

    const handleClose = () => dispatch(restart());
    const handleShow = () => dispatch(settings(false));

    return (
      <>
    
    <Modal show={menuModal}  {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
      onHide={handleClose}>
            <div className="modal-header justify-content-center">
                <div className="modal-title  h4">
                    Настройки
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}></button>

            </div>
          <Modal.Body>
            <div>ds,jh ntvs</div>
            
          </Modal.Body>
          <Modal.Footer>
        
          </Modal.Footer>
        </Modal>
      </>
    );
}