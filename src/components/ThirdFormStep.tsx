import '../styles/FormStep.css';
import { AddonsType } from '../types';

type PropsType = {
	addons: AddonsType;
	paymentSchedule: string;
	updateAddons: (addonName: string) => void;
	goToNextStep: () => void;
	goBack: () => void;
};

function ThirdFormStep({ addons, paymentSchedule, updateAddons, goToNextStep, goBack }: PropsType) {
	return (
		<div className='FormStep'>
			<h2 className='step-header'>Pick add-ons</h2>
			<p className='step-subheader'>Add-ons help enhance your gaming experience.</p>
			<div className={addons.onlineServices.selected ? 'addon-container addon-selected' : 'addon-container'}>
				<input
					id='onlineServices'
					name='onlineServices'
					type='checkbox'
					className='addon-checkbox'
					checked={addons.onlineServices.selected}
					onChange={() => updateAddons('onlineServices')}
				/>
				<div className='addon'>
					<p className='addon-name'>Online service</p>
					<p className='addon-description'>Access to multiplayer games</p>
				</div>
				<p className='addon-cost'>
					{paymentSchedule === 'monthly'
						? `+$${addons.onlineServices.cost[paymentSchedule]}/mo`
						: `+$${addons.onlineServices.cost.yearly}/yr`}
				</p>
			</div>

			<div className={addons.largerStorage.selected ? 'addon-container addon-selected' : 'addon-container'}>
				<input
					id='largerStorage'
					name='largerStorage'
					type='checkbox'
					className='addon-checkbox'
					checked={addons.largerStorage.selected}
					onChange={() => updateAddons('largerStorage')}
				/>
				<div className='addon'>
					<p className='addon-name'>Larger storage</p>
					<p className='addon-description'>Extra 1TB of cloud save</p>
				</div>
				<p className='addon-cost'>
					{paymentSchedule === 'monthly'
						? `+$${addons.largerStorage.cost[paymentSchedule]}/mo`
						: `+$${addons.largerStorage.cost.yearly}/yr`}
				</p>
			</div>

			<div
				className={addons.customizableProfile.selected ? 'addon-container addon-selected' : 'addon-container'}
			>
				<input
					id='customizableProfile'
					name='customizableProfile'
					type='checkbox'
					className='addon-checkbox'
					checked={addons.customizableProfile.selected}
					onChange={() => updateAddons('customizableProfile')}
				/>
				<div className='addon'>
					<p className='addon-name'>Customizable Profile</p>
					<p className='addon-description'>Custom theme on your profile</p>
				</div>
				<p className='addon-cost'>
					{paymentSchedule === 'monthly'
						? `+$${addons.customizableProfile.cost[paymentSchedule]}/mo`
						: `+$${addons.customizableProfile.cost.yearly}/yr`}
				</p>
			</div>

			<button className='btn-back' onClick={goBack}>
				Go Back
			</button>
			<button className='btn-next' onClick={goToNextStep}>
				Next Step
			</button>
		</div>
	);
}

export default ThirdFormStep;
