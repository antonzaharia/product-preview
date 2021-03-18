import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

export default function InfoBar({ upload, shape, preview }) {
  const trimUploadName = () => {
    if (upload.length > 20) {
      let output = upload.split("").splice(0, 20).join("") + "...";
      return output;
    } else {
      return upload;
    }
  };
  return (
    <div className="info-bar">
      <div className="info-bar-element">
        <p>Upload {upload ? `- ${trimUploadName()}` : "--"}</p>
        <p>Product Options {shape ? `- ${shape}` : "--"}</p>
        <p>View {preview ? `- ${preview}` : "--"}</p>
      </div>
      <div className="info-bar-element">
        <div>
          <p className={upload ? "step step-done" : "step"}>UPLOAD IMAGE</p>
          {upload ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </div>
        <div>
          <p className={shape ? "step step-done" : "step"}>SELECT PRODUCT</p>
          {shape ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </div>
        <div>
          <p className={preview ? "step step-done" : "step"}>PREVIEW</p>
          {preview ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </div>
      </div>
    </div>
  );
}
