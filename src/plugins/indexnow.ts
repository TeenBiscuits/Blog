import dotenv from 'dotenv'
import { writeFileSync } from 'fs'

dotenv.config()
const myEnvVar = process.env.INDEXNOW_KEY

if (myEnvVar) {
	const filePath = `./public/${myEnvVar}.txt`
	const fileContent = `${myEnvVar}`
	writeFileSync(filePath, fileContent, 'utf-8')
	// eslint-disable-next-line no-console
	console.log('[IndexNow] Archivo creado correctamente en ./public')
} else {
	// eslint-disable-next-line no-console
	console.error('[IndexNow] La variable de entorno no está definida')
}
