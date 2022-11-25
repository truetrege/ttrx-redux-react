import { useSelector } from 'react-redux'

export default function ScoreBoard(props) {
    const game = useSelector((state) => state.game)
    const { top } = game

    console.log(top)

    const list = top.map((value) => {
    
        return <li>{value}</li>
    })

    return (
        <div className="top10">
            <div> TOP 10</div>
            <ol>{list}</ol>
        </div>
    )
}