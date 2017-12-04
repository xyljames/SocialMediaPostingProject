import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/layout'
import store from './stores'
import { Provider } from 'react-redux'


const app = (
	<Provider store={ store.configureStore() }>
		<div>
			<Home />
		</div>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))