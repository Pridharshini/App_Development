import React, { Component } from 'react';

class TimeOffForm extends Component {
  render() {
    return (
      <div>
        <h2>Time Off Request</h2>
        <form>
          <input type="text" placeholder="Employee Name" />
          <input type="text" placeholder="Position" />
          <input type="text" placeholder="Request Date" />
          <textarea placeholder="Reason"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TimeOffForm;