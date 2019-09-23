import React from "react";

class App extends React.Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    let ids = gifts.map(gift => gift.id);
    let largestId = ids.length > 0 ? Math.max(...ids) : 0;
    gifts.push({ id: largestId + 1 });
    this.setState({ gifts });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <button onClick={this.addGift} className="btn-add">
          Add Gift
        </button>
        <ul className="gift-list">
          {this.state.gifts.map(gift => {
            return <li key={gift.id}>{gift.id}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
