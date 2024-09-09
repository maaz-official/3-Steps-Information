import React, { useState } from 'react';
import './App.css'; // For adding custom styles and animations

const App = () => {
  const [step, setStep] = useState(1);
  const [animating, setAnimating] = useState(false);

  // Handle next step
  const handleNext = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setStep(step + 1);
      setAnimating(false);
    }, 800); // Matches the animation duration
  };

  // Handle previous step
  const handlePrevious = () => {
    if (animating) return;
    setAnimating(true);

    setTimeout(() => {
      setStep(step - 1);
      setAnimating(false);
    }, 800); // Matches the animation duration
  };

  return (
    <form id="msform">
      {/* Progressbar */}
      <ul id="progressbar">
        <li className={step >= 1 ? 'active' : ''}>Account Setup</li>
        <li className={step >= 2 ? 'active' : ''}>Social Profiles</li>
        <li className={step >= 3 ? 'active' : ''}>Personal Details</li>
      </ul>

      {/* Step 1 */}
      {step === 1 && (
        <fieldset className={`step-fieldset ${animating ? 'animating' : ''}`}>
          <h2 className="fs-title">Create your account</h2>
          <h3 className="fs-subtitle">This is step 1</h3>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="pass" placeholder="Password" />
          <input type="password" name="cpass" placeholder="Confirm Password" />
          <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
        </fieldset>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <fieldset className={`step-fieldset ${animating ? 'animating' : ''}`}>
          <h2 className="fs-title">Social Profiles</h2>
          <h3 className="fs-subtitle">Your presence on the social network</h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
          <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
          <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
        </fieldset>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <fieldset className={`step-fieldset ${animating ? 'animating' : ''}`}>
          <h2 className="fs-title">Personal Details</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone" />
          <textarea name="address" placeholder="Address"></textarea>
          <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
          <a href="https://twitter.com/GoktepeAtakan" className="submit action-button" target="_top">
            Submit
          </a>
        </fieldset>
      )}
    </form>
  );
};

export default App;
