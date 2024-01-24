import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-[url('/space.jpg')] bg-cover bg-repeat-y bg-center">
                    <Hero />
                    <About />

                </div>
                <Experience />
                {/*<Tech />*/}
                {/*<Works />*/}
                {/*<Feedbacks />*/}
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App