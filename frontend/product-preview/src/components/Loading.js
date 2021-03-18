import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="danger" />
    </>
  );
}
