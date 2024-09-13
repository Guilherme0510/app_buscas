import React from "react";

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  whatsappLink: string;
  img: string;
  oldPrice: string;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  oldPrice,
  description,
  whatsappLink,
  img
}) => {
  return (
    <div className="card">
    <img src={img} alt={title} />
    <div className="card-body">
      <h4 className="card-title">{title}</h4>
      <div className="card-price">
        <span className="old-price">{oldPrice}</span>
        <span className="new-price">{price}</span>
      </div>
      <div className="card-text" dangerouslySetInnerHTML={{ __html: description }}></div>
      <a href={whatsappLink} className="btn btn-primary bt-anuncie">Assinar</a>
    </div>
  </div>
  );
};
