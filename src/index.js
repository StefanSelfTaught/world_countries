import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#202C37' : '#FAFAFA'};
  color: ${props => props.theme.mode === 'dark' ? '#ffffff' : 'black'};
}
nav, .country-card, input {
	background-color: ${props => props.theme.mode === 'dark' ? '#31404E' : '#ffffff '} !important;
	box-shadow: ${props => props.theme.mode === 'dark' ? 
		'0rem 0rem 1rem .2rem 	hsl(209, 23%, 20%)' : 
		'0rem 0rem 1rem .5rem hsl(0, 0%, 95%)'} !important;
	color: ${props => props.theme.mode === 'dark' ? '#ffffff' : 'black'} !important;
}
`
const app = (
	<Router basename="/countries">
		<ThemeProvider theme={{ mode: 'light' }}>
		<>
		<GlobalStyle />
			<App />
		</>
		</ThemeProvider>
	</Router>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
