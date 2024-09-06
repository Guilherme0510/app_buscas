import React from "react";

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  icon: string;
  whatsappLink: string;
  img: string;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  icon,
  whatsappLink,
  img
}) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <img src={img} alt="" />
        <i className={`${icon} mb-3`} style={{ fontSize: "2rem" }}></i>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <h6>{price}</h6>
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
