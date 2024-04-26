import React from 'react';

const Checkbox = ({checked,onChange,label}) => {
    return (
        <div>
            <input type="text"
            className='form-check-input'
            checked={checked} 
            onChange={(e)=> onChange(e.target.checked)}
            />
       
        <label className='form-check-label'>{label}</label>
        </div>
    );
};

export default Checkbox;