import React    from 'react';

const OptionsComp = (props) => {
    const {value, label} = props;

    return (
        <option value={value}>{label}</option>
    );
};

export default OptionsComp;