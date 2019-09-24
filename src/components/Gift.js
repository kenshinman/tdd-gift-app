import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: "",
      gift: ""
    };
  }
  render() {
    return (
      <div className="gift">
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              value={this.state.person}
              onChange={e => this.setState({ person: e.target.value })}
              className="input-person"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              value={this.state.gift}
              onChange={e => this.setState({ gift: e.target.value })}
              className="input-gift"
            />
            <Button
              className="btn-remove"
              onClick={() => this.props.removeGift(this.props.gift.id)}>
              Remove gift
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Gift;
