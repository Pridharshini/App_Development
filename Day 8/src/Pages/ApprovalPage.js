import React, { useState, useEffect } from 'react';
import './ApprovalPage.css';
import Sidebar from '../Component/Sidebar';

const ApprovalPage = () => {
  const [selectedTab, setSelectedTab] = useState('shiftSwap');
  const [shiftSwapRequests, setShiftSwapRequests] = useState([
    {
        id: 1,
        employeeName: 'John',
        position: 'Manager',
        requestDate: '2023-09-25',
        shiftDetails: 'Day Shift to Night Shift',
        withWhom: 'Sentil',
        reason: 'Urgent shift change needed',
        status: 'Pending',
      },
      {
        id: 2,
        employeeName: 'Janany',
        position: 'Employee',
        requestDate: '2023-09-26',
        shiftDetails: 'Night Shift to Day Shift',
        withWhom: 'vishal',
        reason: 'Family emergency',
        status: 'Pending',
      },
      {
          id: 3,
          employeeName: 'Priya',
          position: 'Sales Representative',
          requestDate: '2023-09-27',
          shiftDetails: 'Morning Shift to Evening Shift',
          withWhom: 'Rahul',
          reason: 'Urgent family commitment',
          status: 'Pending',
        },
        {
          id: 4,
          employeeName: 'Amit',
          position: 'Project Assistant',
          requestDate: '2023-09-28',
          shiftDetails: 'Day Shift to Night Shift',
          withWhom: 'Riya',
          reason: 'Medical emergency',
          status: 'Pending',
        },
        {
          id: 5,
          employeeName: 'Neha',
          position: 'Financial Analyst',
          requestDate: '2023-09-29',
          shiftDetails: 'Night Shift to Day Shift',
          withWhom: 'Raj',
          reason: 'Family function',
          status: 'Pending',
        },
        {
          id: 6,
          employeeName: 'Suresh',
          position: 'Marketing Coordinator',
          requestDate: '2023-09-30',
          shiftDetails: 'Evening Shift to Morning Shift',
          withWhom: 'Anu',
          reason: 'Personal reasons',
          status: 'Pending',
        },
        {
          id: 7,
          employeeName: 'Aparna',
          position: 'Software Developer',
          requestDate: '2023-10-01',
          shiftDetails: 'Day Shift to Night Shift',
          withWhom: 'Rahul',
          reason: 'Doctor appointment',
          status: 'Pending',
        },
        {
          id: 8,
          employeeName: 'Rajesh',
          position: 'Product Manager',
          requestDate: '2023-10-02',
          shiftDetails: 'Night Shift to Day Shift',
          withWhom: 'Sneha',
          reason: 'Family emergency',
          status: 'Pending',
        },
        {
          id: 9,
          employeeName: 'Smita',
          position: 'Sales Manager',
          requestDate: '2023-10-03',
          shiftDetails: 'Morning Shift to Evening Shift',
          withWhom: 'Raj',
          reason: 'Personal appointment',
          status: 'Pending',
        },
        {
          id: 10,
          employeeName: 'Rahul',
          position: 'IT Manager',
          requestDate: '2023-10-04',
          shiftDetails: 'Evening Shift to Morning Shift',
          withWhom: 'Suresh',
          reason: 'Family gathering',
          status: 'Pending',
        },
        {
          id: 11,
          employeeName: 'Sneha',
          position: 'Marketing Manager',
          requestDate: '2023-10-05',
          shiftDetails: 'Night Shift to Day Shift',
          withWhom: 'Priya',
          reason: 'Health issues',
          status: 'Pending',
        },
        {
          id: 12,
          employeeName: 'Raj',
          position: 'Customer Support Manager',
          requestDate: '2023-10-06',
          shiftDetails: 'Morning Shift to Evening Shift',
          withWhom: 'Aparna',
          reason: 'Personal reasons',
          status: 'Pending',
        }
  ]);

  const [timeOffRequests, setTimeOffRequests] = useState([
    {
        id: 1,
        employeeName: 'Anika',
        position: 'Employee',
        requestDate: '2023-09-27',
        timeOffDetail: 'Full Day',
        reason: 'Medical appointment',
        status: 'Pending',
      },
      {
        id: 2,
        employeeName: 'Danial',
        position: 'Employee',
        requestDate: '2023-09-28',
        timeOffDetail: 'Half Day',
        reason: 'Personal reasons',
        status: 'Pending',
      },
      {
          id: 7,
          employeeName: 'Vikram',
          position: 'Software Developer',
          requestDate: '2023-10-01',
          timeOffDetail: 'Full Day',
          reason: 'Family emergency',
          status: 'Pending',
        },
        {
          id: 8,
          employeeName: 'Meena',
          position: 'Product Manager',
          requestDate: '2023-10-02',
          timeOffDetail: 'Half Day',
          reason: 'Personal reasons',
          status: 'Pending',
        },
        {
          id: 9,
          employeeName: 'Ramesh',
          position: 'Sales Manager',
          requestDate: '2023-10-03',
          timeOffDetail: 'Full Day',
          reason: 'Medical checkup',
          status: 'Pending',
        },
        {
          id: 10,
          employeeName: 'Priyanka',
          position: 'IT Manager',
          requestDate: '2023-10-04',
          timeOffDetail: '1hr: 2pm to 3pm',
          reason: 'Family function',
          status: 'Pending',
        },
        {
          id: 11,
          employeeName: 'Alok',
          position: 'Marketing Manager',
          requestDate: '2023-10-05',
          timeOffDetail: '4hr: 11am to 3pm',
          reason: 'Personal appointment',
          status: 'Pending',
        },
        {
          id: 12,
          employeeName: 'Neha',
          position: 'Customer Support Manager',
          requestDate: '2023-10-06',
          timeOffDetail: '2hr: 9am to 11am',
          reason: 'Health issues',
          status: 'Pending',
        },
        {
          id: 3,
          employeeName: 'Sandeep',
          position: 'Sales Representative',
          requestDate: '2023-09-27',
          timeOffDetail: 'Half Day',
          reason: 'Medical appointment',
          status: 'Pending',
        },
        {
          id: 4,
          employeeName: 'Kavita',
          position: 'Project Assistant',
          requestDate: '2023-09-28',
          timeOffDetail: 'Full Day',
          reason: 'Personal problem',
          status: 'Pending',
        },
        {
          id: 5,
          employeeName: 'Anil',
          position: 'Financial Analyst',
          requestDate: '2023-09-29',
          timeOffDetail: 'Full Day',
          reason: 'Family problem',
          status: 'Pending',
        },
        {
          id: 6,
          employeeName: 'Sushma',
          position: 'Marketing Coordinator',
          requestDate: '2023-09-30',
          timeOffDetail: 'Half Day',
          reason: 'Doctor appointment',
          status: 'Pending',
        },
  ]);

 
  const [notification, setNotification] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(5);
  const [showProfile, setShowProfile] = useState(false);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setShowProfile(false); // Reset profile view when changing tabs
  };

  const handleProfileClick = () => {
    setSelectedTab('profile');
    setShowProfile(true);
  };

  const handleProfileApproval = (action) => {
    // Handle profile approval logic here
    setNotification(`Profile action is ${action}.`);

  };

  const handleApproval = (id, action) => {
    if (selectedTab === 'shiftSwap') {
      const updatedRequests = shiftSwapRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: action };
        }
        return request;
      });
      setShiftSwapRequests(updatedRequests);
    } else if (selectedTab === 'timeOff') {
      const updatedRequests = timeOffRequests.map((request) => {
        if (request.id === id) {
          return { ...request, status: action };
        }
        return request;
      });
      setTimeOffRequests(updatedRequests);
    }setNotification(`Request of "${shiftSwapRequests.find((r) => r.id === id).employeeName}" is ${action}.`);

  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when the tab changes
  }, [selectedTab]);

  // Get current requests based on pagination
  const indexOfLastRequest = currentPage * requestsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
  const currentShiftSwapRequests = shiftSwapRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );
  const currentTimeOffRequests = timeOffRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  return (
    <div className="approval-page">
        <div>
            <Sidebar/>
        </div>
      <h1 className='app'>Approval</h1>
      <div className="tab-buttons">
        <button
          className={selectedTab === 'shiftSwap' ? 'active' : ''}
          onClick={() => handleTabChange('shiftSwap')}
        >
          Shift Swap
        </button>
        <button
          className={selectedTab === 'timeOff' ? 'active' : ''}
          onClick={() => handleTabChange('timeOff')}
        >
          Time-Off
        </button>
        <button
          className={selectedTab === 'profile' ? 'active' : ''}
          onClick={handleProfileClick}
        >
          Profile
        </button>
      </div>

      {showProfile ? ( // Display profile columns when "Profile" is selected
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Change</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample profile data */}
            <tr>
              <td>Mohana</td>
              <td>HR Manager</td>
              <td>Phone</td>
              <td>9865926022</td>
              <td>9988776578</td>
              <td>Pending</td>
              <td>
                <button
                  onClick={() => handleProfileApproval('Accepted')}
                  className="accept"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleProfileApproval('Denied')}
                  className="deny"
                >
                  Deny
                </button>
              </td>
            </tr>
            <tr>
              <td>Ram</td>
              <td>Sales Manager</td>
              <td>Email</td>
              <td>rame@gmail.com</td>
              <td>ramm@gmail.com</td>
              <td>Pending</td>
              <td>
                <button
                  onClick={() => handleProfileApproval('Accepted')}
                  className="accept"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleProfileApproval('Denied')}
                  className="deny"
                >
                  Deny
                </button>
              </td>
            </tr>
            <tr>
              <td>Kurup</td>
              <td>Sales representative</td>
              <td>Phone</td>
              <td>7852152022</td>
              <td>9564728228</td>
              <td>Pending</td>
              <td>
                <button
                  onClick={() => handleProfileApproval('Accepted')}
                  className="accept"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleProfileApproval('Denied')}
                  className="deny"
                >
                  Deny
                </button>
              </td>
            </tr>
            
            {/* You can add more profile rows here */}
          </tbody>
        </table>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Position</th>
              <th>Request Date</th>
              {selectedTab === 'shiftSwap' && <th>Shift Details</th>}
              {selectedTab === 'shiftSwap' && <th>With Whom</th>}
              {selectedTab !== 'shiftSwap' && <th>Time-Off Detail</th>}
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedTab === 'shiftSwap'
              ? currentShiftSwapRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.employeeName}</td>
                    <td>{request.position}</td>
                    <td>{request.requestDate}</td>
                    {selectedTab === 'shiftSwap' && <td>{request.shiftDetails}</td>}
                    {selectedTab === 'shiftSwap' && <td>{request.withWhom}</td>}
                    {selectedTab !== 'shiftSwap' && <td>{request.timeOffDetail}</td>}
                    <td>{request.reason}</td>
                    <td>{request.status}</td>
                    <td>
                      <button
                        onClick={() => handleApproval(request.id, 'Approved')}
                        className="accept"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleApproval(request.id, 'Denied')}
                        className="deny"
                      >
                        Deny
                      </button>
                    </td>
                  </tr>
                ))
              : currentTimeOffRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.employeeName}</td>
                    <td>{request.position}</td>
                    <td>{request.requestDate}</td>
                    {selectedTab === 'shiftSwap' && <td>{request.shiftDetails}</td>}
                    {selectedTab === 'shiftSwap' && <td>{request.withWhom}</td>}
                    {selectedTab !== 'shiftSwap' && <td>{request.timeOffDetail}</td>}
                    <td>{request.reason}</td>
                    <td>{request.status}</td>
                    <td>
                      <button
                        onClick={() => handleApproval(request.id, 'Approved')}
                        className="accept"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleApproval(request.id, 'Denied')}
                        className="deny"
                      >
                        Deny
                      </button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      )}

      <div className="pagination">
        <ul>
          {selectedTab === 'shiftSwap' &&
            shiftSwapRequests.length > requestsPerPage &&
            Array.from(
              { length: Math.ceil(shiftSwapRequests.length / requestsPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          {selectedTab === 'timeOff' &&
            timeOffRequests.length > requestsPerPage &&
            Array.from(
              { length: Math.ceil(timeOffRequests.length / requestsPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={currentPage === index + 1 ? 'active' : ''}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
        </ul>
      </div>
      {notification && (
        <div
          className={`notification ${
            notification.includes('Approved') ? 'approved-notification' : 'denied-notification'
          }`}
        >
          {notification}
        </div>
      )}
    </div>
  );
};

export default ApprovalPage;
