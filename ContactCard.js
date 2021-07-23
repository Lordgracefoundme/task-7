import React from 'react'

export default function Report(props) {

        const users1 = props.message[0];
        const users2 = props.message[1];
       console.log(users1);
    return (
        <div>
            <h1>{users1.name}</h1>
            <img src={users1.avatar}/>
        </div>
    )
}
