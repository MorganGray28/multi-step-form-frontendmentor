import { useState } from 'react';
import '../styles/Card.css';
import { AddonsType } from '../types';
import Sidebar from './Sidebar';
import FirstFormStep from './FirstFormStep';
import SecondFormStep from './SecondFormStep';
import ThirdFormStep from './ThirdFormStep';
import FourthFormStep from './FourthFormStep';
import FinalFormStep from './FinalFormStep';

// TODO: move state from FirstFormStep to Card so we can pass it down as a prop to maintain state when going back;
function Card() {
	const [activeStep, setActiveStep] = useState(1);
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const [paymentSchedule, setpaymentSchedule] = useState('monthly');
	const [planName, setPlanName] = useState('');
	const [addons, setAddons] = useState<AddonsType>({
		onlineServices: {
			selected: false,
			cost: {
				monthly: 1,
				yearly: 10,
			},
		},
		largerStorage: {
			selected: false,
			cost: {
				monthly: 2,
				yearly: 20,
			},
		},
		customizableProfile: {
			selected: false,
			cost: {
				monthly: 2,
				yearly: 20,
			},
		},
	});

	function goToNextStep() {
		setActiveStep((prevStep) => prevStep + 1);
	}

	function goBack() {
		setActiveStep((prevStep) => prevStep - 1);
	}

	function changePlan() {
		setActiveStep(1);
	}

	function updateUserData(e: React.FormEvent<HTMLInputElement>) {
		const { name, value } = e.currentTarget;
		setUserData((prevState) => {
			return { ...prevState, [name]: value };
		});
	}

	function updateAddons(addonName: string) {
		let key = addonName as keyof AddonsType;
		let value = addons[addonName as keyof AddonsType];
		let selected = addons[addonName as keyof AddonsType].selected;
		setAddons((prevState) => {
			return { ...prevState, [key]: { ...value, selected: !selected } };
		});
	}

	let formStep;
	if (activeStep === 0) {
		formStep = (
			<FirstFormStep
				name={userData.name}
				email={userData.email}
				phone={userData.phone}
				goToNextStep={goToNextStep}
				updateUserData={updateUserData}
			/>
		);
	} else if (activeStep === 1) {
		formStep = (
			<SecondFormStep
				selectedPlan={planName}
				updatePlanName={setPlanName}
				paymentSchedule={paymentSchedule}
				updatePaymentSchedule={setpaymentSchedule}
				goToNextStep={goToNextStep}
				goBack={goBack}
			/>
		);
	} else if (activeStep === 2) {
		formStep = (
			<ThirdFormStep
				addons={addons}
				updateAddons={updateAddons}
				paymentSchedule={paymentSchedule}
				goToNextStep={goToNextStep}
				goBack={goBack}
			/>
		);
	} else if (activeStep === 3) {
		formStep = (
			<FourthFormStep
				planName={planName}
				paymentSchedule={paymentSchedule}
				addons={addons}
				goToNextStep={goToNextStep}
				goBack={goBack}
				changePlan={changePlan}
			/>
		);
	} else if (activeStep === 4) {
		formStep = <FinalFormStep goBack={goBack} />;
	}

	return (
		<div className='Card'>
			<Sidebar activeStep={activeStep} />
			<div className='card-content-container'>{formStep}</div>
		</div>
	);
}

export default Card;
