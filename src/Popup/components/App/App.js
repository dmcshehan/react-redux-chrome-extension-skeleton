import React, { Component } from 'react';
import classNames from './App.module.scss';
import { connect } from 'react-redux';

class App extends Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return (
			<div className={classNames.app}>
				<p>Wow</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		name: 'Shehan',
	};
};

export default connect(mapStateToProps)(App);
