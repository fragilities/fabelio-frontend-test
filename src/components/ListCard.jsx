import React from 'react';

export default function ListCard(props) {
    return <pre>{JSON.stringify(props, null, 4)}</pre>;
}
