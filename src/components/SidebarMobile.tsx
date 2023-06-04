import '../styles/Card.css';
import sidebarMobileImg from '../assets/bg-sidebar-mobile.svg';

type PropsType = {
	activeStep: number;
};

function SidebarMobile({ activeStep }) {
	return (
		<div className='sidebar-mobile'>
			<img src={sidebarMobileImg} alt='' className='sidebar-mobile-background' />
		</div>
	);
}

export default SidebarMobile;
