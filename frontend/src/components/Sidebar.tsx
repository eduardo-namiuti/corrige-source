function Sidebar() {
    return (
        <aside className="flex min-h[(calc100vh-73px)] w-64 flex-col border-r border-slate-200 bg-white p-5">
            <nav className="space-y-2">

                <a
                    href="#"
                    className="block rounded-lg bg-slate-100 px-4 py-3 text-sm font-medium text-slate-900"
                >
                    Dashboard
                </a>

                <a
                    href="#"
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                    Redações
                </a>

                <a
                    href="#"
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                    Perfil
                </a>

            </nav>

            <button className="mt-auto rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-600 hover:bg-slate-50">
                Sair
            </button>
        </aside>
    )
}

export default Sidebar