import React, { useState } from 'react';
import { PersonalInfo } from '../types';
import '../styles/FormStep.css';

type PropsType = {
	goToNextStep: () => void;
	updatePersonalInfo: (info: PersonalInfo) => void;
};

function FirstFormStep({ goToNextStep, updatePersonalInfo }: PropsType) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	// error states
	const [nameError, setNameError] = useState<string | null>(null);
	const [emailError, setEmailError] = useState<string | null>(null);
	const [phoneError, setPhoneError] = useState<string | null>(null);

	function handleSubmit() {
		let emptyFieldError = 'This field is required';
		let isValid = true;
		if (!name) {
			setNameError(emptyFieldError);
			isValid = false;
		}
		if (!email) {
			setEmailError(emptyFieldError);
			isValid = false;
		}
		if (!phone) {
			setPhoneError(emptyFieldError);
			isValid = false;
		}

		if (!validateEmail()) {
			setEmailError('Invalid email address');
			isValid = false;
		}

		if (isValid) {
			goToNextStep();
			updatePersonalInfo({ name, email, phone });
		}
	}

	// Extremely basic version of email validation
	function validateEmail() {
		let isValid = true;
		let validDomains = ['com', 'org', 'io', 'dev', 'net', 'gov'];
		let emailFormatted = email.toLowerCase().split('.');
		if (
			!validDomains.includes(emailFormatted[emailFormatted.length - 1]) ||
			!email.includes('@') ||
			email.includes(' ')
		) {
			isValid = false;
		}
		return isValid;
	}

	return (
		<div className='FormStep'>
			<h2 className='step-header'>Personal info</h2>
			<p className='step-subheader'>Please provide your name, email address, and phone number.</p>
			<form>
				<div className='form-group'>
					<div className='label-group'>
						<label htmlFor=''>Name</label>
						<p className='error-msg'>{nameError && nameError}</p>
					</div>
					<input
						className={nameError ? 'input-text error' : 'input-text'}
						type='text'
						id='name'
						name='name'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
							setNameError(null);
						}}
						placeholder='e.g. Stephen King'
					/>
				</div>
				<div className='form-group'>
					<div className='label-group'>
						<label htmlFor=''>Email Address</label>
						<p className='error-msg'>{emailError && emailError}</p>
					</div>
					<input
						className={emailError ? 'input-text error' : 'input-text'}
						type='text'
						id='email'
						name='email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
							setEmailError(null);
						}}
						placeholder='e.g. stephenking@lorem.com'
					/>
				</div>
				<div className='form-group'>
					<div className='label-group'>
						<label htmlFor=''>Phone Number</label>
						<p className='error-msg'>{phoneError && phoneError}</p>
					</div>
					<input
						className={phoneError ? 'input-text error' : 'input-text'}
						type='text'
						id='phone'
						name='phone'
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value);
							setPhoneError(null);
						}}
						placeholder='e.g. +1 234 567 890'
					/>
				</div>
			</form>
			<div className='btn-container'>
				<button className='btn-next' onClick={handleSubmit}>
					Next Step
				</button>
			</div>
		</div>
	);
}

export default FirstFormStep;
