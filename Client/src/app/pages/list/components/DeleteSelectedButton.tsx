import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface DeleteSelectedButtonProps {
  onDelete: () => void;
}

export const DeleteSelectedButton: React.FC<DeleteSelectedButtonProps> = ({ onDelete }) => {
  return (
    <button className="btn btn-delete-selected" onClick={onDelete}>
       <FontAwesomeIcon icon={faTrashAlt} className='icon-trash' /> Excluir clientes selecionados
    </button>
  );
};
