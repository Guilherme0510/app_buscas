import React from 'react';
import { LinksNav } from './components/LinksNav';

export const SiteNav: React.FC = () => {
  const links = [
    { label: 'Inicio', href: '/home' },
    { label: 'Sobre', href: '/about' },
    { label: 'Serviços', href: '/services' },
    { label: 'Contatos', href: '/contact' },
  ];

  return (
    <div>
      <LinksNav title="App Pesquisas" links={links} />
    </div>
  );
};
