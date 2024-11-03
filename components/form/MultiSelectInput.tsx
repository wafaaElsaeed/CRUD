import React from 'react';
import Select from 'react-select'

export default function MultiSelectInput({ label, placeholder, name, options, setValue, trigger, error, value }) {

    function onChangeHandler(e) {
        const selectedOptions = [];
        e?.map((option) => {
            selectedOptions.push(option?.value)
        })
        setValue(name, selectedOptions);
        trigger(name)
    }

    return (
        <div>
            <label className='text-xs font-medium capitalize mb-2' htmlFor={name}>{label}</label>
            <Select
                isMulti
                onChange={onChangeHandler}
                name={name}
                options={options}
                placeholder={placeholder}
                value={value}
                styles={{
                    control: (base) => ({
                        ...base,
                        // This line disable the blue border
                        boxShadow: "none"
                    })
                }}
                classNamePrefix="customMultiSelect"
            />
            <span className='text-sm text-red-500'>{error}</span>
        </div>
    )
}
