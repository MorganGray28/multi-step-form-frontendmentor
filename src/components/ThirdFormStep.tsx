import { useState } from 'react';
import '../styles/FormStep.css';

type PropsType = {
	goToNextStep: () => void;
	goBack: () => void;
};

function ThirdFormStep({ goToNextStep, goBack }: PropsType) {
	const [onlineServices, setOnlineServices] = useState(false);
	const [largerStorage, setLargerStorage] = useState(false);
	const [customizableProfile, setCustomizableProfile] = useState(false);

	return (
		<div className='FormStep'>
			<h2 className='step-header'>Pick add-ons</h2>
			<p className='step-subheader'>Add-ons help enhance your gaming experience.</p>
			<div className={onlineServices ? 'addon-container addon-selected' : 'addon-container'}>
				<input
					id='online-services'
					name='online-services'
					type='checkbox'
					className='addon-checkbox'
					checked={onlineServices}
					onChange={() => setOnlineServices(!onlineServices)}
				/>
				<div className='addon'>
					<p className='addon-name'>Online service</p>
					<p className='addon-description'>Access to multiplayer games</p>
				</div>
				<p className='addon-cost'>+$1/mo</p>
			</div>

			<div className={largerStorage ? 'addon-container addon-selected' : 'addon-container'}>
				<input
					id='larger-storage'
					name='larger-storage'
					type='checkbox'
					className='addon-checkbox'
					checked={largerStorage}
					onChange={() => setLargerStorage(!largerStorage)}
				/>
				<div className='addon'>
					<p className='addon-name'>Larger storage</p>
					<p className='addon-description'>Extra 1TB of cloud save</p>
				</div>
				<p className='addon-cost'>+$2/mo</p>
			</div>

			<div className={customizableProfile ? 'addon-container addon-selected' : 'addon-container'}>
				<input
					id='customizable-profile'
					name='customizable-profile'
					type='checkbox'
					className='addon-checkbox'
					checked={customizableProfile}
					onChange={() => setCustomizableProfile(!customizableProfile)}
				/>
				<div className='addon'>
					<p className='addon-name'>Customizable Profile</p>
					<p className='addon-description'>Custom theme on your profile</p>
				</div>
				<p className='addon-cost'>+$2/mo</p>
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
