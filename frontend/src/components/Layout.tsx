import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="min-h screen bg-slate-50">

            <Header/>

            <div className="flex">

                <Sidebar/>

                <main className="flex-1">
                    <Outlet/>
                </main>

            </div>

        </div>
    )
}

export default Layout