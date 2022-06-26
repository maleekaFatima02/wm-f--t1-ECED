import { useSelector, useDispatch } from 'react-redux';
import { incrementCount } from '../store/action';
import "./../styling/Card.css"

export default function Card() {
    const count = useSelector((state) => state.count.count);
    const dispatch = useDispatch();

    const divClick = () => {
        console.log("count" , count)
        dispatch(incrementCount(count+1));
    };

return(
    <box>
    <div className="clickable"onClick={() => divClick()}>
    <p className="text">The challenge is to write clean concise CSS.</p>
    <div className="count">
    <p>{count}</p>
    </div>
    <div className="dot-holder">
    <div className="dot"></div>
    </div>
    </div>

    </box>
)
}