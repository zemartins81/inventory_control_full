import React from 'react'

export default function Filter(props) {


    const {filter} = props;

    const handleInputChange = (event) => {
        const newText = event.target.value;
        props.onChangeFilter(newText);
      };

    return (
        <div>
            <input
                placeholder="Filtro"
                type="text"
                value={filter}
                onChange={handleInputChange}
            />{' '}
        </div>
    )
}
