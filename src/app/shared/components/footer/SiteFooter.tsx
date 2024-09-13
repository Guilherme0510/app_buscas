import React from 'react';
import { LinksFooter } from './components/LinksFooter';

export const SiteFooter: React.FC = () => {
  // const footerLinks = [
  //   { label: 'Contato', href: '#contact' },
  // ];

  return (
    <div>
      <LinksFooter text="© Desenvolvido por G Maps Contact Center LTDA - CNPJ. 40.407.753/0001-30" text_02='0800 5802 766'  />
    </div>
  );
};
