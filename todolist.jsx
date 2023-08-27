import { React } from 'react';
import './praacticepro.css'
import { useState } from 'react';
import { Todolist2 } from './todolist2';

export function Todo() {
  const [inputvalue, setinputvalue] = useState('');
  const [item, setitem] = useState([])
  function change(e) {
    setinputvalue(e.target.value)
  }
  function listofitem() {
    setitem((olditeams) => {
      return [...olditeams, inputvalue];
    }
    );
    setinputvalue('')
  }
  function deleteitems(id) {
    console.log('item delted')
    setitem((olditeams) => {
      return olditeams.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="container fluid">
      <div id='main' className="container">
        <h3>To do list</h3>
        <div className="input">
          <input type="text" onChange={change} placeholder="add items"
            value={inputvalue}
            name="search" id="one" />
          <button onClick={listofitem}>+</button>
          {/*<li>inputvalue</li>*/}

          {
            item.map((itemvalue, index) => {
              return (
                <>
                    <Todolist2  key={index}
                      id={index}
                      text={itemvalue}
                      onSelect={deleteitems}
                    />
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}