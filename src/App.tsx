import Navbar from "@/Components/Navbar/Navbar";
import Home from "@/Components/Home/Home";
import { useEffect, useState } from "react";
import { SelectedPage } from "./types/Shared";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home,
    );
    const [isTopPage, setIsTopPage] = useState<boolean>(true);

    useEffect(() => {
        const topPageHandler = () => {
            if (window.scrollY == 0) {
                setIsTopPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY != 0) setIsTopPage(false);
        };
        window.addEventListener("scroll", topPageHandler);
        return () => window.removeEventListener("scroll", topPageHandler);
    }, []);
    return (
        <div className="bg-gray-20 app">
            <Navbar
                isTopPage={isTopPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default App;
