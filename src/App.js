import React from 'react';
import './App.css';

import FilterBar from './containers/FilterBar.jsx';
import List from './containers/List.jsx';

function App() {
	return (
		<div className="flex flex-col overflow-x-hidden overflow-y-visible min-h-screen bg-gray-200">
			<FilterBar />
			<List />
		</div>
	);
}

export default App;
