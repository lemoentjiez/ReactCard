import { Header } from "./Header.js"
import { MainContent } from "./MainContent.js"

export function MainPage() {
    return (
        <div className="wrapper">
            <Header />
            <MainContent />
        </div>
    )
}