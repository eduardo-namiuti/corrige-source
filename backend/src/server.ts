import { createServer } from 'node:http'

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

        request.on('end', () =>{

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

            console.log(data)

            response.end('Dados recebidos!')
        })

        return
   } 
   response.statusCode = 404
   response.end('Rota não encontrada')
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})
