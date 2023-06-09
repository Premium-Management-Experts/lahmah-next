import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<div
			className={`${styles['col-12']} ${styles['flex-between']} ${styles['footer-flat']} ${styles['mb-4']}`}
		>
			<div
				className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['flex-wrap']} ${styles['mb-2']}`}
			>
				<div className={styles['partner-logo']}>
					<img
						src='https://d14ty4rvj8rn16.cloudfront.net/static/store/views/partner-logos/dark/payment/cashondelivery.png'
						className={styles['zaid-img']}
					/>
				</div>
				<div className={styles['partner-logo']}>
					<img
						src='https://d14ty4rvj8rn16.cloudfront.net/static/store/views/partner-logos/dark/misc/makane-logo-type-en.svg'
						className={styles['zaid-img']}
					/>
				</div>
				<div className={styles['partner-logo']}>
					<img
						src='https://d14ty4rvj8rn16.cloudfront.net/static/store/views/partner-logos/dark/misc/makane-logo-type-ar.svg'
						className={styles['zaid-img']}
					/>
				</div>
			</div>
			<div
				className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-center']} ${styles['flex-wrap']} ${styles['mb-2']}`}
			>
				<div
					className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-center']}`}
				>
					<div className={styles['static-page-link']}>About Us</div>
					<div className={styles['dash px-1']}>|</div>
				</div>
				<div
					className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-items-center']}`}
				>
					<div className={styles['static-page-link']}>Privacy Policy</div>
					<div className={styles['dash px-1']}>|</div>
				</div>
				<div
					className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-items-center']}`}
				>
					<div className={styles['static-page-link']}>
						Shipping &amp; Delivery Policy
					</div>
					<div className={styles['dash px-1']}>|</div>
				</div>
				<div
					className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-items-center']}`}
				>
					<div className={styles['static-page-link']}>
						Terms &amp; Conditions
					</div>
					<div className={styles['dash px-1']}>|</div>
				</div>
				<div
					className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-items-center']}`}
				>
					<div className={styles['static-page-link']}>Contact Us</div>
					<div className={styles['dash px-1']}>|</div>
				</div>
				<div
					className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-items-center']}`}
				>
					<div className={styles['static-page-link']}>
						Cancelation &amp; Refund Policy
					</div>
				</div>
			</div>
			<div
				className={`${styles['flex-row']} ${styles['justify-content-center']} ${styles['align-items-center']} ${styles['mb-2']}`}
			>
				<div>
					<a
						href='https://www.facebook.com/lahmah.fahmah/'
						className={`${styles['social-icon']} ${styles['mx-2']} ${styles['zaid-a']}`}
					>
						<img
							width='36'
							src='https://d14ty4rvj8rn16.cloudfront.net/static/store/views/social-icons/facebook.png'
							className={styles['zaid-img']}
						/>
					</a>
				</div>
			</div>
			<div
				className={`${styles['flex']} ${styles['flex-column']} ${styles['text-center']} ${styles['mt-4']} ${styles['style-lQhCo']}`}
				id='style-lQhCo'
			>
				<div
					className={`${styles['m-0']} ${styles['d-flex']} ${styles['justify-content-center']} ${styles['align-items-center']}`}
				></div>
				<div
					className={`${styles['flex-row']} ${styles['flex-center']} ${styles['align-center']} ${styles['text-center']} ${styles['force-ltr']}`}
				>
					<p className={`${styles['footer-text']} ${styles['zaid-p']}`}>
						This site is protected by reCAPTCHA and the google
						<a
							href='https://www.google.com/intl/en/policies/privacy/'
							className={styles['zaid-a']}
						>
							<strong> Privacy Policy </strong>
						</a>
						and
						<a
							href='https://policies.google.com/terms'
							className={styles['zaid-a']}
						>
							<strong> Terms of Service</strong>
						</a>
						apply.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
