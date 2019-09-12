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

const IndexPage = () => {
  const refMainSection = React.createRef()
  const refFeatures = React.createRef()
  const refScreens = React.createRef()
  const refClients = React.createRef()
  const refFooter = React.createRef()

  function scroller(refstr) {
    if (refstr === "refMainSection") {
      refMainSection.current.scrollIntoView({
        offsetTop: -100,
        behavior: "smooth",
      })
    }
    if (refstr === "refFeatures") {
      refFeatures.current.scrollIntoView({
        offsetTop: -100,
        behavior: "smooth",
      })
    }
    if (refstr === "refScreens") {
      refScreens.current.scrollIntoView({
        offsetTop: -100,
        behavior: "smooth",
      })
    }
    if (refstr === "refClients") {
      refClients.current.scrollIntoView({ offsetTop: -100, behavior: "smooth" })
    }
    if (refstr === "refFooter") {
      refFooter.current.scrollIntoView({ offsetTop: -100, behavior: "smooth" })
    }
  }
  return (
    <Layout clickScroll={refstr => scroller(refstr)}>
      <SEO title="Home" />
      <div ref={refMainSection}>
        <MainSection />
      </div>
      <div ref={refFeatures}>
        <Features />
      </div>
      <div ref={refScreens}>
        <Screens />
      </div>
      <div ref={refClients}>
        <Clients />
      </div>
      <div ref={refFooter}>
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
