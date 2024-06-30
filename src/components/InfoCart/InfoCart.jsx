import { Input, InputGroup } from 'rsuite'
import st from './InfoCart.module.css'

export function InfoCart() {
	return (
		<div className={st.infocart}>
			<p>Информация</p>
			<InputGroup>
				<InputGroup.Addon> %</InputGroup.Addon>
				<Input placeholder='Скидка на заказ' />
			</InputGroup>
			<InputGroup>
				<InputGroup.Addon> ₽</InputGroup.Addon>
				<Input placeholder='Цена доставки' />
			</InputGroup>
			<InputGroup>
				<InputGroup.Addon> ₽</InputGroup.Addon>
				<Input placeholder='Сервисный сбор' />
			</InputGroup>
		</div>
	)
}
