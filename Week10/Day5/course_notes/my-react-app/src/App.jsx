// src/App.js
import React from 'react';
import PostsList from './PostsList';
import './App.css'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Posts</h1>
            </header>
            <PostsList />
        </div>
    );
}

export default App;
