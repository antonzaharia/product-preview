import React from "react";
import { Image, Transformation } from "cloudinary-react";

export default function Canvas({ pictureId }) {
  return (
    <Image
      style={{
        textAlign: "center",
        width: "250px",
        minHeight: "300px",
      }}
      cloudName="picfair-test"
      publicId={pictureId}
      variables={[
        ["$w", "300"],
        ["$h", "500"],
        ["$dp", "10"],
        ["$wadp", "$w + $dp"],
        ["$hadp", "$h + $dp"],
      ]}
    >
      <Transformation width="700" height="500" crop="fill" radius="5" />
      <Transformation
        width="700"
        height="500"
        overlay={pictureId}
        opacity="60"
        radius="5"
        crop="fill"
      />
      <Transformation width="20" height="500" gravity="east" crop="crop" />
      <Transformation angle="hflip" />
      <Transformation effect="distort:0:0:20:20:20:520:0:500" />
      <Transformation x="-20" y="9" gravity="east" flags="layer_apply" />
      <Transformation
        width="700"
        height="500"
        overlay={pictureId}
        opacity="60"
        crop="fill"
        radius="5"
      />
      <Transformation width="700" height="20" gravity="south" crop="crop" />
      <Transformation angle="vflip" />
      <Transformation effect="distort:0:0:700:0:720:20:20:20" />
      <Transformation y="-1" gravity="south" flags="layer_apply" />
      <Transformation fetchFormat="auto" />
    </Image>
  );
}
