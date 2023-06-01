import React, { useState } from 'react';
import { PersonalInfo } from '../types';
import '../styles/Card.css';
import Sidebar from './Sidebar';
import FirstFormStep from './FirstFormStep';
import SecondFormStep from './SecondFormStep';

// TODO: move state from FirstFormStep to Card so we can pass it down as a prop to maintain state when going back;
function Card() {
	const [activeStep, setActiveStep] = useState(1);
	const [personalInfo, setPersonalInfo] = useState({
		name: '',
		email: '',
		phone: '',
	});

	function goToNextStep() {
		setActiveStep((prevStep) => prevStep + 1);
	}

	function goBack() {
		setActiveStep((prevStep) => prevStep - 1);
	}

	function updatePersonalInfo(info: PersonalInfo) {
		setPersonalInfo(info);
	}

	let formStep;
	if (activeStep === 0) {
		formStep = <FirstFormStep goToNextStep={goToNextStep} updatePersonalInfo={updatePersonalInfo} />;
	} else if (activeStep === 1) {
		formStep = <SecondFormStep goToNextStep={goToNextStep} goBack={goBack} />;
	}

	return (
		<div className='Card'>
			<Sidebar activeStep={activeStep} />
			<div className='card-content-container'>{formStep}</div>
		</div>
	);
}

export default Card;
