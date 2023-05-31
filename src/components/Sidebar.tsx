import '../styles/Card.css';

type PropsType = {
	activeStep: number;
};

function Sidebar({ activeStep }: PropsType) {
	return (
		<div className='card-sidebar'>
			<div className='sidebar-flex-container'>
				<div className={activeStep === 0 ? 'step-number-container step-active' : 'step-number-container'}>
					<p className='step-number'>1</p>
				</div>
				<div className='step-content-container'>
					<p className='step-content-number'>Step 1</p>
					<p className='step-content-category'>Your Info</p>
				</div>
			</div>
			<div className='sidebar-flex-container'>
				<div className={activeStep === 1 ? 'step-number-container step-active' : 'step-number-container'}>
					<p className='step-number'>2</p>
				</div>
				<div className='step-content-container'>
					<p className='step-content-number'>Step 2</p>
					<p className='step-content-category'>Select Plan</p>
				</div>
			</div>
			<div className='sidebar-flex-container'>
				<div className={activeStep === 2 ? 'step-number-container step-active' : 'step-number-container'}>
					<p className='step-number'>3</p>
				</div>
				<div className='step-content-container'>
					<p className='step-content-number'>Step 3</p>
					<p className='step-content-category'>Add-Ons</p>
				</div>
			</div>
			<div className='sidebar-flex-container'>
				<div className={activeStep === 3 ? 'step-number-container step-active' : 'step-number-container'}>
					<p className='step-number'>4</p>
				</div>
				<div className='step-content-container'>
					<p className='step-content-number'>Step 4</p>
					<p className='step-content-category'>Summary</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
