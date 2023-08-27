import { React } from 'react'
import { SignIntersection } from 'react-bootstrap-icons';

export function Todolist2(props) {
    return (
        <ul>
            <li id="unique">
                <i aria-hidden="true"
                    onClick={()=>{
                        props.onSelect(props.id);
                    }}
                >{<SignIntersection />}</i>{props.text}</li>
        </ul>
    )
}