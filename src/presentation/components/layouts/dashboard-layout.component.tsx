import Footer from "../ui/footer.component";
import Navbar from "../ui/navbar.component";
import { Outlet } from "react-router";

export default function DashboardLayout() {
    return (
        <main className="flex min-h-screen flex-col bg-(--custom-color) px-4 py-24 dark:bg-gray-900">
            <Navbar />
            <div className="flex flex-1 items-center justify-center">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}