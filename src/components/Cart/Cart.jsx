import { InfoCart } from '../InfoCart/InfoCart'
import { ListCart } from '../ListCart/ListCart'
import { ResultCart } from '../ResultCart/ResultCart'
import st from './Cart.module.css'

export function Cart() {
	return (
		<div className={st.cart}>
			<InfoCart />
			<ListCart />
			<ResultCart />
		</div>
	)
}
