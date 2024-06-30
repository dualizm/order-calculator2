const { mkdir, writeFile } = require('node:fs')
const { join } = require('node:path')
const readline = require('node:readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const Jsxcontent = (name) =>
	`import st from './${name}.module.css'

export function ${name}() {
  return (
    <div className={st.${name.toLowerCase()}}>
    </div>
  )
}`

const cssContent = (name) =>
	`.${name.toLowerCase()} {

}`

const formatJsxFile = (name) => `${name}.jsx`
const formatModuleCssFile = (name) => `${name}.module.css`

rl.question('Enter path: ', (path) => {
	path = join(__dirname, '../src', path)

	rl.question('Enter new component name: ', (name) => {
		console.log(`Start creating component [${name}]`)

		const componentPath = join(path, name)

		mkdir(componentPath, (err) => {
			if (err) {
				console.error(err)
				return
			}

			console.log(`Create dir [${name}]`)
		})

		writeFile(
			join(componentPath, formatJsxFile(name)),
			Jsxcontent(name),
			(err) => {
				if (err) {
					console.error(err)
					return
				}

				console.log(`Create ${formatJsxFile(name)}`)
			},
		)

		writeFile(
			join(componentPath, formatModuleCssFile(name)),
			cssContent(name),
			(err) => {
				if (err) {
					console.error(err)
					return
				}
				console.log(`Create ${formatModuleCssFile(name)}`)
			},
		)

		console.log('The component was created successfully!')

		rl.close()
	})
})
