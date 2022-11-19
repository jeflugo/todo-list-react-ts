import style from './Footer.module.css'

const Footer = () => (
	<h6
		className={`${style.size} d-flex justify-content-between align-items-center m-0`}
	>
		<span>
			<span>&copy; Copyright 2022 </span>
			<a
				href='https://www.linkedin.com/in/jeferson-lugo-37279424b/'
				target='blank'
				title='Go to my Linkdin'
			>
				Jeferson Lugo
			</a>
		</span>
		<span>
			<a
				href='https://github.com/jeflugo/todo-list-react-ts'
				target='blank'
				title='Go to Github'
			>
				Github Repo
			</a>
		</span>
	</h6>
)

export default Footer
