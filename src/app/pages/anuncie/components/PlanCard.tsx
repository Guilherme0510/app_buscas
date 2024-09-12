import React from "react";

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  whatsappLink: string;
  img: string;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  whatsappLink,
  img
}) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={img} alt="" />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <h4>{price}</h4>
        <a
          href={whatsappLink}
          className="btn btn-primary mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tenho interesse
        </a>
      </div>
    </div>
  );
};
