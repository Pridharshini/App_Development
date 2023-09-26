import React from 'react';
import './EmployeeCompany.css';
import Sidebar1 from '../Component/Sidebar1';
//import Footer from '../Component/Footer';

const EmployeeCompany= () => {
  return (
   <div>
    <div>
        <Sidebar1/>
    </div>
    <div className="companies-container">

      <div className="header">
        <h1>Companies</h1>
        <button className="add-button">Add +</button>
      </div>
        <div className="search-box">
          <input type="text" placeholder="Search company" />
        </div>
      <div className="cards">
        {/* Replace the following with your six cards */}
        <div className="card">
          <img src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox.svg?id=fab7cfbe-2a98-437d-bf5a-4f1972dab31c" alt="Company Logo" />
          <h2>Dropbox</h2>
          <p>Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.</p>
          <div className="card-footer">
            <div className="left">
              <img src="https://cdn-icons-png.flaticon.com/128/4347/4347500.png" alt="Time" />
              Updated 2hr ago
            </div>
            <div className="right">
              <img src="https://cdn-icons-png.flaticon.com/128/9147/9147708.png" alt="Downloads" />
              594 Downloads
            </div>
          </div>
        </div>


        <div className="card">
          <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*psYl0y9DUzZWtHzFJLIvTw.png" alt="Company Logo" />
          <h2>Medium Corporation</h2>
          <p>Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.</p>
          <div className="card-footer">
            <div className="left">
              <img src="https://cdn-icons-png.flaticon.com/128/4347/4347500.png" alt="Time" />
              Updated 2hr ago
            </div>
            <div className="right">
              <img src="https://cdn-icons-png.flaticon.com/128/9147/9147708.png" alt="Downloads" />
              486 Downloads
            </div>
          </div>
        </div>


        <div className="card">
          <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png?d=500x500&f=inside" alt="Company Logo" />
          <h2>Slack</h2>
          <p>Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.</p>
          <div className="card-footer">
            <div className="left">
              <img src="https://cdn-icons-png.flaticon.com/128/4347/4347500.png" alt="Time" />
              Updated 2hr ago
            </div>
            <div className="right">
              <img src="https://cdn-icons-png.flaticon.com/128/9147/9147708.png" alt="Downloads" />
              459 Downloads
            </div>
          </div>
        </div>


        <div className="card">
          <img src="https://1000logos.net/wp-content/uploads/2017/11/Lyft-Logo-768x534.png" alt="Company Logo" />
          <h2>Lyft</h2>
          <p>Lyft is an on-demand transportation company based in San Francisco, California.</p>
          <div className="card-footer">
            <div className="left">
              <img src="https://cdn-icons-png.flaticon.com/128/4347/4347500.png" alt="Time" />
              Updated 2hr ago
            </div>
            <div className="right">
              <img src="https://cdn-icons-png.flaticon.com/128/9147/9147708.png" alt="Downloads" />
              406 Downloads
            </div>
          </div>
        </div>

        
        <div className="card">
          <img src="data:image/png;base64,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" alt="Company Logo" />
          <h2>Squarespace</h2>
          <p>Squarespace provides software as a service for website building and hosting. Headquartered in NYC.</p>
          <div className="card-footer">
            <div className="left">
              <img src="https://cdn-icons-png.flaticon.com/128/4347/4347500.png" alt="Time" />
              Updated 2hr ago
            </div>
            <div className="right">
              <img src="https://cdn-icons-png.flaticon.com/128/9147/9147708.png" alt="Downloads" />
              835 Downloads
            </div>
          </div>
        </div>


        <div className="card">
          <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/cat.png" alt="Company Logo" />
          <h2>Caterpillar</h2>
          <p>Caterpillar is a multinational construction and mining equipment manufacturer known for its heavy machinery and equipment.</p>
          <div className="card-footer">
            <div className="left">
              <img src="https://cdn-icons-png.flaticon.com/128/4347/4347500.png" alt="Time" />
              Updated 2hr ago
            </div>
            <div className="right">
              <img src="https://cdn-icons-png.flaticon.com/128/9147/9147708.png" alt="Downloads" />
              768 Downloads
            </div>
          </div>
        </div>

        

        
     
      </div>
     {/* <div className='cf'><Footer/></div> */}
    </div>
    </div>
  );
};

export default EmployeeCompany;
