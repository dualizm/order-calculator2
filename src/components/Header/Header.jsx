import logo from '@/assets/logo.svg'
import st from './Header.module.css'
import { useRef, useState } from 'react'
import { GhostImage } from '../GhostImage/GhostImage'

export function Header() {
	const [clickCount, setClickCount] = useState(0)
	const logoRef = useRef(null)

	function shakeImage() {
		logoRef.current.classList.add(st.shake)

		logoRef.current.addEventListener(
			'animationend',
			() => {
				logoRef.current.classList.remove(st.shake)
			},
			{ once: true },
		)
	}

	return (
		<header className={st.header}>
			<div className={st.logoContainer}>
				{clickCount < 5 && (
					<img
						onClick={() => {
							setClickCount((p) => p + 1)
							shakeImage()
						}}
						src={logo}
						alt='logo'
						width={40}
						height={40}
						className={st.logo}
						ref={logoRef}
					/>
				)}
				{clickCount >= 5 && (
					<GhostImage
						src={logo}
						alt='ghost'
						width={40}
						height={40}
					/>
				)}
				<p>Order Calculator 2</p>
			</div>
		</header>
	)
}
