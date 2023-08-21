import React from 'react';
import { Link } from 'react-router-dom';

const ReferenceSectionComponent = () => {
	return (
		<div className='footer__reference-section'>
			<div className='footer__reference-category'>
				<div className='footer__reference-category-title'>
					<h4>Product</h4>
				</div>
				{/* <LinkComponent
						path='/'
						header='How it works'
					/>
					<LinkComponent
						path='/'
						header='Features'
					/>
					<LinkComponent
						path='/'
						header='Pricing'
					/> */}
				<div className='footer__link'>
					<Link to='/'>How it works</Link>
				</div>
				<div className='footer__link'>
					<Link to='/'>Features</Link>
				</div>
				<div className='footer__link'>
					<Link to='/'>Pricing</Link>
				</div>
			</div>
			<div className='footer__reference-category'>
				<div className='footer__reference-category-title'>
					<h4>Support</h4>
				</div>
				<div className='footer__link'>
					<Link to='/'>FAQ</Link>
				</div>
				<div className='footer__link'>
					<Link to='/'>API documentation</Link>
				</div>
			</div>
			<div className='footer__reference-category'>
				<div className='footer__reference-category-title'>
					<h4>Connect</h4>
				</div>
				<div className='footer__link'>
					<Link to='/'>Sign up</Link>
				</div>
				<div className='footer__link'>
					<Link to='/'>Contact us</Link>
				</div>
			</div>
		</div>
		// <div className='footer__policy-section'>
		// 	<div className='footer__link'>
		// 		<Link to='/'>About us</Link>
		// 	</div>
		// 	<div className='footer__link'>
		// 		<Link to='/'>Privacy</Link>
		// 	</div>
		// 	<div className='footer__link'>
		// 		<Link to='/'>Terms & Conditions</Link>
		// 	</div>
		// 	<div className='footer__link'>
		// 		<Link to='/'>Cookie settings</Link>
		// 	</div>
		// </div>
		// <div className='footer__copyright-notice'>
		// 	<hr className='footer__copyright-notice_split-line'>
		// 		{/* <hr></hr> */}
		// 	</hr>
		// 	<p className='footer__copyright-notice_text'>
		// 		&copy; Copyright 2023 LinkUp
		// 	</p>
		// 	<hr className='footer__copyright-notice_split-line'>
		// 		{/* <hr></hr> */}
		// 	</hr>
		// </div>
	);
};

export default ReferenceSectionComponent;
