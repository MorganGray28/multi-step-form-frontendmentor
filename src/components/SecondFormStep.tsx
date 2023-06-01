import React, { useState } from 'react';
import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import '../styles/FormStep.css';

type PropsType = {
	goToNextStep: () => void;
};

function SecondFormStep({ goToNextStep }: PropsType) {
	const [planName, setPlanName] = useState<string | null>(null);
	const [paymentSchedule, setPaymentSchedule] = useState<string>('monthly');
	const [cost, setCost] = useState<string | null>(null);
	const [checked, setChecked] = useState(false);

	function handleCheckbox() {
		if (!checked) {
			setChecked(true);
			setPaymentSchedule('yearly');
		} else {
			setChecked(false);
			setPaymentSchedule('monthly');
		}
	}

	return (
		<div className='FormStep'>
			<h2 className='step-header'>Select your plan</h2>
			<p className='step-subheader'>You have the option of monthly or yearly billing.</p>

			<div className='plans-container'>
				<div className='plan-option' onClick={() => setPlanName('arcade')} tabIndex={0}>
					<img src={arcadeIcon} alt='arcade game screen' className='plan-option-icon' />
					<p className='plan-option-name'>Arcade</p>
					<p className='plan-option-subtext'>$9/mo</p>
				</div>
				<div className='plan-option' onClick={() => setPlanName('advanced')} tabIndex={0}>
					<img src={advancedIcon} alt='video game controller' className='plan-option-icon' />
					<p className='plan-option-name'>Advanced</p>
					<p className='plan-option-subtext'>$12/mo</p>
				</div>
				<div className='plan-option' onClick={() => setPlanName('pro')} tabIndex={0}>
					<img src={proIcon} alt='video game controller' className='plan-option-icon' />
					<p className='plan-option-name'>Pro</p>
					<p className='plan-option-subtext'>$15/mo</p>
				</div>
			</div>

			<div className='payment-container'>
				<p className={!checked ? 'payment-option payment-selected' : 'payment-option'}>Monthly</p>

				<input type='checkbox' id='switch' checked={checked} onChange={handleCheckbox} />
				<label className='switch-toggle' htmlFor='switch'>
					Toggle
				</label>

				<p className={checked ? 'payment-option payment-selected' : 'payment-option'}>Yearly</p>
			</div>

			<div className='btn-container'>
				<button className='btn-back'>Go Back</button>
				<button className='btn-next' onClick={() => goToNextStep()}>
					Next Step
				</button>
			</div>
		</div>
	);
}

export default SecondFormStep;
