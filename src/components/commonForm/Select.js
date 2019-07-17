import React from 'react';

const Select = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <div className="form-group">
            <select className={formControl} {...props}>
              {props.options.map(option => (
                <option value={option.value}>
                  {option.displayValue}
                </option>
              ))}
            </select>
        </div>
    );
}

export default Select;