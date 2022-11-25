import { useSelector } from 'react-redux'

export default function ScoreBoard(props) {
    const game = useSelector((state) => state.game)
    const { score } = game

    return (
        <div className="score-board">
            <div>Score:{ score }</div>
            <div> TOP 10</div>
        </div>
    )
}