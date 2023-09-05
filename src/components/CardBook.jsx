import { Badge, Card, Col, Row } from "react-bootstrap";

const CardBook = ({ array, cont }) => {
  return (
    <Row className="p-5 bg-dark text-secondary gy-3 pt-0">
      <h2 className="display-1 mb-5">{array[cont][0].category.toUpperCase()}</h2>
      {array[cont].map((x, index) => (
        <Col xs="6" md="4" lg="3" xl="2" key={`book-${index}`}>
          <Card style={{ overflow: "hidden", backgroundColor: "#9b9b9b", boxShadow: "0 0 2px 2px gray" }}>
            <Card.Img
              variant="top"
              src={x.img}
              style={{ borderRadius: "0 0 5px 5px", boxShadow: "0 0 2px 2px black" }}
            />
            <Card.Body>
              <Card.Title
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  color: "#363434",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textAlign: "start",
                  marginBottom: "20px",
                }}
              >
                {x.title}
              </Card.Title>
              <Card.Text className="d-flex justify-content-end">
                <Badge bg="dark">{x.price} $</Badge>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardBook;
