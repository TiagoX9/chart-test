import React from 'react';

// get the months from json
const months = require('./data/months.json');

// Created this component to allow manipulation of the value ref
const Option = (props) => {
    return (<option value={props.value}>{props.name}</option>)

}

const Dropdown = (props) => {
    return (
        <select onChange={(e) => props.handleChange(e.target.value)} defaultValue="1">
            {months.map((item) =>
                (
                    <Option key={item.id} value={`${props.year}-${item.id}`} name={item.name}></Option>
                )
            )}
        </select>
    )
}

export default Dropdown;