import { Footer } from "./Footer"

export function MainContent() {
    return (
        <div className="mainContentDiv">
            <div>
                <h1 className="contentText">Fun facts about React!</h1>
            </div>
            <div>
                <ul className="mainUl">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands entreprise apps, including mobile apps</li>
                </ul>
              <Footer />
            </div>
        </div>
    )
}