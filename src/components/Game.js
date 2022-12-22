import React from 'react'
import GridBoard from './GridBoard'
import NextBlock from './NextBlock'
import ScoreBoard from './ScoreBoard'
import ModalGameOver from './ModalGameOver'
import ModalNewGame from './ModalNewGame'
import ModalSettings from './ModalSettings'
import MobileHeader from './MobileHeader'
import { useSelector, useDispatch } from 'react-redux'
import { restart ,back, newGame, settings } from '../actions'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'



export default function Game(props) {

    const game = useSelector((state) => state.game)
    const { score } = game
    const dispatch = useDispatch()
    const windowInnerWidth = window.innerWidth
    const windowInnerHeight = window.innerHeight

    let header = <MobileHeader />;
    let left = <LeftContainer />;
    let right = <RightContainer />;

    let classes = 'game-container'


    if(windowInnerWidth >576){
        header = <></>
    }else{
        left = <></>
        right = <></>
        classes += " container justify-content-center"
    }


    return (
        <>
       
        { header }
        <div className={classes}>
          { left }
          <div>
                <GridBoard />
          </div>
          { right }
        </div>
        <ModalGameOver />
        <ModalNewGame />
        <ModalSettings  />
        </>

    )
}