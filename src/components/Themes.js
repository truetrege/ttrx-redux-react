import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../actions'
import { themes } from '../utils'

export default function Themes(props) {
    const game = useSelector((state) => state.game)
    const { theme } = game
    const dispatch = useDispatch()


    const list = themes.map((element,ind) => {
        const key = ind;
        const name = element.name;
        const value = ind;
        let selected = false;

        if(theme == ind){
            const selected = true;

        }
        return <option className='' value ={value} key={key} >{name}</option>
    })

    return (
        <select className=''
        onChange={(e)=>{
            dispatch(changeTheme(e.target.value));
            // console.log(e.target.value)
        }
        }
        >
            {list}
        </select>
    )
}