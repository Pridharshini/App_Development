import React, { Component } from 'react';
import ShiftSwapForm from './ShiftSwapForm';
import TimeOffForm from './TimeOffForm';
import ProfileForm from './ProfileForm';
import './EmployeeRequest.css';
import Sidebar1 from '../Component/Sidebar1';

class EmployeeRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'shiftswap', // Default form is 'shiftswap'
    };
  }

  handleButtonClick = (formType) => {
    this.setState({ activeForm: formType });
  };

  render() {
    const { activeForm } = this.state;

    return (
      <div className="request-page">
        <div>
            <Sidebar1/>
        </div>
        <div className="button-container">
          <button
            className={activeForm === 'shiftswap' ? 'active' : ''}
            onClick={() => this.handleButtonClick('shiftswap')}
          >
            Shift Swap
          </button>
          <button
            className={activeForm === 'timeoff' ? 'active' : ''}
            onClick={() => this.handleButtonClick('timeoff')}
          >
            Time Off
          </button>
          <button
            className={activeForm === 'profile' ? 'active' : ''}
            onClick={() => this.handleButtonClick('profile')}
          >
            Profile
          </button>
        </div>
        {activeForm === 'shiftswap' && <ShiftSwapForm />}
        {activeForm === 'timeoff' && <TimeOffForm />}
        {activeForm === 'profile' && <ProfileForm />}
      </div>
    );
  }
}

export default EmployeeRequest;
