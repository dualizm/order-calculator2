import { IconButton, Input, InputGroup } from 'rsuite'
import { Copy } from '@rsuite/icons'
import st from './ResultCart.module.css'

export function ResultCart() {
	return <div className={st.resultcart}>
		<label className={st.label}>
			<IconButton icon={<Copy />} block>Скопировать результат</IconButton>
		</label>
		<InputGroup>
			<Input placeholder='Номер телефона, банка' />
		</InputGroup>
		<p>Сумма заказа</p>
	</div>
}
