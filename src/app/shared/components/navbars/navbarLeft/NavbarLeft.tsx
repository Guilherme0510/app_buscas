import { faBars, faHome, faTimes, faUser, faListAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import foto_perfil from '../../../../assets/images/pessoa.avif';
import './components/navbarLeft.css';

export const NavbarLeft: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                            <img src={foto_perfil} alt="Perfil" />
                        </a>
                        <p>Guilherme Silva</p>
                    </div>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/">
                                <FontAwesomeIcon icon={faHome}  className = "nav-icon" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/vendas">
                                <FontAwesomeIcon icon={faUser} className = "nav-icon" /> Perfil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/monitoria">
                                <FontAwesomeIcon icon={faListAlt} className = "nav-icon" /> Lista Cliente
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-link-left" to="/marketing">
                                <FontAwesomeIcon icon={faUserPlus} className = "nav-icon" /> Adicionar Cliente
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                <div className='nav-contato'>
                    <button>Contato</button>
                </div>
            </nav>
        </div>
    );
};