import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import './shared/theme.scss'

export default class App extends Component {
	render() {
		return (
			<div className='app'>
				<BrowserRouter>
					<Switch>
						<Route path='/' exact component={Home}/>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}
