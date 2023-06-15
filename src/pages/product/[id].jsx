import React, { useState, useEffect, useRef } from 'react';

import styles from '../../styles/ProductId.module.css';
import { FaShareSquare } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { LuMove } from 'react-icons/lu';
const ProductId = () => {
	const [scale, setScale] = useState(1);
	const [transformOrigin, setTransformOrigin] = useState('0% 0%');
	const [showImage, setShowImage] = useState(false);
	const [imageUrl, setImageUrl] = useState('');
	const photoRef = useRef(null);

	useEffect(() => {
		if (photoRef.current) {
			photoRef.current.style.backgroundImage =
				'url(https://cdn.makane.com/cdn-cgi/image/background=%23ffffff,width=500,quality=80,fit=scale-down,format=auto/20211128-store-oxnp/products/15767641/37182369.jpg)';
		}
	}, []);

	const handleMouseOver = () => {
		setScale(1.2);
	};

	const handleMouseOut = () => {
		setScale(1);
	};

	const handleMouseMove = (e) => {
		const originX =
			((e.pageX - e.target.offsetLeft) / e.target.clientWidth) * 100 - 38;
		const originY =
			((e.pageY - e.target.offsetTop) / e.target.clientHeight) * 100 - 38;
		setTransformOrigin(`${originX}% ${originY}%`);
	};

	const handleButtonClick = (event) => {
		setShowImage(true);
		setImageUrl(event.currentTarget.dataset.url);
	};

	const handleMainClick = () => {
		setShowImage(false);
		setImageUrl('');
	};

	return (
		<div className={styles['container']}>
			<div className={styles['product']}>
				<div className={styles['header']}>
					{/* <div>
						<i className={styles['fas']}></i>
					</div> */}
					<div className={`${styles['product-image']} ${styles['cover']}`}>
						<div className={styles['tiles']}>
							<div
								className={styles['tile']}
								onMouseOver={handleMouseOver}
								onMouseOut={handleMouseOut}
								onMouseMove={handleMouseMove}
							>
								<div
									ref={photoRef}
									className={styles['photo']}
									style={{
										transform: `scale(${scale})`,
										transformOrigin: transformOrigin,
									}}
								></div>
							</div>
						</div>
						<div className={styles['image-modal']}>
							<span className={styles['modal-close']}>×</span>
							<img
								src='https://cdn.makane.com/cdn-cgi/image/background=%23ffffff,width=500,quality=80,fit=scale-down,format=auto/20211128-store-oxnp/products/15767641/37182369.jpg'
								className={`${styles['image-modal-content']} ${styles['mb-5']} ${styles['round']} ${styles['zaid-img']}`}
							/>
						</div>
						<div
							className={`${styles['flex-row']} ${styles['flex-between']} ${styles['align-center']} ${styles['product-image-footer']}`}
						>
							<div>
								{/* <button
									id='show-image-modal'
									className={styles['zaid-button']}
								>
									Show Image
									<LuMove
										className={`${styles['fas']} ${styles['fa-expand-arrows-alt']} ${styles['mx-1']}`}
									/>
								</button> */}
								<div>
									<div className={styles.btn_main}>
										<button
											// className={styles.airimage}
											id='show-image-modal'
											className={styles['zaid-button']}
											data-url='https://cdn.makane.com/cdn-cgi/image/background=%23ffffff,width=500,quality=80,fit=scale-down,format=auto/20211128-store-oxnp/products/15767641/37182369.jpg'
											onClick={handleButtonClick}
										>
											Show Image
											<LuMove
												className={`${styles['fas']} ${styles['fa-expand-arrows-alt']} ${styles['mx-1']}`}
											/>
										</button>
									</div>
									<div
										className={`${styles.main} ${
											showImage ? styles.main2 : ''
										}`}
										onClick={handleMainClick}
									>
										{showImage && (
											<>
												<img
													className={styles.boximage}
													src={imageUrl}
													alt='one'
												/>
												<i className={styles.close}></i>
											</>
										)}
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
				<div
					className={`${styles['container-fluid']} ${styles['max740']} ${styles['my-4']}`}
				>
					<div className={styles['product-info']}>
						<div
							className={`${styles['row']} ${styles['align-items-center']} ${styles['mb-2']}`}
						>
							<h1
								className={`${styles['title']} ${styles['col-12']} ${styles['col-sm-6']} ${styles['m-0']} ${styles['zaid-h1']}`}
							>
								Kabab Lahmah And Fahmah
							</h1>
							<div
								className={`${styles['price']} ${styles['col-12']} ${styles['col-sm-6']} ${styles['mb-0']} ${styles['text-right']}`}
							>
								<div
									className={`${styles['product-price']} ${styles['red']}`}
								>
									<span>49.00 AED</span>
								</div>
								<br />
								<span className={styles['custom-label']}></span>
							</div>
						</div>
						<div className={`${styles['flex-row']} ${styles['mb-3']}`}>
							<div
								className={`${styles['col-12']} ${styles['col-sm-6']} ${styles['m-0']}`}
							>
								<div
									className={`${styles['row']} ${styles['align-items-center']} ${styles['mb-2']} ${styles['share-product']}`}
								>
									<span
										className={`${styles['mrx-2']} ${styles['style-slMPx']}`}
										id='style-slMPx'
									>
										Share
									</span>
									<FaShareSquare
										className={`${styles['fas']} ${styles['fa-share-square']} ${styles['style-1Qcsj']}`}
										id='style-1Qcsj'
									/>
									{/* <i
										className={`${styles['fas']} ${styles['fa-share-square']} ${styles['style-1Qcsj']}`}
										id='style-1Qcsj'
									></i> */}
								</div>
							</div>
						</div>
						<div className={`${styles['flex-row']} ${styles['mb-3']}`}>
							<div className={styles['description']}>
								<p className={`${styles['mb-0']} ${styles['zaid-p']}`}>
									(Our Way Of Giving You A Special Experience With
									Tasty And Juicy Kabab Handmade With Nuts And Cheese)
									Served With Grilled Tomato- Grilled Onion- Hummus-
									Mutabal- Arabic Salad- Pickles- Beiwaz- Arabic Bread-
									Mahalabia
								</p>
							</div>
						</div>
					</div>
					<form>
						<div className={styles['custom-field-form']}>
							<div
								className={`${styles['custom-field']} ${styles['radio']}`}
							>
								<div
									className={`${styles['flex-row']} ${styles['flex-between']}`}
								>
									<div
										className={`${styles['custom-field-title']} ${styles['flex']}`}
									>
										Your Choice From Size
										<span
											className={`${styles['required']} ${styles['mlx-1']}`}
										>
											(required)
										</span>
									</div>
								</div>
								<div
									className={`${styles['custom-option']} ${styles['flex-row']} ${styles['flex-between']}`}
								>
									<input
										type='radio'
										id='cf891beaef17421a9d71ed633329d34d-0'
										value='cf891beaef17421a9d71ed633329d34d'
										name='zaid'
									/>
									<label
										htmlFor='cf891beaef17421a9d71ed633329d34d-0'
										className={`${styles['my-1']} ${styles['flex']} ${styles['justify-content-between']} ${styles['w-100']}`}
									>
										<div
											className={`${styles['flex']} ${styles['align-items-center']}`}
										>
											<div
												className={`${styles['radio']} ${styles['mrx-3']}`}
											>
												<div className={styles['circle']}></div>
											</div>
											<div>Combo meal for one</div>
										</div>
									</label>
								</div>
								<div
									className={`${styles['custom-option']} ${styles['flex-row']} ${styles['flex-between']}`}
								>
									<input
										type='radio'
										id='65a3aa2160af44298e6e4f5ff23164a1-0'
										value='65a3aa2160af44298e6e4f5ff23164a1'
										name='zaid'
									/>
									<label
										htmlFor='65a3aa2160af44298e6e4f5ff23164a1-0'
										className={`${styles['my-1']} ${styles['flex']} ${styles['justify-content-between']} ${styles['w-100']}`}
									>
										<div
											className={`${styles['flex']} ${styles['align-items-center']}`}
										>
											<div
												className={`${styles['radio']} ${styles['mrx-3']}`}
											>
												<div className={styles['circle']}></div>
											</div>
											<div>Combo meal for two</div>
										</div>
										<span
											className={`${styles['nobreak']} ${styles['ltr']} ${styles['price']}`}
										>
											<span
												className={`${styles['custom-field-price-plus-sign']} ${styles['price']}`}
											>
												+
											</span>{' '}
											45.00 AED
										</span>
									</label>
								</div>
								<div
									className={`${styles['custom-option']} ${styles['flex-row']} ${styles['flex-between']}`}
								>
									<input
										type='radio'
										id='1e6d1dba462545c2b57a35951d6af0ca-0'
										value='1e6d1dba462545c2b57a35951d6af0ca'
										name='zaid'
									/>
									<label
										htmlFor='1e6d1dba462545c2b57a35951d6af0ca-0'
										className={`${styles['my-1']} ${styles['flex']} ${styles['justify-content-between']} ${styles['w-100']}`}
									>
										<div
											className={`${styles['flex']} ${styles['align-items-center']}`}
										>
											<div
												className={`${styles['radio']} ${styles['mrx-3']}`}
											>
												<div className={styles['circle']}></div>
											</div>
											<div>Combo meal for four</div>
										</div>
										<span
											className={`${styles['nobreak']} ${styles['ltr']} ${styles['price']}`}
										>
											<span
												className={`${styles['custom-field-price-plus-sign']} ${styles['price']}`}
											>
												+
											</span>{' '}
											131.00 AED
										</span>
									</label>
								</div>
							</div>
							<div
								className={`${styles['custom-field']} ${styles['text']}`}
							>
								<div
									className={`${styles['flex-row']} ${styles['flex-between']}`}
								>
									<div
										className={`${styles['custom-field-title']} ${styles['flex']}`}
									>
										Your Note:
									</div>
								</div>
								<div
									className={`${styles['flex-row']} ${styles['flex-between']}`}
								>
									<input
										type='text'
										className={styles['form-control']}
									/>
								</div>
							</div>
						</div>
					</form>
					<div
						className={`${styles['quantity']} ${styles['flex-row']} ${styles['flex-between']} ${styles['align-center']} ${styles['py-3']}`}
					>
						<div className={styles['label']}>Quantity</div>
						<div
							className={`${styles['quantity-selector']} ${styles['flex-row']} ${styles['align-center']} ${styles['mt-2']}`}
						>
							<button
								className={`${styles['adjust-quantity-btn']} ${styles['pushable']} ${styles['zaid-button']}`}
							>
								{/* <i
									className={`${styles['fas']} ${styles['fa-minus']}`}
								></i> */}
								<FaMinus
									className={`${styles['fas']} ${styles['fa-minus']}`}
								/>
							</button>
							<div className={styles['label']}>1</div>
							<button
								className={`${styles['adjust-quantity-btn']} ${styles['pushable']} ${styles['zaid-button']}`}
							>
								<FaPlus
									className={`${styles['fas']} ${styles['fa-plus']}`}
								/>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductId;
