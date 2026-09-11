import { useState } from "react"


function Cadastro() {

    const [error, setError] = useState('')

    /* Valores de cadastro */
    const [fname, setFname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confpass, setConfpass] = useState('')


    /* Verificação */

    const handleSubmit = (event: React.FormEvent) =>{
        event.preventDefault()

        /* Verificação de senha */
        if (password !== confpass){
            setError('As senhas não são iguais')
            setPassword('')
            setConfpass('')
            return
    }
        else{
            setError('')
        }

        console.log(fname)
        console.log(username)
        console.log(email)
        console.log(password)
    }


    return (
        <main>
            <div className="flex flex-col justify-center items-center space-y-6 h-screen border">
                <h1 className="text-xl font-bold text-slate-900 border-b">Faça seu cadastro</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block" htmlFor="fname">Nome completo</label>
                        <input
                            id="fname"
                            type="text"
                            value={fname}
                            onChange = {(event) => setFname(event.target.value)}
                            className="border-b w-64"
                        />
                    </div>

                    <div>
                        <label className="block" htmlFor="username">Usuário</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange = {(event) => setUsername(event.target.value)}
                            className="border-b w-64"
                        />
                    </div>

                    <div>
                        <label className="block" htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange = {(event) => setEmail(event.target.value)}
                            className="border-b w-64"
                        />
                    </div>

                    <div>
                        <label className="block" htmlFor="password">Senha</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange = {(event) => setPassword(event.target.value)}
                            className="border-b w-64"
                        />
                    </div>

                    <div>
                        <label className="block" htmlFor="confpassword">Confirmar senha</label>
                        <input
                            id="confpassword"
                            type="password"
                            value={confpass}
                            onChange = {(event) => setConfpass(event.target.value)}
                            className="border-b w-64"
                        />
                        {error && <p>{error}</p>}
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </main>
    )
}

export default Cadastro