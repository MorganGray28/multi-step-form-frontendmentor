type PropsType = {
	goToNextStep: () => void;
	goBack: () => void;
	changePlan: () => void;
};

function FourthFormStep({ goToNextStep, goBack, changePlan }: PropsType) {
	return (
		<div className='FormStep'>
			<h2 className='step-header'>Finishing up</h2>
			<p className='step-subheader'>Double-check everything looks OK before confirming.</p>

			<div className='summary-container'>
				<div className='summary-plan-container'>
					<div className='summary-plan-group'>
						<p className='primary-med-text'>Arcade (Monthly)</p>
						<p className='secondary-light-text change-plan' onClick={changePlan}>
							Change
						</p>
					</div>
					<div className='primary-med-text plan-cost'>$9/mo</div>
				</div>
				<div className='summary-addon-container'>
					<p className='summary-addon-name secondary-light-text'>Online service</p>
					<p className='summary-addon-cost primary-sm-text'>+$10/yr</p>
				</div>
				<div className='summary-addon-container'>
					<p className='summary-addon-name secondary-light-text'>Online service</p>
					<p className='summary-addon-cost primary-sm-text'>+$10/yr</p>
				</div>
			</div>

			<div className='summary-total-container'>
				<p className='secondary-light-text'>Total (per month)</p>
				<p className='total-cost'>+$12/mo</p>
			</div>

			<button className='btn-back' onClick={goBack}>
				Go Back
			</button>
			<button className='btn-next btn-confirm' onClick={goToNextStep}>
				Confirm
			</button>
		</div>
	);
}

export default FourthFormStep;
