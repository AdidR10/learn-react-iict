//keyboard shortcut: rfce


import { TextField } from '@mui/material';
import React from 'react';

function func() {
    return "My name is ";
}

function FirstComponent() {
    // const name = "adid rahman";
    // console.log(props.sd.id);
    // const asd = props.aSD;
    // const asdd = props.aSDD;
    // return (
    //     <div>
    //         {func()}
    //         {name}
    //         My roll is {props.info}
    //         My father's name is {props.fname}
    //         {props.fruits}
    //         {props.test}
    //         {props.sd.id}
    //         {asd.map((stu) => (<p>{stu}</p>))}
    //         {asdd.map((stu) => (<p>{stu.name}</p>))}
    //     </div>
    // )
    // const callFunction = () => {
    //     console.log('function called');
    // };
    const [textvalue, setTextValue] = React.useState('aa');
    const callFunction = (e) => {
        // setTextValue("  asdas");
        setTextValue(e.target.value);
        console.log('adid');
    };
    return (
        <div>
            <TextField
                label="name"
                type="text"
                variant="outlined"
                value={textvalue}
                onChange={callFunction}
            />

        </div>
    )
}

export default FirstComponent


//HW:
// use 10 components to make anything