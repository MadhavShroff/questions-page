import React, { Component } from 'react';
import './App.css';
import Parent from "./parent.js";

class App extends Component {
	constructor() {
		super()
		this.state = {
			questions : "Null"
		}

		// // LOGIN
		// // REMOVE IN PRODUCTION
		// fetch("https://cicada.iecsemanipal.com/lolmylifesucks/api/login", {
		// 	method: "POST",
		// 	credentials: "include",
		// 	headers: {
		// 	Accept: "application/json",
		// 		"Content-Type": "application/json",
		// 		"Access-Control-Allow-Credentials": "true"
		// 	}, body: JSON.stringify({
		// 		"udata" : "Magician",
		// 		"upass" : "password"
		// 	})
		// })
		// .then( (response) => {
		// 	return response.json();
		// })
		// .then( (myJson) => {
		// 	console.log(myJson);
		// 	return myJson;
		// })
		// .catch(err => {
		// 	console.log(err);
		// });
		// Fetch Questions

		fetch("/api/question/getQuestions", {
			method: "GET",
			credentials: "include",
			headers: {
			Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": "true",
				"Access-Control-Allow-Origin" : "http"
			}
		})
		.then( (response) => {
			console.log(response);
			return response.json();
		})
		.then( (myJson) => {
			console.log(myJson);
			this.setState({
				questions: myJson.questionData
			})
			return myJson;
		})
		.catch(err => {
			console.log(err);
		});

		fetch("/api/rank", {
			method: "GET",
			credentials: "include",
			headers: {
			Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": "true"
			}
		})
		.then( (response) => {
			console.log(response);
			return response.json();
		})
		.then( (myJson) => {
			console.log(myJson);
			this.setState({
				rank: myJson
			})
			return myJson;
		})
		.catch(err => {
			console.log(err);
		});
	}
	
	render() {
		return (
		<div>
			<Parent questions={this.state.questions} userDetails={this.state.rank}/>
		</div>
		);
	}
}

export default App;
