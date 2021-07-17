import * as React from "react"

import Layout from "../components/Layout"
import Carousel from 'react-bootstrap/Carousel'
import Images from '../components/Images'
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome!!!"/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 px-0">
        <Carousel fade>
          <Carousel.Item>
            <Images name="foto01"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Images name="foto02"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Images name="foto03"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 py-4">
          <h1>Home</h1>
          <p>Welcome to your new Gatsby site.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
