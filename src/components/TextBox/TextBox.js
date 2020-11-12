import React from 'react';
import './TextBox.css'
import PropTypes from 'prop-types';

const TextBox = ({backgroundColor, name, title, size, id, maxLength, minLength, placeholder, type, onChange, min, max, wrapID, ...props}) => {
return (
    <div className="textbox" id={wrapID}>
        <label htmlFor={id}>{title}</label>
        <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        id= {id}
        maxLength = {maxLength}
        minLength = {minLength}
        size={size}
        type={type}
        min={min}
        max={max}
        />
    </div>
);
};

TextBox.propTypes = {
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.number,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'number', 'date']),
    min: PropTypes.number,
    max: PropTypes.number,
    wrapID: PropTypes.string
};

TextBox.defaultProps = {
    backgroundColor: null,
    size: 20,
    maxLength: 30,
    minLength: 0,
    placeholder: '',
    type: "text"
};

/* Example Use

<TextBox 
    title="First Name" 
    placeholder="Enter your firstname" 
    minLength="5" 
    maxLength="30" 
    id="input1" 
    type="text" 
/>

*/

export default TextBox;
