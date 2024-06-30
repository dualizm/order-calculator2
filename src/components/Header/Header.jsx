import logo from '@/assets/logo.svg'
import st from './Header.module.css'
import { useState } from 'react'
import { GhostImage } from '../GhostImage/GhostImage'

export function Header() {
	const [clickCount, setClickCount] = useState(0)

	return (
		<header className={st.header}>
			<div className={st.logoContainer}>
				{clickCount < 5 && (
					<img
						onClick={() => setClickCount((p) => p + 1)}
						src={logo}
						alt='logo'
						width={40}
						height={40}
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
