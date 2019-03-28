import React, { Component } from 'react';
import Sidebar from "./components/sidebar.js";
import SubmitButton from "./components/submitButton.js";
import TextField from '@material-ui/core/TextField';

class Parent extends Component {
    constructor() {
        super();
        this.state = {
		  questions: "null",
		  ans: "",
		  qid: -1
		};
    }

    render(props) {
        return (
				<div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
					<div className="sidebar">
						<Sidebar questions={this.props.questions} setQid={(QID) => {
							this.setState({
								qid: QID
							});
						}}/>
					<meta id="qsource"></meta>
					<meta id=""></meta>
					</div>
					<meta id=""></meta>
					<div id="qanda">
						<div className="question" id="qsn">
							<h3>Select a Question...</h3>
						</div>
						<div className="answer" id="ans">
						<TextField id="answer" label="Answer" multiline rows="4" variant="outlined" onChange={(e) => {
							this.setState({
								ans: e.target.value
							})
						}}/>
							<div className="submit-button" id="submit">
								<SubmitButton text="Submit Answer" submit={() => {
									fetch("localhost:4000/api/question/checkAnswer", {
										method: "POST",
										credentials: "include",
										headers: {
										Accept: "application/json",
											"Content-Type": "application/json",
											"Access-Control-Allow-Credentials": "true"
										}, body: JSON.stringify({
											"qid" : this.state.qid,
											"ans" : this.state.ans
										})
									})
									.then( (response) => {
										console.log(response);
										return response.json();
									})
									.then( (myJson) => {
										console.log(myJson);
										if(myJson.msg === "correct answer") {
											document.getElementById("answer-string").innerHTML = "Correct Answer!";
											setTimeout(() => { 
												window.location.reload();
											}, 3000);
										}
										else 
											document.getElementById("answer-string").innerHTML = "Wrong Answer";
										return myJson;
									})
									.catch(err => {
										console.log(err);
									});
								}}/>
							</div>
							<p id="answer-string"></p>
							<p id="userData">
								<h2>Stats</h2>
								<p>Username: {this.props.userDetails.rank.uname}</p>
								<p>Rank: {this.props.userDetails.rank.rank}</p>
								<p>Easy Solved: {this.props.userDetails.rank.ueasy}</p>
								<p>Medium Solved: {this.props.userDetails.rank.umedium}</p>
								<p>Hard Solved: {this.props.userDetails.rank.uhard}</p>
							</p>
						</div>
					</div>
				</div>
        );
    }
}

export default Parent;