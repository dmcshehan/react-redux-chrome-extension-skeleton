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
				<p>app</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		favLinks: state.link.favLinks,
	};
};

export default connect(mapStateToProps)(App);
