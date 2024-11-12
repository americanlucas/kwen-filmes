import "./style.css"
import { NavLink } from "react-router-dom"
const Header = (props) => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'none',
            color: isActive ? '#fff' : '#c5bbc7'
        }
    }

    return (
        <>
            <header>
                <div className="titulo-header">
                    <NavLink style={navLinkStyles} to="/">
                        <h1>{props.titulo}</h1>
                    </NavLink>
                </div>

                <div className="topicos-header">
                    <NavLink style={navLinkStyles} to="/sobre">
                        <h1>{props.sobre}</h1>
                    </NavLink>
                    <NavLink style={navLinkStyles} to="/contato">
                        <h1>{props.contato}</h1>
                    </NavLink>
                </div>
            </header>
        </>
    )
}

export default Header