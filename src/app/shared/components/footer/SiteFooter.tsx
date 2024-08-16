import React from 'react';
import { LinksFooter } from './components/LinksFooter';

export const SiteFooter: React.FC = () => {
  const footerLinks = [
    { label: 'Politica de privacidade', href: '#privacy' },
    { label: 'Termos de uso', href: '#terms' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <div>
      <LinksFooter text="© Desenvolvido por G Maps." links={footerLinks} />
    </div>
  );
};
