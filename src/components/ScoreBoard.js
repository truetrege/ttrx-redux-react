import { useSelector } from 'react-redux'
import Top from './Top'

export default function ScoreBoard(props) {
    const game = useSelector((state) => state.game)
    const { score } = game

    return (
        <>
        <div className="score-board">
            <div>Счет:</div>
            <div>
            { score }
            </div>
        </div>
            <Top key='top2x' />
        </>
        
    )
}