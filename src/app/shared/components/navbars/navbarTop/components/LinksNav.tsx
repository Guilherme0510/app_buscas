import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps {
    title: string;
    links: NavLink[];
}

export const LinksNav: React.FC<NavbarProps> = ({ title, links }) => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <Navbar className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`} expand="lg">
            <Container>
                <Navbar.Brand href="/home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {links.map((link, index) => (
                            <Nav.Link key={index} href={link.href}>
                                {link.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
