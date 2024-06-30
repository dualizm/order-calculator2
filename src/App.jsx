import { Header } from './components/Header/Header'
import { InfoCart } from './components/InfoCart/InfoCart'
import { ListCart } from './components/ListCart/ListCart'
import { ResultCart } from './components/ResultCart/ResultCart'
import st from './App.module.css'

function App() {
	return (
		<>
			<Header />
			<div className={st.cart}>
				<InfoCart />
				<ListCart />
				<ResultCart />
			</div>
		</>
	)
}

export default App
