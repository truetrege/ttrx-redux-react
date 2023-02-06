import { useSelector, useDispatch } from 'react-redux'
import { restart, back, newGame, settings } from '../actions'
import NextBlock from './NextBlock'


export default function MobileHeader(props) {
    const game = useSelector((state) => state.game)
    const { score } = game
    const dispatch = useDispatch()




    return (
        <header className="container-fluid p-0 m-0">
            <div className="App-header">
                <div className='d-flex next-block-header'>
                    <NextBlock shape="nextShape1" />
                    <NextBlock shape="nextShape2" />
                </div>

                <div><button className="btn btn-success" onClick={(e) => {
                    dispatch(settings());
                }}>меню</button></div>

            </div>
            <div className="d-flex justify-content-center score-container">
                <div className="rounded-bottom text-white px-2">{score}</div>

            </div>
        </header>

    )
}