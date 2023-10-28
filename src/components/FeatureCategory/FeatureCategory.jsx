import React from "react";
import { Card } from "react-bootstrap";
import { BsJournalBookmarkFill } from "react-icons/bs";

const FeatureCategory = () => {
  return (
    <div className="my-5">
      <div className="d-flex justify-content-between gap-3">
        <Card style={{ width: "18rem", backgroundColor: "#E0F2F7" }}>
          <Card.Body>
            <Card.Title className="">
              <h1>
                <BsJournalBookmarkFill />
              </h1>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted mt-3">
              List your choices
            </Card.Subtitle>
            <Card.Text>Select your favourite item.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", backgroundColor: "#E0F2F7" }}>
          <Card.Body>
            <Card.Title className="">
              <h1>
                <BsJournalBookmarkFill />
              </h1>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted mt-3">
              List your choices
            </Card.Subtitle>
            <Card.Text>Select your favourite item.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "#E0F2F7" }}>
          <Card.Body>
            <Card.Title className="">
              <h1>
                <BsJournalBookmarkFill />
              </h1>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted mt-3">
              List your choices
            </Card.Subtitle>
            <Card.Text>Select your favourite item.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", backgroundColor: "#E0F2F7" }}>
          <Card.Body>
            <Card.Title className="">
              <h1>
                <BsJournalBookmarkFill />
              </h1>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted mt-3">
              List your choices
            </Card.Subtitle>
            <Card.Text>Select your favourite item.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCategory;
