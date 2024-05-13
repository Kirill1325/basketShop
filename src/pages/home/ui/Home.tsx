import { Button } from "@mui/material"
import { Link } from "react-router-dom"


export const Home = () => {
    return (
        <div>
            <p>Home Page</p>
            <Button variant="contained">
                <Link to='/shoes'>Shoes</Link>
            </Button>
        </div>
    )
}
