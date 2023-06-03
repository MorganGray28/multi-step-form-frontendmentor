import { useState } from 'react';
import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import '../styles/FormStep.css';

type PropsType = {
	selectedPlan: string;
	paymentSchedule: string;
	updatePaymentSchedule: (schedule: string) => void;
	updatePlanName: (plan: string) => void;
	goToNextStep: () => void;
	goBack: () => void;
};

function SecondFormStep({
	selectedPlan,
	paymentSchedule,
	updatePaymentSchedule,
	updatePlanName,
	goToNextStep,
	goBack,
}: PropsType) {
	function handleCheckbox() {
		if (paymentSchedule === 'monthly') {
			updatePaymentSchedule('yearly');
		} else if (paymentSchedule === 'yearly') {
			updatePaymentSchedule('monthly');
		}
	}

	return (
		<div className='FormStep'>
			<h2 className='step-header'>Select your plan</h2>
			<p className='step-subheader'>You have the option of monthly or yearly billing.</p>

			<div className='plans-container'>
				<button
					className={selectedPlan === 'arcade' ? 'plan-option plan-option-selected' : 'plan-option'}
					onClick={(e) => updatePlanName('arcade')}
				>
					<img src={arcadeIcon} alt='arcade game screen' className='plan-option-icon' />
					<p className='plan-option-name'>Arcade</p>
					<p className='plan-option-subtext'>{paymentSchedule === 'monthly' ? '$9/mo' : '$90/yr'}</p>
					{paymentSchedule === 'yearly' && <p className='annual-plan-subtext'>2 months free</p>}
				</button>
				<button
					className={selectedPlan === 'advanced' ? 'plan-option plan-option-selected' : 'plan-option'}
					onClick={() => updatePlanName('advanced')}
				>
					<img src={advancedIcon} alt='video game controller' className='plan-option-icon' />
					<p className='plan-option-name'>Advanced</p>
					<p className='plan-option-subtext'>{paymentSchedule === 'monthly' ? '$12/mo' : '$120/yr'}</p>
					{paymentSchedule === 'yearly' && <p className='annual-plan-subtext'>2 months free</p>}
				</button>
				<button
					className={selectedPlan === 'pro' ? 'plan-option plan-option-selected' : 'plan-option'}
					onClick={() => updatePlanName('pro')}
				>
					<img src={proIcon} alt='video game controller' className='plan-option-icon' />
					<p className='plan-option-name'>Pro</p>
					<p className='plan-option-subtext'>{paymentSchedule === 'monthly' ? '$15/mo' : '$150/yr'}</p>
					{paymentSchedule === 'yearly' && <p className='annual-plan-subtext'>2 months free</p>}
				</button>
			</div>

			<div className='payment-container'>
				<p
					className={paymentSchedule === 'monthly' ? 'payment-option payment-selected' : 'payment-option'}
					onClick={() => {
						if (paymentSchedule === 'yearly') updatePaymentSchedule('monthly');
					}}
				>
					Monthly
				</p>

				<input type='checkbox' id='switch' checked={paymentSchedule === 'yearly'} onChange={handleCheckbox} />
				<label className='switch-toggle' htmlFor='switch'>
					Toggle
				</label>

				<p
					className={paymentSchedule === 'yearly' ? 'payment-option payment-selected' : 'payment-option'}
					onClick={() => {
						if (paymentSchedule === 'monthly') updatePaymentSchedule('yearly');
					}}
				>
					Yearly
				</p>
			</div>

			<div className='btn-container'>
				<button className='btn-back' onClick={() => goBack()}>
					Go Back
				</button>
				<button className='btn-next' onClick={() => goToNextStep()} disabled={!selectedPlan}>
					Next Step
				</button>
			</div>
		</div>
	);
}

export default SecondFormStep;
