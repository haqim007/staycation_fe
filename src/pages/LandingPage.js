import React, { Component } from 'react';

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'

import dataLP from 'json/landingPage.json'

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.refMostPicked = React.createRef();
    }
    render() {
        return (
            <>
                <Header {...this.props}/>
                <Hero refMostPicked={this.refMostPicked} data={dataLP.hero}/>
                <MostPicked refMostPicked={this.refMostPicked} data={dataLP.mostPicked}/>
                <Categories data={dataLP.categories} />
            </>
        );
    }
}

export default LandingPage;
