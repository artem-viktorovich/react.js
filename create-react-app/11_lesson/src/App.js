//import React from 'react' ;
import './App.css';
import Content from './Content';
import Header from './Header';
import Navigation from './Navigation';

const App = () => {
  return (
	<div className='app-wrapper'> 
		<Header />
		<Navigation/>
		<Content/>
	</div>
  );
}

export default App;
