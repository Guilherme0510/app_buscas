import React from 'react';
import { LinksNav } from './components/LinksNav';
import './components/navbarTop.css'


export const SiteNav: React.FC = () => {
  const links = [
    { label: 'Login', href: '/login' },
    { label: 'Anuncie já!', href: '/anuncie' },
    
  ];

  return (
    <div>
      <LinksNav title="G Marketing Digital" links={links} />
    </div>
  );
};
