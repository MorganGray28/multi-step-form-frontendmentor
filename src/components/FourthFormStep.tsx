import { AddonsType } from '../types';

type PropsType = {
	planName: string;
	paymentSchedule: string;
	addons: AddonsType;
	goToNextStep: () => void;
	goBack: () => void;
	changePlan: () => void;
};

function FourthFormStep({ planName, paymentSchedule, addons, goToNextStep, goBack, changePlan }: PropsType) {
	function capitalize(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	let planCosts = {
		arcade: {
			cost: {
				monthly: 9,
				yearly: 90,
			},
		},
		advanced: {
			cost: {
				monthly: 12,
				yearly: 120,
			},
		},
		pro: {
			cost: {
				monthly: 15,
				yearly: 150,
			},
		},
	};
	let totalCost =
		planCosts[planName as keyof typeof planCosts].cost[
			paymentSchedule as keyof (typeof planCosts)['arcade']['cost']
		];

	let planCost =
		planCosts[planName as keyof typeof planCosts].cost[
			paymentSchedule as keyof typeof planCosts.advanced.cost
		];

	let addonList: string[] = [];

	for (const addon of Object.keys(addons)) {
		let isSelected = addons[addon as keyof AddonsType].selected;
		if (isSelected) {
			addonList.push(addon);
		}
	}

	let addonContent = addonList.map((addonName) => {
		let formattedName;
		if (addonName === 'onlineServices') {
			formattedName = 'Online service';
		} else if (addonName === 'largerStorage') {
			formattedName = 'Larger storage';
		} else if (addonName === 'customizableProfile') {
			formattedName = 'Customizable profile';
		}
		let cost =
			addons[addonName as keyof AddonsType].cost[
				paymentSchedule as keyof AddonsType['onlineServices']['cost']
			];

		totalCost += cost;

		return (
			<div className='summary-addon-container' key={addonName}>
				<p className='summary-addon-name secondary-light-text'>{formattedName}</p>
				<p className='summary-addon-cost primary-sm-text'>
					+$
					{paymentSchedule === 'monthly'
						? addons[addonName as keyof AddonsType].cost.monthly + '/mo'
						: addons[addonName as keyof AddonsType].cost.yearly + '/yr'}
				</p>
			</div>
		);
	});

	return (
		<div className='FormStep'>
			<h2 className='step-header'>Finishing up</h2>
			<p className='step-subheader'>Double-check everything looks OK before confirming.</p>

			<div className='summary-container'>
				<div className='summary-plan-container'>
					<div className='summary-plan-group'>
						<p className='primary-med-text'>
							{capitalize(planName)} ({capitalize(paymentSchedule)})
						</p>
						<p className='secondary-light-text change-plan' onClick={changePlan}>
							Change
						</p>
					</div>
					<p className='primary-med-text plan-cost'>
						${planCost} {paymentSchedule === 'monthly' ? 'mo' : 'yr'}
					</p>
				</div>
				{addonContent}
			</div>

			<div className='summary-total-container'>
				<p className='secondary-light-text'>
					Total ({paymentSchedule === 'monthly' ? 'per month' : 'per year'})
				</p>

				<p className='total-cost'>
					+${totalCost}
					{paymentSchedule === 'monthly' ? '/mo' : '/yr'}
				</p>
				{/* <p className='total-cost'>+$12/mo</p> */}
			</div>

			<div className='btn-container'>
				<button className='btn-back' onClick={goBack}>
					Go Back
				</button>
				<button className='btn-next btn-confirm' onClick={goToNextStep}>
					Confirm
				</button>
			</div>
		</div>
	);
}

export default FourthFormStep;
