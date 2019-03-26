import React from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

var fetchedQuestions = {}

class Sidebar extends React.Component {
    constructor() {
        super();
        
        (async function() {
            // Fetches questions using stored session cookie

            fetch("http://54.146.176.87/login", {
				"method" : "POST",
				"credentials" : 'include',
				headers: {
					"Accept": 'application/json',
					"Content-Type": 'application/json',
					"Access-Control-Allow-Credentials" : "true"
				}, body : JSON.stringify({
					"udata": "ab",
					"upass" : "password3"
				})
            });
            
            fetch("http://54.146.176.87/question/getQuestions", {
                  method: "GET",
                  credentials: "include",
                  headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Credentials": "true"
                  }
            })
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(async function(myJson) {
                console.log(JSON.stringify(myJson));
                fetchedQuestions = myJson;
                return myJson;
            })
            .catch(err => {
                console.log(err);
            });
        })();
    }

  render () {

    var displayQsn = async (selected) => {
        await fetchedQuestions;
        if(selected === "1")
            document.getElementById("qsn").innerHTML = await fetchedQuestions.questionData[0].qtitle + await fetchedQuestions.questionData[0].qbody;
        else if(selected === "2")
            document.getElementById("qsn").innerHTML = await fetchedQuestions.questionData[1].qtitle + await fetchedQuestions.questionData[1].qbody;
        else if(selected === "3")
            document.getElementById("qsn").innerHTML = await fetchedQuestions.questionData[2].qtitle + await fetchedQuestions.questionData[2].qbody;
    }

    return (
        <SideNav
            defaultExpanded = {false}
            onSelect={displayQsn}
            width={ 50 }
            >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home" disabled={false}>
                <NavItem eventKey="1">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Question 1
                    </NavText>
                </NavItem>
                <NavItem eventKey="2">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Question 2
                    </NavText>
                </NavItem>
                <NavItem eventKey="3">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Question 3
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
  }
}

export default Sidebar;