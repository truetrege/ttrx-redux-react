import { useSelector, useDispatch } from 'react-redux'
import { restart ,back, newGame, settings } from '../actions'
import NextBlock from './NextBlock'


export default function LeftContainer(props) {
    const game = useSelector((state) => state.game)
    const { top } = game
    const { score } = game
    const dispatch = useDispatch()


    const list = top.map((value) => {
    
        return <li className=''>{value}</li>
    })

    return (
    <div className='left-container d-flex flex-column justify-content-space-between'>
        <div>
            <button className="btn btn-success" onClick={(e) => {dispatch(newGame());}}>новая игра </button>
            <button className="btn btn-success" onClick={(e) => {dispatch(back());}}>назад</button>
        </div>
        <div>
            <NextBlock shape="nextShape1" />
            <NextBlock shape="nextShape2" />
        </div>
        <div>
            <button className="btn btn-success" onClick={(e) => {
                    dispatch(settings());
                }}>меню</button>
        </div>
      </div>
    )
}