import { useState } from "react";
// import { FormSection } from "../src/components/FormSection.jsx";
import { Accordion } from "./components/Accordion.jsx";
// example of how to import assets
// import reactLogo from './assets/react.svg'

import "./App.css";

function App() {
  return (
    <>
      <Accordion title={"Accordion title"}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          officiis accusamus esse dolore voluptatem atque perferendis delectus
          nesciunt. Exercitationem, quibusdam neque corporis veniam, cumque, ab
          ullam perferendis obcaecati nisi porro vitae nulla corrupti blanditiis
          sapiente pariatur ratione mollitia! Sunt inventore sequi earum facilis
          unde in, alias beatae quis maxime amet.
        </p>
      </Accordion>
    </>
  );
}

export default App;
