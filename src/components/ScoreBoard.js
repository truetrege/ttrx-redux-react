import { useSelector } from 'react-redux'

export default function ScoreBoard(props) {
    const game = useSelector((state) => state.game)
    const { score } = game

    return (
        <div className="score-board">
            <div>Score:{ score }</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {
            }}>Play</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}