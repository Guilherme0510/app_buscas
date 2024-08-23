import React from 'react';
import { LinksNav } from './components/LinksNav';
import './components/navbarTop.css'


export const SiteNav: React.FC = () => {
  const links = [
    { label: 'Login', href: '/login' },
    { label: 'Anuncie já!', href: 'https://wa.link/xhrg72' },
    
  ];

  return (
    <div>
      <LinksNav title="App Pesquisas" links={links} />
    </div>
  );
};
