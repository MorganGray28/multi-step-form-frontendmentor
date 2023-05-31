import React, { useState } from 'react';
import '../styles/Card.css';
import Sidebar from './Sidebar';
import FirstFormStep from './FirstFormStep';

function Card() {
	const [activeStep, setActiveStep] = useState(1);

	return (
		<div className='Card'>
			<Sidebar activeStep={activeStep} />
			<div className='card-content-container'>
				<FirstFormStep />
			</div>
		</div>
	);
}

export default Card;
