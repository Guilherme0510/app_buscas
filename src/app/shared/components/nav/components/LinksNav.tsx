import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

interface NavLink {
    label: string;
    href: string;
}

interface NavbarProps{
    title: string;
    links: NavLink[]
}

export const LinksNav: React.FC<NavbarProps> = ({ title, links }) => {
    return(
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand href="/home">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
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
    )
}