import React, { useState } from 'react';
import './FAQComponent.css';

const FAQComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What details can I update through Update Aadhaar online Service?",
      answer: "Through this online portal, you can perform only Address and Document update. For any other update, kindly visit the nearest Aadhaar Seva Kendra.",
    },
    {
      question: "Is there any fee involved for Online updation of Demographics details?",
      answer: "Yes, for online update of demographic information you have to pay Rs. 50/- (including GST).",
    },
    {
      question: "How many times Aadhaar data can be updated?",
      answer: (
        <ul>
          <li>Name: Twice in Life Time</li>
          <li>Gender: Once in Life Time</li>
          <li>Date of Birth: Once in life time</li>
        </ul>
      ),
    },
    {
      question: "What changes can I do to my name in Aadhaar?",
      answer: "For minor corrections in your name or change in name, kindly visit nearest Aadhaar Seva Kendra.",
    },
    {
      question: "What documents are required for Online Address Update?",
      answer: (
        <div>
          POA document as per supporting document list will be required. Visit{' '}
          <a href="https://uidai.gov.in/images/commdoc/List_of_Supporting_Document_for_Aadhaar_Enrolment_and_Update.pdf" target="_blank" rel="noreferrer">
            https://uidai.gov.in
          </a>.
        </div>
      ),
    },
    {
      question: "Which are the documents required for updation in Aadhaar Address?",
      answer: (
        <div>
          List of supporting documents which you can select from is available{' '}
          <a href="https://uidai.gov.in/images/commdoc/List_of_Supporting_Document_for_Aadhaar_Enrolment_and_Update.pdf" target="_blank" rel="noreferrer">
            here
          </a>. Please select the appropriate document from the list and provide a scan/image of the same while undertaking demographic data correction.
        </div>
      ),
    },
    {
      question: "How can I submit my supporting documents in case of Address Update online Service?",
      answer: "You will be prompted to upload scan/image of the supporting document in pdf or jpeg format in the Update Address online Service. Please upload correct supporting document for processing of your request. For certain documents like Passport, Rent and Property agreement, image of multiple pages would be required.",
    },
    {
      question: "Can I update my local language through Update Aadhaar online Service?",
      answer: "At present you can not update your local language through online portal.",
    },
    {
      question: "Can I update my date of birth through Update Aadhaar online Service?",
      answer: "No, to update Date of Birth (DoB) kindly visit nearest Aadhaar Seva Kendra with DoB proof document.",
    },
    {
      question: "I have already updated Date of Birth in my Aadhaar once. Can I update/ correct it?",
      answer: "No. You can update your Date of Birth (DoB) only once. Further Date of Birth (DoB) can be changed under exceptional circumstances, kindly call 1947 in this regard.",
    },
    {
      question: "Does submission of request guarantee update of demographic information?",
      answer: "Submission of information does not guarantee update of Aadhaar data. Changes submitted through Update Aadhaar online Service are subjected to verification and validation by the UIDAI and after validation only the change request is processed further for Aadhaar update.",
    },
    {
      question: "I have lost my mobile number/ do not possess the number that I enrolled with Aadhaar. How should I submit my update request?",
      answer: "In case you have lost/do not possess the mobile number anymore that is registered with Aadhaar, you have to personally visit the nearest Aadhaar Seva Kendra for updation of mobile number.",
    },
    {
      question: "Will my Aadhaar number get changed after updation?",
      answer: "No, your Aadhaar number will remain same even after the update.",
    },
    {
      question: "I want to cancel the update request. Will I be able to do it?",
      answer: "A resident can cancel the update request from the ‘Requests’ space in the myAadhaar dashboard until the request is picked up for further processing. If cancelled, the amount paid will be refunded to the account within 21 days.",
    },
    {
      question: "Where can I see all my update requests?",
      answer: "A resident can view his/her update requests inside the ‘Requests’ space inside the myAadhaar dashboard.",
    },
    {
      question: "How do I add my father’s / husband’s name to my address?",
      answer: "Relationship details are a part of address field in Aadhaar. This has been standardized to C/o (Care of). Filling this is optional.",
    },
    {
      question: "My update request got rejected for invalid documents. What does this mean?",
      answer: (
        <ul>
          <li>Valid document as per <a href="https://uidai.gov.in/images/commdoc/List_of_Supporting_Document_for_Aadhaar_Enrolment_and_Update.pdf" target="_blank" rel="noreferrer">https://uidai.gov.in</a>.</li>
          <li>The document uploaded is in the name of the resident.</li>
          <li>Image uploaded should be clear and colored scan of original document.</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="aadhaar-screen__faq">
      <div className="aadhaar-screen__Faq-title-container">
        <img src="/static/media/faq-icon.2ec92ba82e3c3510425ffec418c95fb4.svg" alt="Frequently Asked Questions" />
        <div className="aadhaar-screen__Faq-title">
          <span>Frequently Asked Questions</span>
        </div>
      </div>
      <div className="ltr">
        {faqItems.map((item, index) => (
          <div className="accordion-container-shadow" key={index}>
            <div className="wrapper">
              <div className="accordion-shadow">
                <div className="accordion-shadow__title" onClick={() => toggleAccordion(index)}>
                  <div className="title">
                    <div className="ltr">
                      <div className="faq-title">
                        {item.question}
                      </div>
                    </div>
                  </div>
                  <img
                    className="toggle-image"
                    src="/static/media/ArrowDown.a5229ab197c918ede75c7ae811502301.svg"
                    alt="Arrow Down"
                    style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </div>
                <div
                  className="accordion-shadow__panel"
                  style={{
                    maxHeight: activeIndex === index ? '300px' : '0px',
                    transition: 'max-height 0.2s ease-out',
                  }}
                >
                  <div className="ltr">
                    <div className="faq-content">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQComponent;
