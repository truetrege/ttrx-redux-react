import { useSelector, useDispatch } from 'react-redux'
import { changeRandom, changeTheme } from '../actions'
import { settings } from '../actions'
import { themes } from '../utils'

export default function Level(props) {
    const game = useSelector((state) => state.game)
    const { randomMode } = game
    const dispatch = useDispatch()
    const levels =[
        'default',
        'bag',
        'tgm3'
    ]; 

    const list = levels.map((element,ind) => {
        const key = ind;
        const name = element;
        const value = ind;
        

        // let selected = false;
        // if(theme == ind){
        //     selected = true;

        // }
        return <option className=''  value ={value} key={key} >{name}</option>
    })

    return (
        <select className='form-select custom-select'
        value={randomMode}
        onChange={(e)=>{
            dispatch(changeRandom(e.target.value));
            dispatch(settings(false))
            // console.log(e.target.value)
        }
        }
        >
            {list}
        </select>
    )
}