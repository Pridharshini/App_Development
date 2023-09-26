import React, { useState } from 'react';
import './StaffDirectory.css';
import Sidebar from '../Component/Sidebar';

const profilesPerPage = 10; // Number of profiles to display per page

const StaffDirectory = () => {
  const [selectedCategory, setSelectedCategory] = useState('Manager');
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when changing categories
  };

  const profiles = selectedCategory === 'Manager' ? managerProfiles : employeeProfiles;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * profilesPerPage;
  const endIndex = startIndex + profilesPerPage;

  const displayedProfiles = profiles.slice(startIndex, endIndex);

  return (
    <div className="staff-directory">
        <div>
            <Sidebar/>
        </div>
      <h1>STAFFS</h1>
      <button className="edit-button">Edit</button>
      <div className="categories">
        <button
          className={selectedCategory === 'Manager' ? 'active' : ''}
          onClick={() => handleCategoryChange('Manager')}
        >
          Manager
        </button>
        <button
          className={selectedCategory === 'Employee' ? 'active' : ''}
          onClick={() => handleCategoryChange('Employee')}
        >
          Employee
        </button>
      </div>
      <table className="profile-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} />
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Experience</th>
          </tr>
        </thead>
        <tbody>
          {displayedProfiles.map((profile) => (
            <tr key={profile.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="profile-info">
                  <img src={profile.photo} alt={profile.name} />
                  {profile.name}
                </div>
              </td>
              <td>{profile.email}</td>
              <td>{profile.phone}</td>
              <td>{profile.position}</td>
              <td>{profile.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= profiles.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StaffDirectory;


const managerProfiles = [
    {
      id: 1,
      name: 'Pranav',
      email: 'pranav@gmail.com',
      phone: '9876541230',
      position: 'Quality Manager',
      experience: '7 years',
      photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 2,
      name: 'Karthik',
      email: 'karthik@gmail.com',
      phone: '7528841231',
      position: 'Operations Manager',
      experience: '8 years',
      photo: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 3,
      name: 'Yash',
      email: 'yash@gmail.com',
      phone: '9356541232',
      position: 'Marketing Manager',
      experience: '6.5 years',
      photo: 'https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 4,
      name: 'Abhinav',
      email: 'abhinav@gmail.com',
      phone: '9856541233',
      position: 'Finance Manager',
      experience: '9 years',
      photo: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 5,
      name: 'Virat',
      email: 'virat@gmail.com',
      phone: '8776541234',
      position: 'Product Manager',
      experience: '7.5 years',
      photo: 'https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 6,
      name: 'Neha',
      email: 'neha@gmail.com',
      phone: '7876541235',
      position: 'HR Manager',
      experience: '6 years',
      photo: 'https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 7,
      name: 'Ananya',
      email: 'ananya@gmail.com',
      phone: '9876541236',
      position: 'Sales Manager',
      experience: '7 years',
      photo: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 8,
      name: 'Pooja',
      email: 'pooja@gmail.com',
      phone: '9258541237',
      position: 'Project Manager',
      experience: '8.5 years',
      photo: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 9,
      name: 'Swara',
      email: 'swara@gmail.com',
      phone: '7876541238',
      position: 'Customer Support Manager',
      experience: '6 years',
      photo: 'https://img.freepik.com/free-photo/sympathetic-nice-beautiful-dark-hair-young-woman-confidently_295783-1503.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 10,
      name: 'Aaradhya',
      email: 'aaradhya@gmail.com',
      phone: '7876541239',
      position: 'IT Manager',
      experience: '7.5 years',
      photo: 'https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 11,
      name: 'Priya',
      email: 'priya@gmail.com',
      phone: '9876541240',
      position: 'Marketing Manager',
      experience: '6 years',
      photo: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
        id: 12,
        name: "riya",
        email: "riyri@example.com",
        phone: "8795678901",
        position: "Sales Manager",
        experience: "8 years",
        photo: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.1978472177.1678875919&semt=ais"
      },
      {
        id: 13,
        name: "John",
        email: "john@example.com",
        phone: "9876573210",
        "position": "Project Manager",
        experience: "10 years",
        "photo": "https://img.freepik.com/free-photo/portrait-friendly-confident-caucasian-bearded-guy-with-moustache-wearing-glasses-smiling-politely-looking-relaxed-calm-gray-wall-listening-customer-complaint-gray-wall_176420-22514.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais"
      },
      {
        id: 14,
        name: "Ravin",
        email: "rav@example.com",
        phone: "7895684236",
       position: "Product Manager",
        experience: "5 years",
        photo: "https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022620.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais"
      },
    {
      id: 15,
      name: 'Sushmitha',
      email: 'susi@gmail.com',
      phone: '9876541240',
      position: 'Marketing Manager',
      experience: '2 years',
      photo: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 16,
      name: 'kanika',
      email: 'kanka@gmail.com',
      phone: '9587541240',
      position: 'HR Manager',
      experience: '7 years',
      photo: 'https://img.freepik.com/free-photo/close-up-stylish-attractive-girl-with-hairbun-smiling-looking-hopeful_176420-25550.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 17,
      name: 'deepak',
      email: 'deepk@gmail.com',
      phone: '9876541240',
      position: 'Marketing Manager',
      experience: '4 years',
      photo: 'https://img.freepik.com/free-photo/intriguing-mysterious-handsome-young-european-man-looks-curiously_273609-17036.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
  ];
  
  const employeeProfiles = [
    {
      id: 1,
      name: 'Radha',
      email: 'radha@gmail.com',
      phone: '9876541241',
      position: 'Sales Representative',
      experience: '4 years',
      photo: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 2,
      name: 'Anika',
      email: 'anika@gmail.com',
      phone: '7896541242',
      position: 'Software Developer',
      experience: '5.5 years',
      photo: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 3,
      name: 'Sanya',
      email: 'sanya@gmail.com',
      phone: '9986541243',
      position: 'Assistent technician',
      experience: '7 years',
      photo: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 4,
      name: 'Ishita',
      email: 'ishita@gmail.com',
      phone: '7895541244',
      position: 'Marketing Coordinator',
      experience: '3 years',
      photo: 'https://img.freepik.com/free-photo/sympathetic-nice-beautiful-dark-hair-young-woman-confidently_295783-1503.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 5,
      name: 'Tara',
      email: 'tara@gmail.com',
      phone: '9986541245',
      position: 'Financial Analyst',
      experience: '5 years',
      photo: 'https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 6,
      name: 'Vikram',
      email: 'vikram@gmail.com',
      phone: '7897556246',
      position: 'IT Support Specialist',
      experience: '4.5 years',
      photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 7,
      name: 'Rahul',
      email: 'rahul@gmail.com',
      phone: '9895541247',
      position: 'Customer Service Representative',
      experience: '3.5 years',
      photo: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 8,
      name: 'Aarav',
      email: 'aarav@gmail.com',
      phone: '8976541248',
      position: 'Graphic Designer',
      experience: '5 years',
      photo: 'https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 9,
      name: 'Arjun',
      email: 'arjun@gmail.com',
      phone: '9988741249',
      position: 'Project assistent',
      experience: '6 years',
      photo: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
    },
    {
      id: 10,
      name: 'Surya',
      email: 'suri@gmail.com',
      phone: '9876541250',
      position: 'Software Engineer',
      experience: '4.5 years',
      photo: 'https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.167887',
    },
    {
      id: 11,
      name: 'Sidhik',
      email: 'sidhik@gmail.com',
      phone: '9876541250',
      position: 'Software Engineer',
      experience: '4.5 years',
      photo: 'https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.167887',
    },
    {
        id: 3,
        name: 'Sarvana',
        email: 'sav@gmail.com',
        phone: '9356541232',
        position: 'Graphic Designer',
        experience: '6.5 years',
        photo: 'https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 4,
        name: 'ashok',
        email: 'askk@gmail.com',
        phone: '9856541233',
        position: 'Project assistent',
        experience: '9 years',
        photo: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 5,
        name: 'vikash',
        email: 'viky@gmail.com',
        phone: '8776541234',
        position: 'Sales Representative',
        experience: '7.5 years',
        photo: 'https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
     {
        id: 15,
        name: 'Praveen',
        email: 'prav@gmail.com',
        phone: '9876541230',
        position: 'Project assistent',
        experience: '7 years',
        photo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 16,
        name: 'Karthikeyan',
        email: 'karthi@gmail.com',
        phone: '7528841231',
        position: 'Financial Analyst',
        experience: '8 years',
        photo: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 17,
        name: 'Yashik',
        email: 'yashik@gmail.com',
        phone: '9356541232',
        position: 'Project assistent',
        experience: '6.5 years',
        photo: 'https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 18,
        name: 'Abhinand',
        email: 'abhin@gmail.com',
        phone: '9856541233',
        position: 'Sales Representative',
        experience: '9 years',
        photo: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 19,
        name: 'Vivek',
        email: 'vivek@gmail.com',
        phone: '8776541234',
        position: 'Marketing Coordinator',
        experience: '7.5 years',
        photo: 'https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 20,
        name: 'Aruna',
        email: 'aruna@gmail.com',
        phone: '9876541236',
        position: 'Sales Representative',
        experience: '7 years',
        photo: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 8,
        name: 'Povili',
        email: 'poo@gmail.com',
        phone: '9258541237',
        position: 'Financial Analyst',
        experience: '8.5 years',
        photo: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 9,
        name: 'Swapna',
        email: 'swapna@gmail.com',
        phone: '7876541238',
        position: 'Marketing Coordinator',
        experience: '6 years',
        photo: 'https://img.freepik.com/free-photo/sympathetic-nice-beautiful-dark-hair-young-woman-confidently_295783-1503.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 10,
        name: 'Aarathana',
        email: 'aarath@gmail.com',
        phone: '7876541239',
        position: 'Sales Representative',
        experience: '7.5 years',
        photo: 'https://img.freepik.com/free-photo/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-with-straight-blonde-hair-expresses-positiveness-poses_176420-13176.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 11,
        name: 'aparna',
        email: 'apu@gmail.com',
        phone: '9876541240',
        position: 'Software Developer',
        experience: '6 years',
        photo: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
          id: 12,
          name: "sakthi",
          email: "saki@example.com",
          phone: "8795678901",
          position: "Financial Analyst",
          experience: "8 years",
          photo: "https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.1978472177.1678875919&semt=ais"
        },
        {
          id: 13,
          name: "Jonathan",
          email: "joth@example.com",
          phone: "9876573210",
          "position": "Software Developer",
          experience: "10 years",
          "photo": "https://img.freepik.com/free-photo/portrait-friendly-confident-caucasian-bearded-guy-with-moustache-wearing-glasses-smiling-politely-looking-relaxed-calm-gray-wall-listening-customer-complaint-gray-wall_176420-22514.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais"
        },
        {
          id: 14,
          name: "Rasul",
          email: "rasd@example.com",
          phone: "7895684236",
         position: "Sales Representative",
          experience: "5 years",
          photo: "https://img.freepik.com/free-photo/portrait-happy-smiley-man_23-2149022620.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais"
        },
      {
        id: 15,
        name: 'Sushma',
        email: 'sus@gmail.com',
        phone: '9876541240',
        position: 'Software Developer',
        experience: '2 years',
        photo: 'https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 16,
        name: 'kanila',
        email: 'kank@gmail.com',
        phone: '9587541240',
        position: 'Graphic Designer',
        experience: '7 years',
        photo: 'https://img.freepik.com/free-photo/close-up-stylish-attractive-girl-with-hairbun-smiling-looking-hopeful_176420-25550.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 17,
        name: 'deepan',
        email: 'deep@gmail.com',
        phone: '9876541240',
        position: 'Sales Representative',
        experience: '4 years',
        photo: 'https://img.freepik.com/free-photo/intriguing-mysterious-handsome-young-european-man-looks-curiously_273609-17036.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },{
        id: 3,
        name: 'Saravesh',
        email: 'sarv@gmail.com',
        phone: '9356541232',
        position: 'Graphic Designer',
        experience: '6.5 years',
        photo: 'https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 4,
        name: 'akash',
        email: 'aakk@gmail.com',
        phone: '9856541233',
        position: 'Project assistent',
        experience: '9 years',
        photo: 'https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
      },
      {
        id: 5,
        name: 'Kamal',
        email: 'kam@gmail.com',
        phone: '8776541234',
        position: 'Sales Representative',
        experience: '7.5 years',
        photo: 'https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais',
},
];
