import React from 'react';
import Image from 'next/image';
import styles from '../styles/ListMenu.module.css';

export default function ListMenu() {
	return (
		<div className={styles['container']}>
			<div className={styles['navbar-nav']}>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']} ${styles['active']}`}
				>
					Best Seller
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Our Mix Grill
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Meal for one
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Sandwiches
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Wrap Sandwiches
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Appetizer
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Pans
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Salad
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Local Lamb
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Syrian Lamb
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Local Beef
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Fresh Chicken
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Ready To Cook
				</div>
				<div
					className={`${styles['nav-item']} ${styles['nav-link']} ${styles['mrx-4']}`}
				>
					Ready To Grill
				</div>
				<div
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
		</div>
	);
}
