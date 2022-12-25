import Navbar from "@/Components/Navbar/Navbar";
import { useState } from "react";
import { SelectedPage } from "./types/Shared";

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home,
    );
    return (
        <div className="bg-gray-20 app">
            <Navbar
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </div>
    );
}

export default App;
