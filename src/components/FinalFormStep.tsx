import thankYouIcon from '../assets/icon-thank-you.svg';

type PropsType = {
	goBack: () => void;
};

function FinalFormStep({ goBack }: PropsType) {
	return (
		<div className='FormStep'>
			<div className='final-step-container'>
				<img src={thankYouIcon} alt='check mark' className='confirmation-icon' />
				<h2 className='step-header confirmation-header'>Thank you!</h2>
				<p className='secondary-light-text confirmation-subheader'>
					Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
					support, please feel free to email us at support@loremgaming.com.
				</p>
			</div>
		</div>
	);
}

export default FinalFormStep;
