import React, {Component} from 'react'

class ErrorBoundry extends Component {
	constructor() {
		super()
		this.state = {
			hasError: false
		}
	}
	ComponentDidCatch() {
		this.setState ({hasError: true})
	}
	
	render() {
		if (this.state.hasError) {
			return <h3>`You Fucking Donkey, something's wrong`</h3>
		} else {
			return this.props.children
		}
	}
}