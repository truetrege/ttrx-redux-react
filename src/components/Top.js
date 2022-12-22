import { useSelector } from 'react-redux'

export default function Top(props) {
    const game = useSelector((state) => state.game)
    const { top } = game



    const list = top.map((value,ind) => {
    const key = props.pp+'top'+value*ind+1;
        return <li className='list-group-item' key={ind}>{ind+1}. {value}</li>
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