import { useSelector } from 'react-redux'

export default function ScoreBoard(props) {
    const game = useSelector((state) => state.game)
    const { top } = game

    console.log(top)

    const list = top.map((value) => {
    
        return <li className=''>{value}</li>
    })

    return (
        <div className="top10">
            <div className="mb-5"> TOP 10</div>
            <div>
                <ol className="top-ol list-group">{list}</ol>
            </div>
        </div>
    )
}