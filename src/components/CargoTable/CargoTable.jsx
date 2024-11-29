import React from 'react';
import { statuses } from '../../constants/initialCargoList.js';

// Компонент таблицы грузов
const CargoTable = ({ cargos, updateCargoStatus }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case "Ожидает отправки": return "table-warning";
        case "В пути": return "table-primary";
        case "Доставлен": return "table-success";
        default: return "";
      }
    };
  
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Номер груза</th>
            <th>Название</th>
            <th>Статус</th>
            <th>Откуда</th>
            <th>Куда</th>
            <th>Дата отправления</th>
          </tr>
        </thead>
        <tbody>
          {cargos.map((cargo) => (
            <tr key={cargo.id} className={getStatusColor(cargo.status)}>
              <td>{cargo.id}</td>
              <td>{cargo.name}</td>
              <td>
                <select 
                  value={cargo.status} 
                  onChange={(e) => updateCargoStatus(cargo.id, e.target.value)}
                  className="form-select"
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </td>
              <td>{cargo.origin}</td>
              <td>{cargo.destination}</td>
              <td>{cargo.departureDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  export default CargoTable;