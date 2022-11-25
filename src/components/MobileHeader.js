import { useSelector, useDispatch } from 'react-redux'
import { restart ,back, newGame, settings } from '../actions'
import NextBlock from './NextBlock'


export default function MobileHeader(props) {
    const game = useSelector((state) => state.game)
    const { top } = game
    const { score } = game
    const dispatch = useDispatch()


    const list = top.map((value) => {
    
        return <li className=''>{value}</li>
    })

    return (
        <header className="App-header">
                <div className='d-flex next-block-header'>
                    <NextBlock shape="nextShape1" />
                    <NextBlock shape="nextShape2" />
                </div>
                <div>{score}</div>
                <div><button className="btn btn-success" onClick={(e) => {
                        dispatch(settings());
                    }}>меню</button></div>
        </header>
    )
}