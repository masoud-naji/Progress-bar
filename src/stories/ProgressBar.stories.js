import React from "react";
import { storiesOf } from "@storybook/react";
import { ProgressBar } from "../components/ProgressBar";
import SkillsArray from "./SkillsArray.json";

const stories = storiesOf("App Test", module);

stories.add("App", () => (
  <div style={{ backgroundColor: "black" }}>
    <br/>
    <ProgressBar
      Data={SkillsArray}
      DataName="skillName"
      DataPercentage="skillPercentage"
      height="0.8rem"
      borderRadius="0.8rem"
      background="linear-gradient(to left,rgba(54, 162, 235, 1),rgba(54, 162, 235, 0.2))"
      boxShadow=" 0 3px 3px -5px rgba(54, 162, 235, 0.8),0 2px 5px rgba(54, 162, 235, 0.5)"
      color="rgb(0, 0, 0)"
      width="100%"
    />
  </div>
));
