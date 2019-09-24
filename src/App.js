import React from "react";
import Gift from "./components/Gift";
import { max_number } from "./helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends React.Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    let ids = gifts.map(gift => gift.id);
    let largestId = max_number(ids);
    gifts.push({ id: largestId + 1 });
    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = [...this.state.gifts.filter(gift => gift.id !== id)];
    this.setState({ gifts });
  };

  render() {
    return (
      <div className="container">
        <h2>Gift Giver</h2>
        <button onClick={this.addGift} className="btn-add">
          Add Gift
        </button>
        <ul className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
