import React, { useState } from 'react';
import { PersonalInfo } from '../types';
import '../styles/Card.css';
import Sidebar from './Sidebar';
import FirstFormStep from './FirstFormStep';

function Card() {
	const [activeStep, setActiveStep] = useState(0);
	const [personalInfo, setPersonalInfo] = useState({
		name: '',
		email: '',
		phone: '',
	});

	function goToNextStep() {
		setActiveStep((prevStep) => prevStep + 1);
	}

	function updatePersonalInfo(info: PersonalInfo) {
		setPersonalInfo(info);
	}

	return (
		<div className='Card'>
			<Sidebar activeStep={activeStep} />
			<div className='card-content-container'>
				<FirstFormStep goToNextStep={goToNextStep} updatePersonalInfo={updatePersonalInfo} />
			</div>
		</div>
	);
}

export default Card;
