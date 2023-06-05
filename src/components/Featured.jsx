import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Featured = () => {
	return (
		<div className={styles['container']}>
			<div className={styles['shader']}>
				<div className={styles['banner']}>
					<img
						src='https://cdn.makane.com/cdn-cgi/image/quality=80,fit=scale-down,format=auto/20211128-store-oxnp/branding/banner-79911731406.gif'
						alt='Banner'
					/>
				</div>
				<div className={styles['bottom-banner']}>
					<div className={styles['logo']}>logo</div>
					<div className={styles['nameLogo']}>Lahmah & Fahmah</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
