// *Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './App.module.css'

// *Components
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

function App() {
	return (
		<main
			className={`${style.size} mx-auto d-flex flex-column justify-content-between py-3 px-2`}
		>
			<Header />
			<TodoForm />
			<TodoList />
			<Footer />
		</main>
	)
}

export default App
