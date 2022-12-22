import { useSelector } from 'react-redux'

export default function Top(props) {
    const game = useSelector((state) => state.game)
    const { top } = game

    // console.log(top)

    const list = top.map((value,ind) => {
        const key = value*ind;
        return <li className='list-group-item' key={key}>{ind+1}. {value}</li>
    })

    return (
        <div className="top10 mt-2">
            <div className="mb-1 text-center"> TOP 10</div>
            <div>
                <ol className="top-ol list-group">{list}</ol>
            </div>
        </div>
    )
}