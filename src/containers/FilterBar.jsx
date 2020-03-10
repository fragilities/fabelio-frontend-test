import React from 'react';
import SearchInput from '../atoms/SearchInput.jsx';
import FilterInput from '../atoms/FilterInput.jsx';

export default function FilterBar(props) {
    return (
        <div className="flex flex-col bg-blue-500 px-12 py-6">
            <div className="flex items-center pb-6">
                <SearchInput />
            </div>
            <div className="flex items-center justify-between">
                <FilterInput />
                <FilterInput />
            </div>
        </div>
    );
}
