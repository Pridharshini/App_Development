import React, { Component } from 'react';

class ProfileForm extends Component {
  render() {
    return (
      <div>
        <h2>Profile Update Request</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Position" />
          <input type="text" placeholder="Change Details" />
          <input type="text" placeholder="From" />
          <input type="text" placeholder="To" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;