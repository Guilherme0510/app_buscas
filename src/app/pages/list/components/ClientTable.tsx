import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { DeleteSelectedButton } from "./DeleteSelectedButton";

interface Client {
  id: number;
  cnpj: string;
  name: string;
  operador: string;
}

interface ClientTableProps {
  clients: Client[];
  onDeleteClients?: (ids: number[]) => void;
}

export const ClientTable: React.FC<ClientTableProps> = ({
  clients,
  onDeleteClients,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const handleCheckboxChange = (id: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(id)) {
        newSelectedRows.delete(id);
      } else {
        newSelectedRows.add(id);
      }
      return newSelectedRows;
    });
  };

  const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // Selecionar todos os IDs
      const allIds = clients.map((client) => client.id);
      setSelectedRows(new Set(allIds));
    } else {
      // Desmarcar todos
      setSelectedRows(new Set());
    }
  };

  const handleDeleteSelected = () => {
    if (onDeleteClients) {
      onDeleteClients(Array.from(selectedRows));
      setSelectedRows(new Set());
    }
  };

  return (
    <>
      {selectedRows.size > 0 && (
        <DeleteSelectedButton onDelete={handleDeleteSelected} />
      )}
      <table className="table client-table">
        <thead className="">
          <tr>
            <th className="text-white">
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectedRows.size === clients.length && clients.length > 0}
                className="checkbox-table form-check-input"
              /> 
            </th>
            <th className="text-white">Nome</th>
            <th className="text-white">CNPJ</th>
            <th className="text-white">Operador</th>
            <th className="text-white">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td
                style={{
                  backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                  color: selectedRows.has(client.id) ? "#fff" : "",
                }}
              >
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(client.id)}
                  checked={selectedRows.has(client.id)}
                  className="checkbox-table form-check-input"
                />
              </td>
              <td
                style={{
                  backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                  color: selectedRows.has(client.id) ? "#fff" : "",
                }}
              >
                {client.name}
              </td>
              <td
                style={{
                  backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                  color: selectedRows.has(client.id) ? "#fff" : "",
                }}
              >
                {client.cnpj}
              </td>
              <td
                style={{
                  backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                  color: selectedRows.has(client.id) ? "#fff" : "",
                }}
              >
                {client.operador}
              </td>
              <td
                style={{
                  backgroundColor: selectedRows.has(client.id) ? "#5c5c5c" : "",
                  color: selectedRows.has(client.id) ? "#fff" : "",
                }}
              >
                <button
                  className="btn"
                  style={{ color: selectedRows.has(client.id) ? "#fff" : "" }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="btn"
                  style={{ color: selectedRows.has(client.id) ? "#fff" : "" }}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
