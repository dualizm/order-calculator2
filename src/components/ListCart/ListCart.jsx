import { IconButton, Input } from 'rsuite'
import st from './ListCart.module.css'
import PlusIcon from '@rsuite/icons/Plus'

export function ListCart() {
	return (
		<div className={st.listcart}>
			<div className={st.addcart}>
				<p>Заказы</p>
				<IconButton icon={<PlusIcon />}>
					Добавить заказ
				</IconButton>
				<Input placeholder='Имя' />
				<Input placeholder='Цены' />
			</div>
		</div>
	)
}
