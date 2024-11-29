import React, { useState} from 'react';
import { initialCargoList } from '../../constants/initialCargoList.js';
import CargoTable from '../CargoTable/CargoTable';
import AddCargoForm from '../AddCargoForm/AddCargoForm';
import StatusFilter from '../StatusFilter/StatusFilter';
import 'bootstrap/dist/css/bootstrap.min.css';

// Основной компонент
export default function CargoTracker() {
    const [cargos, setCargos] = useState(initialCargoList);
    const [filter, setFilter] = useState("all");
  
    const addCargo = (newCargo) => {
      const id = `CARGO${String(cargos.length + 1).padStart(3, '0')}`;
      setCargos([...cargos, { ...newCargo, id }]);
    };
  
    const updateCargoStatus = (id, newStatus) => {
      const cargoToUpdate = cargos.find(cargo => cargo.id === id);
      if (newStatus === "Доставлен" && new Date(cargoToUpdate.departureDate) > new Date()) {
        alert("Ошибка: Нельзя установить статус 'Доставлен' для груза с будущей датой отправления.");
        return;
      }
      setCargos(cargos.map(cargo => 
        cargo.id === id ? { ...cargo, status: newStatus } : cargo
      ));
    };
  
    const filteredCargos = filter === "all" 
      ? cargos 
      : cargos.filter(cargo => cargo.status === filter);
  
    return (
      <div className="container mt-4">
        <h1 className="mb-4">Система отслеживания грузов</h1>
        <AddCargoForm addCargo={addCargo} />
        <StatusFilter currentFilter={filter} setFilter={setFilter} />
        <CargoTable cargos={filteredCargos} updateCargoStatus={updateCargoStatus} />
      </div>
    );
  }