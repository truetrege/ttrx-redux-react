
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { restart } from '../actions'


export default function ModalGameOver(props) {

  const dispatch = useDispatch()
  const game = useSelector((state) => state.game)
    let { grid,gameOver,score } = game
    // gameOver = !gameOver
    // const gameOver = useSelector((state) => !state.game.gameOver)
    let classes='' 
    
    let [show, setShow] = useState(false);

    const handleClose = () => dispatch(restart());
    const handleShow = () => setShow(true);

    // if(!gameOver){
    //     classes='d-none' 
    //     setShow(true)
 
    //  }
    // show = !gameOver
    console.log()
  
    return (
      <>
    
    <Modal show={gameOver}  {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
      onHide={handleClose}>
            <div className="modal-header justify-content-center">
                <div className="modal-title  h4">
                    Игра окончена
                </div>
                
            </div>
          <Modal.Body>
            <div>Вы набрали</div>
            <div>{score}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              заново
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
}