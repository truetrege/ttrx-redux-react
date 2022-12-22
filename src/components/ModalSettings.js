
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { restart,settings,newGame,back } from '../actions'
import Top from './Top';
import Themes from './Themes';


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
    data-modal-color="blue"
      size="fullscreen"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
      onHide={handleClose}>
            <div className="modal-header justify-content-center">
                <div className="modal-title  h4">
                    Меню
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleShow}></button>

            </div>
            <div className="modal-body d-flex flex-column justify-content-between">
           
            <div className='mobile-menu d-flex flex-column'>
                <button className="btn btn-success " onClick={(e) => {dispatch(newGame());}}>новая игра </button>
                <button className="btn btn-success mt-3" onClick={(e) => {dispatch(back());dispatch(settings(false));}}>назад</button>
    
              <Top key='213' />
            </div>
            <div>
              <div className="text-center">смена темы</div>
              <Themes />
            </div>
           
            
            
          </div>
          <Modal.Footer>
        
          </Modal.Footer>
        </Modal>
      </>
    );
}