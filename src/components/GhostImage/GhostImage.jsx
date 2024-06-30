import { useEffect, useState } from 'react'
import st from './GhostImage.module.css'

export function GhostImage(props) {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	function handleMouseMove(event) {
		const d = 10
		setPosition({
			x: event.clientX + d,
			y: event.clientY + d,
		})
	}

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener(
				'mousemove',
				handleMouseMove,
			)
		}
	}, [])

	return (
		<img
			style={{
				position: 'absolute',
				left: `${position.x}px`,
				top: `${position.y}px`,
				pointerEvents: 'none',
				zIndex: 'var(--z-index-max)',
			}}
			{...props}
		/>
	)
}
