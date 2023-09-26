import React from 'react';


function FAQ() {
    const faqData = [
        {
          question: 'How do I request time off?',
          answer: 'You can request time off by logging into the staff scheduling system and submitting a time-off request. Make sure to provide the dates and reasons for your request.'
        },
        {
          question: 'What if I need to swap shifts with a coworker?',
          answer: 'To swap shifts with a coworker, you should first discuss the swap with them and get their agreement. Then, inform your supervisor and follow the shift swapping procedure in the scheduling system.'
        },
        {
          question: 'Can I view my schedule in advance?',
          answer: 'Yes, you can view your schedule in advance by logging into the staff scheduling system. Schedules are typically posted a few weeks in advance.'
        },
        {
          question: 'How do I report a scheduling conflict?',
          answer: 'If you encounter a scheduling conflict, contact your supervisor as soon as possible. They will assist in resolving the conflict and making necessary adjustments.'
        },
        // Add more FAQ items as needed.
      ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;