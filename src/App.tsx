import Navbar from "@/Components/Navbar/Navbar";
import { useState } from "react";

function App() {
    const [selectedPage, setSelectedPage] = useState<string>("home");
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
