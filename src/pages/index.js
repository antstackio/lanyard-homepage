import React from "react"

import "../css/main.css"
import "../scss/main.scss"

import Layout from "../components/layout"
import MainSection from "../components/MainSection"
import Features from "../components/Features"
import Screens from "../components/Screens"
import Clients from "../components/Clients"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <Features />
    <Screens />
    <Clients />
    <Footer />
  </Layout>
)

export default IndexPage
