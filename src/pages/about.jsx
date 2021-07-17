import React from 'react'
import Layout from '../components/Layout'
import CardV2 from '../components/CardV2'
import Seo from "../components/seo"

const About = () => {
    const text = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';

    return (
        <Layout>
            <Seo title="About" lang="uk"/>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-4">
                        <h1>Page About</h1>
                        <p>{ text }</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <CardV2 nameImage="foto01" titleCard="Card Title 01" textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit." colorButton="gatsby" backgroundCard="#e3a617" styleDefault={ true }/>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <CardV2 nameImage="foto02" titleCard="Card Title 02" textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit." colorButton="warning" backgroundCard="" styleDefault={ false }/>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <CardV2 nameImage="foto03" titleCard="Card Title 03" textCard="Lorem ipsum dolor sit amet consectetur adipisicing elit." colorButton="gatsby" backgroundCard="#e3a617" styleDefault={ true }/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About