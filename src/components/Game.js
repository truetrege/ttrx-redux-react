import React from 'react'
import GridBoard from './GridBoard'
import NextBlock from './NextBlock'
import ScoreBoard from './ScoreBoard'
import ModalGameOver from './ModalGameOver'
import ModalNewGame from './ModalNewGame'
import ModalSettings from './ModalSettings'
import { useSelector, useDispatch } from 'react-redux'
import { restart ,back, newGame, settings } from '../actions'



export default function Game(props) {


    const dispatch = useDispatch()

    return (
        <>        
        <div className="game-container">
          <div className='left-container d-flex flex-column justify-content-space-between'>
            <div>
                <button className="btn btn-success" onClick={(e) => {dispatch(newGame());}}>новая игра </button>
                <button className="btn btn-success" onClick={(e) => {dispatch(back());}}>назад</button>
            </div>
            <div>
                <NextBlock shape="nextShape1" />
                <NextBlock shape="nextShape2" />
            </div>
            <div>
                <button className="btn btn-success" onClick={(e) => {
                        dispatch(settings());
                    }}>меню</button>
            </div>
          </div>
          <div>
                <GridBoard />
          </div>
          <div class="right-container d-flex flex-column justify-content-space-between">
                <ScoreBoard />  
          </div>
        </div>
        <ModalGameOver />
        <ModalNewGame />
        <ModalSettings />
        </>

    )
}