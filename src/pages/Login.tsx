import { useState } from "react"

function Login() {

    /* Valores */
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    /* Função de retorno */
    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault()

        console.log(username)
        console.log(password)
    }

    return (
        <main>
            <div className="flex flex-col justify-center items-center space-y-4 h-screen border">
                <h1 className="text-xl font-bold text-slate-900 border-b">
                    Bem-vindo(a) de volta!
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block" htmlFor="username">Usuário</label>
                        <input
                            id="username"
                            type="text"
                            value = {username}
                            onChange = {(event) => setUsername(event.target.value)}
                            className="border-b w-64"
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="password">Senha</label>
                        <input
                            id="password"
                            type="password"
                            value = {password}
                            onChange = {(event) => setPassword(event.target.value)}
                            className="border-b w-64"
                        />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </main>
    )
}

export default Login