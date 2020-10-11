import React, { Component } from 'react';

import Header from 'parts/Header'
import Hero from 'parts/Hero'

import dataLP from 'json/landingPage.json'

class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}/>
                <Hero data={dataLP.hero}/>
            </>
        );
    }
}

export default LandingPage;
