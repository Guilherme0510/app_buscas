import { faBars, faHome, faTimes, faUser, faListAlt, faUserPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './components/navbarLeft.css';
import { useAuth } from '../../../../context/AuthContext';

export const NavbarLeft: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { nome, avatar } = useAuth(); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button
                className={`btn btn-primary sidebar-toggle ${isOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>

            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-sticky">
                    <div className='nav-perfil'>
                        <a href="/perfil">
                            <img src={avatar} alt="Perfil" />
                        </a>
                        <p>{nome}</p>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/perfil">
                                <FontAwesomeIcon icon={faUser} className="nav-icon" /> Perfil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/">
                                <FontAwesomeIcon icon={faHome} className="nav-icon" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/pesquisas">
                                <FontAwesomeIcon icon={faSearch} className="nav-icon" /> Pesquisas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/lista">
                                <FontAwesomeIcon icon={faListAlt} className="nav-icon" /> Lista Cliente
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/add">
                                <FontAwesomeIcon icon={faUserPlus} className="nav-icon" /> Adicionar Cliente
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
