/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { prisma, PrismaClient } from "@prisma/client";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	const readline = require('readline-sync');
	let nome = readline.question('digite o nome do aluno: ');
	let nota = parseInt(readline.question('digite a nota do aluno: '));
	
	const prisma = new PrismaClient();

	prisma.aluno.create({
		data: {
			name: nome,
			nota: nota
		}
	})
	.then(()=>{
		console.log('Salvo no banco de dados!');
		
	})
});
