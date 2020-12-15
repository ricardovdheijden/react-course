import React from 'react';

type NameDisplay = {
  name: string
}

const NameDisplay = (props: NameDisplay) => {
    const {name} = props

    return (
        <div>{name}</div>
    );
};

export default NameDisplay;
