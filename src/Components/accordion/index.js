import Accordion from "react-bootstrap/Accordion";

const Index = ({title}) => {
  return (
    <Accordion defaultActiveKey="0 " className="col-md-9">
      <Accordion.Item
        eventKey="1"
        className="m-2 p-2"
        style={{ borderRadius: "20px", border: "1px solid #AD35D9" }}
      >
        {title ? (
          <Accordion.Header>
            <b>{title}</b>
          </Accordion.Header>
        ) : (
          <Accordion.Header>
            <b>" How does this work?"</b>
          </Accordion.Header>
        )}
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        eventKey="2 "
        className="m-2 p-2"
        style={{ borderRadius: "20px", border: "1px solid #AD35D9" }}
      >
         {title ? (
          <Accordion.Header>
            <b>{title}</b>
          </Accordion.Header>
        ) : (
          <Accordion.Header>
            <b>" How does this work?"</b>
          </Accordion.Header>
        )}
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        eventKey="3 "
        className="m-2 p-2"
        style={{ borderRadius: "20px", border: "1px solid #AD35D9" }}
      >
         {title ? (
          <Accordion.Header>
            <b>{title}</b>
          </Accordion.Header>
        ) : (
          <Accordion.Header>
            <b>" How does this work?"</b>
          </Accordion.Header>
        )}
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        eventKey="4 "
        className="m-2 p-2"
        style={{ borderRadius: "20px", border: "1px solid #AD35D9" }}
      >
         {title ? (
          <Accordion.Header>
            <b>{title}</b>
          </Accordion.Header>
        ) : (
          <Accordion.Header>
            <b>" How does this work?"</b>
          </Accordion.Header>
        )}
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item
        eventKey="5 "
        className="m-2 p-2"
        style={{ borderRadius: "20px", border: "1px solid #AD35D9" }}
      >
         {title ? (
          <Accordion.Header>
            <b>{title}</b>
          </Accordion.Header>
        ) : (
          <Accordion.Header>
            <b>" How does this work?"</b>
          </Accordion.Header>
        )}
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Index;
