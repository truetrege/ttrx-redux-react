import React from 'react'
import GridBoard from './GridBoard'

import ModalGameOver from './ModalGameOver'
import ModalNewGame from './ModalNewGame'
import ModalSettings from './ModalSettings'
import MobileHeader from './MobileHeader'
import { useSelector, useDispatch } from 'react-redux'

import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'




export default function Game(props) {
    window.history.pushState('forward', null, '#game');
    window.onpopstate = function(event) {    
        if(event && event.state) {
            window.location.reload(); 
        }
    }

  
    
    const game = useSelector((state) => state.game)
    const { score } = game
    const dispatch = useDispatch();
   

    // window.addEventListener('resize', () => {
    //     dispatch(resize());
    // });
    // const windowInnerWidth = game.size.width
    // const windowInnerHeight = game.size.height  
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