import './App.css'
import Header from "./components/Header.jsx";
import {HomePage, CoursePage, ProfilePage, PaymentPage} from "./pages";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="coursepage" element={<CoursePage />} />
                <Route path="profilepage" element={<ProfilePage />} />
                <Route path="paymentpage" element={<PaymentPage />} />
            </Routes>
        </>
    )
}

export default App
