import React, { useState } from 'react';
import PersonalDetailsForm from './PersonalDetailsForm';
import BusinessDetailsForm from './BusinessDetailsForm';
import BankDetailsForm from './BankDetailsForm';
import FinalReviewForm from './FinalReviewForm';

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalDetails: {},
    businessDetails: {},
    bankDetails: {}
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      {/* Progress Bar */}
      <div>Step {currentStep} of 4</div>

      {/* Conditional rendering based on current step */}
      {currentStep === 1 && (
        <PersonalDetailsForm
          formData={formData.personalDetails}
          setFormData={(data) => setFormData({ ...formData, personalDetails: data })}
          onNext={handleNext}
        />
      )}
      {currentStep === 2 && (
        <BusinessDetailsForm
          formData={formData.businessDetails}
          setFormData={(data) => setFormData({ ...formData, businessDetails: data })}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {currentStep === 3 && (
        <BankDetailsForm
          formData={formData.bankDetails}
          setFormData={(data) => setFormData({ ...formData, bankDetails: data })}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {currentStep === 4 && (
        <FinalReviewForm
          formData={formData}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      )}

      {/* Navigation Buttons */}
      {currentStep !== 1 && <button onClick={handlePrevious}>Previous</button>}
      {currentStep !== 4 && <button onClick={handleNext}>Next</button>}
      {currentStep === 4 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default RegistrationForm;
