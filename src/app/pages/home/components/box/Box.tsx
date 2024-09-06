import { About, States } from "./index"
import "./Box.css"

export const Box: React.FC = () => {
    return (
        <div className="container box-container">
            <About />
            <States />
        </div>
    )
}