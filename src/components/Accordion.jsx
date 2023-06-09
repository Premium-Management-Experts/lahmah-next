import React from 'react';
import styles from '../styles/Accordion.module.css';
import Image from 'next/image';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { IoMdArrowDropup } from 'react-icons/io';
import { BsList, BsListCheck } from 'react-icons/bs';
import { useRef, useState } from 'react';

const Accordion = () => {
	let [show, setShow] = useState(false);
	const [isIcon1Visible, setIsIcon1Visible] = useState(true);
	const handleClick = () => {
		setIsIcon1Visible((prev) => !prev);
		setShow((prev) => !prev);
	};

	return (
		<div
			className={`${styles.card} ${styles.collection} ${styles['col-12']} ${
				styles.py - 2
			} ${styles.px - 1}`}
		>
			<div
				className={`${styles['card-header']} ${styles.row} ${styles['flex-between']} ${styles['align-center']}`}
			>
				<div>
					<span className={`${styles['collection-title']}`}>
						Best Seller
					</span>
					<span>(5)</span>
				</div>
				<div onClick={handleClick}>
					{isIcon1Visible ? (
						<MdOutlineArrowDropDown className={styles.iconBsList} />
					) : (
						<IoMdArrowDropup className={styles.iconBsList} />
					)}
				</div>
			</div>
			<div>
				<div
					style={{ display: show ? 'block' : 'none' }}
					className={`${styles['card-body']} ${styles['px-0']}`}
				>
					<div className={`${styles.row}`}>
						<div
							className={`${styles['panel-wrapper']} ${styles['col-sm-12']} ${styles['col-md-6']} ${styles['p-0']}`}
						>
							<div
								className={`${styles['product-panel']} ${styles['flex-row']} ${styles['flex-between']} ${styles['px-3']} ${styles['py-2']}`}
							>
								<div
									className={`${styles['product-info']} ${styles['flex-col']} ${styles['flex-grow']} ${styles['flex-between']}`}
								>
									<div
										className={`${styles['title']} ${styles['mb-1']}`}
									>
										Kabab Lahmah And Fahmah
									</div>
									<div
										className={`${styles['description']} ${styles['truncate']}`}
									>
										(Our Way Of Giving You A Special Experience With
										Tasty And Juicy Kabab Handmade With Nuts And
										Cheese) Served With Grilled Tomato- Grilled Onion-
										Hummus- Mutabal- Arabic Salad- Pickles- Beiwaz-
										Arabic Bread- Mahalabia
									</div>
									<div
										className={`${styles.row} ${styles['flex-between']} ${styles['mb-2']}`}
									>
										<div
											className={`${styles['product-price']} ${styles['col-12']} ${styles['col-sm-5']} ${styles.red}`}
										>
											<span>49.00 AED</span>
										</div>
										<div
											className={`${styles['custom-label']} ${styles['col-12']} ${styles['col-sm-7']}`}
										></div>
									</div>
								</div>
								<div
									className={`${styles['product-image']} ${styles['cover']} ${styles['flex-col']} ${styles['position-relative']} ${styles['round']} ${styles['plx-4']}`}
								>
									<div
										className={`${styles['image-container']} ${styles['position-relative']}`}
									>
										<Image
											src='https://cdn.makane.com/cdn-cgi/image/background=%23ffffff,quality=70,fit=scale-down,format=auto/20211128-store-oxnp/products/15767641/37182369.jpg'
											className={styles['zaid-img']}
											alt='Kabab Lahmah And Fahmah'
											width='500'
											height='500'
										/>
									</div>
								</div>
							</div>
						</div>

						<div
							className={`${styles['panel-wrapper']} ${styles['col-sm-12']} ${styles['col-md-6']} ${styles['p-0']}`}
						>
							<div
								className={`${styles['product-panel']} ${styles['flex-row']} ${styles['flex-between']} ${styles['px-3']} ${styles['py-2']}`}
							>
								<div
									className={`${styles['product-info']} ${styles['flex-col']} ${styles['flex-grow']} ${styles['flex-between']}`}
								>
									<div
										className={`${styles['title']} ${styles['mb-1']}`}
									>
										Humus
									</div>
									<div className={styles['description']}></div>
									<div
										className={`${styles.row} ${styles['flex-between']} ${styles['mb-2']}`}
									>
										<div
											className={`${styles['product-price']} ${styles['col-12']} ${styles['col-sm-5']} ${styles.red}`}
										>
											<span>15.00 AED</span>
										</div>
										<div
											className={`${styles['custom-label']} ${styles['col-12']} ${styles['col-sm-7']}`}
										></div>
									</div>
								</div>
								<div
									className={`${styles['product-image']} ${styles['cover']} ${styles['flex-col']} ${styles['position-relative']} ${styles['round']} ${styles['plx-4']}`}
								>
									<div
										className={`${styles['image-container']} ${styles['position-relative']}`}
									>
										<Image
											src='https://cdn.makane.com/cdn-cgi/image/background=%23ffffff,quality=70,fit=scale-down,format=auto/20211128-store-oxnp/products/15767648/34071286.jpg'
											className={styles['zaid-img']}
											alt='Humus'
											width='500'
											height='500'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
