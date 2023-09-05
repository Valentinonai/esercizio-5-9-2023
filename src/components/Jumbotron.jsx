import { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Fantasy from "../data/books/fantasy.json";
import History from "../data/books/history.json";
import Horror from "../data/books/horror.json";
import Romance from "../data/books/romance.json";
import Scifi from "../data/books/scifi.json";
import CardBook from "./CardBook";

class Jumbotron extends Component {
  state = {
    array: [Fantasy, History, Horror, Romance, Scifi],
    cont: 0,
  };
  render() {
    return (
      <>
        <div className="p-5 bg-dark text-secondary ">
          <Container fluid="xs" className="border border-1 p-4 rounded" style={{ boxShadow: "0 0 2px 2px gray" }}>
            <h1 className="display-5 fw-bold text-white" style={{ textAlign: "start" }}>
              Online Library
            </h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta iure facilis hic ea quasi nesciunt fuga
              vero, ab repellat placeat.
            </p>
            <div className="d-flex">
              <button
                className="btn btn-outline-light btn-lg"
                type="button"
                onClick={() => {
                  this.setState({ cont: this.state.cont + 1 }, () => {
                    if (this.state.cont === 5) this.setState({ cont: 0 });
                  });
                }}
              >
                Change Category
              </button>
            </div>
          </Container>
        </div>
        {this.state.array[this.state.cont] ? (
          <CardBook array={this.state.array} cont={this.state.cont} />
        ) : (
          <h2 className="p-5 bg-dark text-secondary gy-3 pt-0 mb-0">Books</h2>
        )}
      </>
    );
  }
}

export default Jumbotron;
