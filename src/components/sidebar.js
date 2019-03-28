import React from 'react';
import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
class Sidebar extends React.Component {

    render () {
    var displayQsn = (async (selected) => {
        try {
            if(selected === "1") {
                document.getElementById("qsn").innerHTML = await this.props.questions[0].qtitle + await this.props.questions[0].qbody;
                this.props.setQid(this.props.questions[0].qid);
                document.getElementById("qsource").innerHTML = await this.props.questions[0].qsource;
                document.getElementById("hints").innerHTML = await JSON.stringify(this.props.questions[0].qhints);
            } else if(selected === "2") {
                document.getElementById("qsn").innerHTML = await this.props.questions[1].qtitle + await this.props.questions[1].qbody;
                this.props.setQid(this.props.questions[1].qid);
                document.getElementById("qsource").innerHTML = await this.props.questions[1].qsource;
                document.getElementById("hints").innerHTML = await JSON.stringify(this.props.questions[1].qhints);
            } else if(selected === "3") { 
                document.getElementById("qsn").innerHTML = await this.props.questions[2].qtitle + await this.props.questions[2].qbody;
                this.props.setQid(this.props.questions[2].qid);
                document.getElementById("qsource").innerHTML = await this.props.questions[2].qsource;
                document.getElementById("hints").innerHTML = await JSON.stringify(this.props.questions[2].qhints);
            } else if(selected === "4") {
                window.location = "/api/logout";
            } else if(selected === "5") {
                window.open("https://cicada-rules.surge.sh", "_blank");
            }
        } catch(err) {
            console.log(err.message);
            document.getElementById("qsn").innerHTML = "Dev Error : " + JSON.stringify(err.message);
        }
    });

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
                        <strong>Q1</strong>
                    </NavIcon>
                    <NavText>
                        Question 1
                    </NavText>
                </NavItem>
                <NavItem eventKey="2">
                    <NavIcon>
                        <strong>Q2</strong>
                    </NavIcon>
                    <NavText>
                        Question 2
                    </NavText>
                </NavItem>
                <NavItem eventKey="3">
                    <NavIcon>
                        <strong>Q3</strong>
                    </NavIcon>
                    <NavText>
                        Question 3
                    </NavText>
                </NavItem>
                <NavItem eventKey="4">
                    <NavIcon>
                        Logout
                    </NavIcon>
                    <NavText>
                        Logout
                    </NavText>
                </NavItem>
                <NavItem eventKey="5">
                    <NavIcon>
                        Rules
                    </NavIcon>
                    <NavText>
                        Click to View Rules
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
  }
}

export default Sidebar;