import React, { Component } from 'react';

class ShiftSwapForm extends Component {
  render() {
    return (
      <div>
        <h2>Shift Swap Request</h2>
        <form>
          <input type="text" placeholder="Employee Name" />
          <input type="text" placeholder="Position" />
          <input type="text" placeholder="Request Date" />
          <input type="text" placeholder="Shift Details" />
          <input type="text" placeholder="Swap With" />
          <textarea placeholder="Reason"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ShiftSwapForm;