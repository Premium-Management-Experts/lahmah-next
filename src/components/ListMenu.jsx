import React, { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '../styles/ListMenu.module.css';
import Accordion from '../components/Accordion';

export default function ListMenu() {
	const [showList, setShowList] = useState(false);
	const [activeAccordion, setActiveAccordion] = useState(null);
	const [activeAccordionRef, setActiveAccordionRef] = useState(null);

	const collapseActiveAccordion = () => {
		if (activeAccordion !== null) {
			setActiveAccordion(null);
		}
	};

	const scrollDown = (id, ref) => {
		// Calculate the scroll adjustment if the active accordion is above the clicked one
		let scrollAdjustment = 0;
		if (activeAccordion !== null && activeAccordion < id) {
			scrollAdjustment = -activeAccordionRef.current.offsetHeight;
		}

		// Set the new active accordion
		setActiveAccordion((prev) => (prev === id ? null : id));
		setActiveAccordionRef(ref);

		// Scroll to the new accordion with the adjustment
		window.scrollTo({
			top: ref.current.offsetTop + scrollAdjustment - 45,
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	};

	const accordion1Ref = useRef(null);
	const accordion2Ref = useRef(null);
	const accordion3Ref = useRef(null);
	const accordion4Ref = useRef(null);
	const accordion5Ref = useRef(null);
	const accordion6Ref = useRef(null);
	const accordion7Ref = useRef(null);
	const accordion8Ref = useRef(null);
	const accordion9Ref = useRef(null);
	const accordion10Ref = useRef(null);
	const accordion11Ref = useRef(null);
	const accordion12Ref = useRef(null);
	const accordion13Ref = useRef(null);
	const accordion14Ref = useRef(null);
	const accordion15Ref = useRef(null);

	return (
		<div className={styles['container']}>
			<div className={styles['navbar-nav']}>
				<div
					onClick={() => scrollDown(1, accordion1Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']} ${styles['active']} `}
				>
					Best Seller
				</div>
				<div
					onClick={() => scrollDown(2, accordion2Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Our Mix Grill
				</div>
				<div
					onClick={() => scrollDown(3, accordion3Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']} `}
				>
					Meal for one
				</div>
				<div
					onClick={() => scrollDown(4, accordion4Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Sandwiches
				</div>
				<div
					onClick={() => scrollDown(5, accordion5Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']} `}
				>
					Wrap Sandwiches
				</div>
				<div
					onClick={() => scrollDown(6, accordion6Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']} `}
				>
					Appetizer
				</div>
				<div
					onClick={() => scrollDown(7, accordion7Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Pans
				</div>
				<div
					onClick={() => scrollDown(8, accordion8Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Salad
				</div>
				<div
					onClick={() => scrollDown(9, accordion9Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Local Lamb
				</div>
				<div
					onClick={() => scrollDown(10, accordion10Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Syrian Lamb
				</div>
				<div
					onClick={() => scrollDown(11, accordion11Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Local Beef
				</div>
				<div
					onClick={() => scrollDown(12, accordion12Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Fresh Chicken
				</div>
				<div
					onClick={() => scrollDown(13, accordion13Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Ready To Cook
				</div>
				<div
					onClick={() => scrollDown(14, accordion14Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Ready To Grill
				</div>
				<div
					onClick={() => scrollDown(15, accordion15Ref)}
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Frozen Item
				</div>
			</div>
			<div>
				<div className='styles.contaner'>
					<Image
						className={`${styles['image']}`}
						src='https://cdn.makane.com/cdn-cgi/image/quality=80,fit=scale-down,format=auto/20211128-store-oxnp/banners/1109/86573674.jpg'
						alt='Your image description'
						width={1023}
						height={250}
					/>
				</div>
			</div>
			<Accordion
				ref={accordion1Ref}
				showList={activeAccordion === 1}
				id='1'
				className='divScroll'
			/>
			<Accordion
				ref={accordion2Ref}
				showList={activeAccordion === 2}
				id='2'
			/>
			<Accordion
				ref={accordion3Ref}
				showList={activeAccordion === 3}
				id='3'
				className='divScroll'
			/>
			<Accordion
				ref={accordion4Ref}
				showList={activeAccordion === 4}
				id='4'
				className='divScroll'
			/>
			<Accordion
				ref={accordion5Ref}
				showList={activeAccordion === 5}
				id='5'
				className='divScroll'
			/>
			<Accordion
				ref={accordion6Ref}
				showList={activeAccordion === 6}
				id='6'
				className='divScroll'
			/>
			<Accordion
				ref={accordion7Ref}
				showList={activeAccordion === 7}
				id='7'
				className='divScroll'
			/>
			<Accordion
				ref={accordion8Ref}
				showList={activeAccordion === 8}
				id='8'
				className='divScroll'
			/>
			<Accordion
				ref={accordion9Ref}
				showList={activeAccordion === 9}
				id='9'
				className='divScroll'
			/>
			<Accordion
				ref={accordion10Ref}
				showList={activeAccordion === 10}
				id='10'
				className='divScroll'
			/>
			<Accordion
				ref={accordion11Ref}
				showList={activeAccordion === 11}
				id='11'
				className='divScroll'
			/>
			<Accordion
				ref={accordion12Ref}
				showList={activeAccordion === 12}
				id='12'
				className='divScroll'
			/>
			<Accordion
				ref={accordion13Ref}
				showList={activeAccordion === 13}
				id='13'
				className='divScroll'
			/>
			<Accordion
				ref={accordion14Ref}
				showList={activeAccordion === 14}
				id='14'
				className='divScroll'
			/>
			<Accordion
				ref={accordion15Ref}
				showList={activeAccordion === 15}
				id='15'
				className='divScroll'
			/>{' '}
		</div>
	);
}
