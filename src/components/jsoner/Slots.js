import React, { useState, Fragment } from "react"
import _ from "lodash"
import {
  CollapsablePanel,
  CollapsablePanelHeader,
  CollapsablePanelBody,
} from "../Accordions/Accordion"
import { Tab, TabList, Tabs, TabPanels, TabPanel } from "../Tabs/Tab"

const Slots = ({ slot, index }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="slot">
      <CollapsablePanel>
        <CollapsablePanelHeader>
          <span>Slot - {index + 1}</span>
        </CollapsablePanelHeader>
        <CollapsablePanelBody>
          {Object.keys(slot).map(slotField => (
            <Fragment>
              {slot[slotField] && !Array.isArray(slot[slotField]) && (
                <div className="form-row flexible" key={slotField}>
                  <label className="key">{_.startCase(slotField)}</label>
                  <div className="val">
                    {slot[slotField] && (
                      <input value={slot[slotField]} disabled />
                    )}
                  </div>
                </div>
              )}
              {Array.isArray(slot[slotField]) && (
                <CollapsablePanel>
                  <CollapsablePanelHeader>
                    <span>Tracks</span>
                  </CollapsablePanelHeader>
                  <CollapsablePanelBody>
                    <Tabs activeIndex={activeIndex}>
                      <TabList>
                        {slot[slotField].map((track, i) => (
                          <Tab>Track - {i + 1}</Tab>
                        ))}
                      </TabList>
                      <TabPanels>
                        {slot[slotField].map((track, i) => (
                          <TabPanel key={track.trackId}>
                            {Object.keys(track).map(trackField => (
                              <Fragment>
                                {track[trackField] &&
                                  !Array.isArray(track[trackField]) && (
                                    <div
                                      className="form-row flexible"
                                      key={trackField}
                                    >
                                      <label className="key">
                                        {_.startCase(trackField)}
                                      </label>
                                      <div className="val">
                                        {track[trackField] && (
                                          <input
                                            value={track[trackField]}
                                            disabled
                                          />
                                        )}
                                      </div>
                                    </div>
                                  )}
                                {Array.isArray(track[trackField]) && (
                                  <CollapsablePanel>
                                    <CollapsablePanelHeader>
                                      <span>Speakers</span>
                                    </CollapsablePanelHeader>
                                    <CollapsablePanelBody>
                                      <Tabs activeIndex={activeIndex}>
                                        <TabList>
                                          {track[trackField].map(
                                            (speaker, i) => (
                                              <Tab>Speaker - {i + 1}</Tab>
                                            )
                                          )}
                                        </TabList>
                                        <TabPanels>
                                          {track[trackField].map(
                                            (speaker, i) => (
                                              <TabPanel key={speaker.speakerId}>
                                                {Object.keys(speaker).map(
                                                  speakerField => (
                                                    <Fragment>
                                                      {speaker[speakerField] &&
                                                        !Array.isArray(
                                                          speaker[speakerField]
                                                        ) && (
                                                          <div
                                                            className="form-row flexible"
                                                            key={speakerField}
                                                          >
                                                            <label className="key">
                                                              {_.startCase(
                                                                speakerField
                                                              )}
                                                            </label>
                                                            <div className="val">
                                                              {speaker[
                                                                speakerField
                                                              ] && (
                                                                <input
                                                                  value={
                                                                    speaker[
                                                                      speakerField
                                                                    ]
                                                                  }
                                                                  disabled
                                                                />
                                                              )}
                                                            </div>
                                                          </div>
                                                        )}
                                                    </Fragment>
                                                  )
                                                )}
                                              </TabPanel>
                                            )
                                          )}
                                        </TabPanels>
                                      </Tabs>
                                    </CollapsablePanelBody>
                                  </CollapsablePanel>
                                )}
                              </Fragment>
                            ))}
                          </TabPanel>
                        ))}
                      </TabPanels>
                    </Tabs>
                  </CollapsablePanelBody>
                </CollapsablePanel>
              )}
            </Fragment>
          ))}
        </CollapsablePanelBody>
      </CollapsablePanel>
    </div>
  )
}

export default Slots
