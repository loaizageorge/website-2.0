import React from 'react';

function SelectDropDown(props) {
    return (
        <select name={props.name} onChange={props.handleOnChange}>
            {props.options}
        </select>
    );
}

export default SelectDropDown;