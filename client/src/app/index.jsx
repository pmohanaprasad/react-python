import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

const App = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          {typeof data.Data === "undefined" ? (
            <p>Loading</p>
          ) : (
            data.Data.map((Data, i) => <p key={i}>{Data}</p>)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
