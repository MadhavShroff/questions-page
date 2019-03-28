import React, { Component } from 'react';
import './App.css';
import Parent from "./parent.js";

class App extends Component {

	constructor() {
		super();
		this.state = {
			questions: "Null",
		}
	}

	componentDidMount() {
		var getData = (async () => {
			var x;
			var y;
			await fetch("/api/question/getQuestions", {
				method: "GET",
				credentials: "include",
				headers: {
				Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": "true"
				}
			})
			.then( (response) => {
				return response.json();
			})
			.then( (myJson) => {
				console.log(myJson);
				x = myJson.questionData;
				return myJson;
			})
			.catch(err => {
				console.log(err);
			});

			await fetch("/api/rank", {
				method: "GET",
				credentials: "include",
				headers: {
				Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": "true"
				}
			})
			.then( (response) => {
				return response.json();
			})
			.then( (myJson) => {
				console.log(myJson);
				y = myJson;
				return myJson;
			})
			.catch(err => {
				console.log(err);
			});
			return {x: x, y: y}
		});

		getData().then((res) => {
			this.setState({
				questions: res.x,
				userData: res.y
			})
		})
	}

	render() {
		return (
			<Parent questions={this.state.questions} userDetails={this.state.userData}/>
		);
	}
}

export default App;


// import React, { Component } from 'react';
// import './App.css';
// import Parent from "./parent.js";

// class App extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			questions : "Null",
// 			rank: 0
// 		}

// 		// // LOGIN
// 		// // REMOVE IN PRODUCTION
// 		// fetch("https://cicada.iecsemanipal.com/lolmylifesucks/api/login", {
// 		// 	method: "POST",
// 		// 	credentials: "include",
// 		// 	headers: {
// 		// 	Accept: "application/json",
// 		// 		"Content-Type": "application/json",
// 		// 		"Access-Control-Allow-Credentials": "true"
// 		// 	}, body: JSON.stringify({
// 		// 		"udata" : "Magician",
// 		// 		"upass" : "password"
// 		// 	})
// 		// })
// 		// .then( (response) => {
// 		// 	return response.json();
// 		// })
// 		// .then( (myJson) => {
// 		// 	console.log(myJson);
// 		// 	return myJson;
// 		// })
// 		// .catch(err => {
// 		// 	console.log(err);
// 		// });
// 		// Fetch Questions
// 	// }
// 	// componentDidMount(){
// 		fetch("https://cicada.iecsemanipal.com/api/question/getQuestions", {
// 				method: "GET",
// 				credentials: "include",
// 				headers: {
// 				Accept: "application/json",
// 					"Content-Type": "application/json",
// 					"Access-Control-Allow-Credentials": "true"
// 				}
// 			})
// 			.then( (response) => {
// 				console.log(response);
// 				return response.json();
// 			})
// 			.then( (myJson) => {
// 				console.log(myJson);
// 				this.setState({
// 					questions: myJson.questionData
// 				})
// 				return myJson;
// 			})
// 			.catch(err => {
// 				console.log(err);
// 		});

// 		fetch("https://cicada.iecsemanipal.com/api/rank", {
// 			method: "GET",
// 			credentials: "include",
// 			headers: {
// 			Accept: "application/json",
// 				"Content-Type": "application/json",
// 				"Access-Control-Allow-Credentials": "true"
// 			}
// 		})
// 		.then( (response) => {
// 			console.log(response);
// 			return response.json();
// 		})
// 		.then( (myJson) => {
// 			console.log(myJson);
// 			this.setState({
// 				rank: myJson
// 			}, () => {
// 				this.render();
// 			})
// 			console.log(this.state.rank);
// 			return myJson;
// 		}).catch((err) => {
// 			console.log(err);
// 		});
// 	}
	
	
// 	render() {
// 		// console.log(JSON.stringify(this.state.rank) + " line 89");
// 		// console.log(JSON.stringify(this.state.questions) + " line 90");
// 		return (
// 		<div>
// 			<Parent questions={this.state.questions} userDetails={this.state.rank}/>
// 		</div>
// 		);
// 	}
// }

// export default App;
