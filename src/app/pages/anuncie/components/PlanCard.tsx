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
      <img src={img} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div
          className="card-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <h4>{price}</h4>
        <a
          href={whatsappLink}
          className="btn btn-primary bt-anuncie mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tenho interesse
        </a>
      </div>
    </div>
  );
};
