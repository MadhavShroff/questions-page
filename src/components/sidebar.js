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
            } else if(selected === "2") {
                document.getElementById("qsn").innerHTML = await this.props.questions[1].qtitle + await this.props.questions[1].qbody;
                this.props.setQid(this.props.questions[1].qid);
            } else if(selected === "3") { 
                document.getElementById("qsn").innerHTML = await this.props.questions[2].qtitle + await this.props.questions[2].qbody;
                this.props.setQid(this.props.questions[2].qid);
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