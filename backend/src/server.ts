import { createServer } from 'node:http'
import { pool } from './database.js'

interface RegisterData{
    fullName: string
    username: string
    email: string
    password: string
}

const server = createServer((request, response) =>{
    console.log('Método:', request.method)
    console.log('URL:', request.url)
    
    if(request.method === "GET" && request.url === '/api'){
        response.end('GET funcionando!')
        return
    } 

   if (request.method === 'POST' && request.url === '/api/auth/register'){
        let body = ''

        request.on('data', (chunk) =>{
            body += chunk
        })

        request.on('end', async () =>{

            let data: RegisterData

            try{
                data = JSON.parse(body)
            } catch {
                response.statusCode = 400
                response.end('JSON inválido!')
                return
            }

            if(!data.fullName){
                response.statusCode = 400
                response.end('Nome completo é obrigatório!')
                return
            }
            
            if(!data.username){
                response.statusCode = 400
                response.end('Nome de usuário é obrigatório!')
                return
            }
            
            if(!data.email){
                response.statusCode = 400
                response.end('E-mail é obrigatório!')
                return
            }

            if(!data.password){
                response.statusCode = 400
                response.end('Senha é obrigatória!')
                return
            }

            try{
                await pool.query(
                `
                    INSERT INTO users
                    (full_name, username, email, password_hash, role)
                    VALUES($1, $2, $3, $4, $5)
                `,
                [
                    data.fullName,
                    data.username,
                    data.email,
                    'TESTE',
                    'aluno'
                ]
            )
        } catch (error) {
            console.error('Erro ao cadastrar aluno: ', error)
            response.statusCode = 500
            response.end('Erro ao cadastrar aluno!')
            return
        }

        console.log(data)
        response.end('Aluno cadastrado!')
    
    
    })
    
    return
    
    }
    
    response.statusCode = 404
    response.end('Rota não encontrada')
})


pool.query('SELECT 1')
    .then(() => {
        console.log('Banco de dados conectado!')
    })
    .catch((error) =>{
        console.error('Erro ao conectar ao banco:', error)
    })

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
