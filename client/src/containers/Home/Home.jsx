import React, { Component } from 'react';
import NavBar from "../../components/Navbar/Navbar"
import Card from "../../components/Card/Card"

class Home extends Component {
    render() {
        return (
            <div>
            <NavBar />
            <Card />
            </div>
        );
    }
}

export default Home;