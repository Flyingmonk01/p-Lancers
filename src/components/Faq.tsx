import React, { useState } from 'react';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Inspiration?",
      answer: "React is a JavaScript library for building user interfaces.",
      open: false
    },
    {
      question: "How does React work?",
      answer: "React creates a virtual DOM and syncs it with the real DOM.",
      open: false
    },
    // Add more questions here
  ]);

  const toggleFAQ = (index:Number) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 w-1/2">
      {faqs.map((faq, index) => (
        <div key={index} className="py-4">
          <div
            className="cursor-pointer text-xl font-semibold"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>
          {faq.open && (
            <div className="mt-2 pl-4 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
