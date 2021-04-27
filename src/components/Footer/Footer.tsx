import styles from './Footer.module.css'

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<a href='https://www.github.com/ghana7989'>Pavan Chindukuri</a>
			<br />
			{currentYear}
		</footer>
	)
}
