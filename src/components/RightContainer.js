import { useSelector, useDispatch } from 'react-redux'
import { restart ,back, newGame, settings } from '../actions'
import ScoreBoard from './ScoreBoard'


export default function RightContainer(props) {
    const game = useSelector((state) => state.game)
    const { top } = game
    const { score } = game
    const dispatch = useDispatch()


    const list = top.map((value) => {
    
        return <li className=''>{value}</li>
    })

    return (
        <div className="right-container d-flex flex-column justify-content-space-between">
                <ScoreBoard />  
          </div>
    )
}