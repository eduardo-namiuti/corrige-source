function Header(){
    return(
        <header className="flex items-center justfity-between border-b border-slate-200 bg-white px-8 py-4">
            <h1 className="text-xl font-bold text-slate-900">
                Corrige
            </h1>

            <button className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100">
                Entrar
            </button>
        </header>
    )
}

export default Header