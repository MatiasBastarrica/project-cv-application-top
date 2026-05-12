import { useState } from "react";
import { FormSection } from "../src/components/FormSection.jsx";
import { PreviewSection } from "./components/PreviewSection.jsx";
// import { Accordion } from "./components/Accordion.jsx";
// example of how to import assets
// import reactLogo from './assets/react.svg'

import "./App.css";

function App() {
  const [formData, setFormData] = useState({});
  return (
    <>
      <FormSection
        previewData={formData}
        updatePreviewData={(updatedData) => setFormData(updatedData)}
      ></FormSection>
      <PreviewSection info={formData}></PreviewSection>
    </>
  );
}

export default App;
