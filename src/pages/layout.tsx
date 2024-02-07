import Footer from "@components/footer"
import Header from "@components/header"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <Header />
            <main className="flex-1">
                <span className="sr-only">root layout</span>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
