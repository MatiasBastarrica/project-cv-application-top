import { GralInfo } from "./GralInfo.jsx";
import { EdExp } from "./EdExp.jsx";
import { PracticalExp } from "./PracticalExp.jsx";
export function FormSection({ previewData, updatePreviewData }) {
  return (
    <>
      <div className="form-section">
        <h1>CV Generator</h1>
        <GralInfo
          previewData={previewData}
          updatePreviewData={(updatedData) => updatePreviewData(updatedData)}
        ></GralInfo>
        <EdExp
          previewData={previewData}
          updatePreviewData={(updatedData) => updatePreviewData(updatedData)}
        ></EdExp>
        <PracticalExp
          previewData={previewData}
          updatePreviewData={(updatedData) => updatePreviewData(updatedData)}
        ></PracticalExp>
      </div>
    </>
  );
}
