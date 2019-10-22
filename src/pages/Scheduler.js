import React, { useState, Fragment } from "react"
import _ from "lodash"
import Layout from "../components/layout"
import SEO from "../components/seo"
import importedJson from "../json/agenda.json"
import Slots from "../components/jsoner/Slots"
import NewSlot from "../components/jsoner/NewSlot"
import BaseConfig from "../components/jsoner/BaseConfig"
import { Tab, TabList, Tabs, TabPanels, TabPanel } from "../components/Tabs/Tab"

const Scheduler = () => {
  const [newRow, setNewRow] = useState(false)
  const [newIndex, setNewIndex] = useState(0)

  function handleChange(val) {
    setNewIndex(val)
  }

  const baseJson = {
    eventDarkColor: "#0a3d45",
    eventDate: 1569628800000,
    eventLogo: null,
    eventName: "Soem",
    eventSolidColor: "#52a828",
    eventSpan: 2,
    eventTracks: 4,
  }
  const fdate = new Date(baseJson.eventDate).getTime()
  const finJson = {
    slots: [
      {
        eventType: "talk",
        room: null,
        slotId: "slot-10",
        timeStart: 1565431200000,
        timeEnd: 1565433600000,
        slotFeedBack: false,
        tracks: [
          {
            trackId: "event20",
            selectedFlag: "notSelected",
            trackLength: 1,
            feedBack: false,
            title: "AWS Secrets Manager - Best Practices & Usecases",
            speakers: [
              {
                firstName: "Vijaya Nirmala",
                lastName: "Gopal",
                profilePicture: "Vijaya.jpg",
                designation:
                  "Technical Lead - Cloud DevOps Solutions Engineering, Sonata Software",
                externalLink:
                  "https://www.linkedin.com/in/vijayanirmalagopal-5a54159a/",
              },
            ],
          },
          {
            trackId: "event21",
            selectedFlag: "notSelected",
            trackLength: 1,
            feedBack: false,
            title: "Building Engaging Voice Experiences with Alexa",
            speakers: [
              {
                firstName: "Karthik",
                lastName: "Ragubathy",
                profilePicture: "Karthik.jpg",
                designation: "Solutions Architect, Alexa Skills Kit, Amazon",
                externalLink: "https://www.linkedin.com/in/pkarthikr/",
              },
            ],
          },
          {
            trackId: "event22",
            selectedFlag: "notSelected",
            trackLength: 1,
            feedBack: false,
            title: "Massive Scale at Low Cost using EC2 Spot Instances",
            speakers: [
              {
                firstName: "Chakravarthy",
                lastName: "Nagarajan",
                profilePicture: "Chakravarthy.jpg",
                designation: "Solutions Architect, AWS",
                externalLink:
                  "https://www.linkedin.com/in/chakravarthy-nagarajan-7653311a/",
              },
              {
                firstName: "Some",
                lastName: "Babu",
                profilePicture: "Mahesh.jpg",
                designation: "Useless, Airforce",
                externalLink: "https://www.linkedin.com/in/no_Link-7653311a/",
              },
            ],
          },
          {
            trackId: "event22",
            selectedFlag: "notSelected",
            trackLength: 1,
            feedBack: false,
            title: "Massive Scale at Low Cost using EC2 Spot Instances",
            speakers: [
              {
                firstName: "Chakravarthy",
                lastName: "Nagarajan",
                profilePicture: "Chakravarthy.jpg",
                designation: "Solutions Architect, AWS",
                externalLink:
                  "https://www.linkedin.com/in/chakravarthy-nagarajan-7653311a/",
              },
              {
                firstName: "Some",
                lastName: "Babu",
                profilePicture: "Mahesh.jpg",
                designation: "Useless, Airforce",
                externalLink: "https://www.linkedin.com/in/no_Link-7653311a/",
              },
            ],
          },
        ],
      },
      {
        eventType: "talk",
        room: null,
        slotId: "slot-12",
        timeStart: 1565431200000,
        timeEnd: 1565433600000,
        slotFeedBack: false,
        tracks: [
          {
            trackId: "event20",
            selectedFlag: "notSelected",
            trackLength: 1,
            feedBack: false,
            title: "AWS Secrets Manager - Best Practices & Usecases",
            speakers: [
              {
                firstName: "Vijaya Nirmala",
                lastName: "Gopal",
                profilePicture: "Vijaya.jpg",
                designation:
                  "Technical Lead - Cloud DevOps Solutions Engineering, Sonata Software",
                externalLink:
                  "https://www.linkedin.com/in/vijayanirmalagopal-5a54159a/",
              },
            ],
          },
          {
            trackId: "event21",
            selectedFlag: "notSelected",
            trackLength: 1,
            feedBack: false,
            title: "Building Engaging Voice Experiences with Alexa",
            speakers: [
              {
                firstName: "Karthik",
                lastName: "Ragubathy",
                profilePicture: "Karthik.jpg",
                designation: "Solutions Architect, Alexa Skills Kit, Amazon",
                externalLink: "https://www.linkedin.com/in/pkarthikr/",
              },
            ],
          },
          {
            trackId: "event22",
            selectedFlag: "notSelected",
            trackLength: 1,
            feedBack: false,
            title: "Massive Scale at Low Cost using EC2 Spot Instances",
            speakers: [
              {
                firstName: "Chakravarthy",
                lastName: "Nagarajan",
                profilePicture: "Chakravarthy.jpg",
                designation: "Solutions Architect, AWS",
                externalLink:
                  "https://www.linkedin.com/in/chakravarthy-nagarajan-7653311a/",
              },
              {
                firstName: "Some",
                lastName: "Babu",
                profilePicture: "Mahesh.jpg",
                designation: "Useless, Airforce",
                externalLink: "https://www.linkedin.com/in/no_Link-7653311a/",
              },
            ],
          },
        ],
      },
    ],
  }
  return (
    <Layout>
      <SEO title="Json Creator" />
      <div id="Scheduler">
        <div className="container">
          <h1 className="mini_title">Scheduler</h1>
          <Tabs className="schedTabs" activeIndex={newIndex}>
            <TabList>
              <Tab>Base Config</Tab>
              <Tab>Create Agend</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BaseConfig onClick={val => handleChange(val)} />
              </TabPanel>
              <TabPanel>
                <div className="slotList">
                  {finJson.slots.length ? (
                    finJson.slots.map((slot, i) => (
                      <Slots key={slot.slotId} slot={slot} index={i} />
                    ))
                  ) : (
                    <span>Add a Slot</span>
                  )}
                </div>
                {newRow && <NewSlot finJson={finJson} baseJson={baseJson} />}
                <div className="newSlotTrig">
                  <button onClick={() => setNewRow(!newRow)}>Add Slot+</button>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}

export default Scheduler
