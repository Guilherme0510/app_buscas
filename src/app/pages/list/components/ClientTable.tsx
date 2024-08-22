import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";


interface Client {
  id: number;
  cnpj: string;
  name: string;
}

interface ClientTableProps {
  clients: Client[];
}

export const ClientTable: React.FC<ClientTableProps> = ({ clients }) => {
  return (
    <table className="table client-table">
      <thead>
        <tr >
          <th className="text-white">Nome</th>
          <th className="text-white">CNPJ</th>
          <th className="text-white">Ações</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.cnpj}</td>
            <td>
              <button className="btn btn-edit">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="btn btn-delete">
              <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
