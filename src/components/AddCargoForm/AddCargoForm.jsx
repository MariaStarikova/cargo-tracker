import React, { useState} from 'react';
import { cities } from '../../constants/initialCargoList.js';

// Компонент формы добавления груза
const AddCargoForm = ({ addCargo }) => {
    const [newCargo, setNewCargo] = useState({
      name: "",
      origin: "",
      destination: "",
      departureDate: "",
      status: "Ожидает отправки"
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (newCargo.name && newCargo.origin && newCargo.destination && newCargo.departureDate) {
        addCargo(newCargo);
        setNewCargo({
          name: "",
          origin: "",
          destination: "",
          departureDate: "",
          status: "Ожидает отправки"
        });
      } else {
        alert("Пожалуйста, заполните все поля формы.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Название груза"
            value={newCargo.name}
            onChange={(e) => setNewCargo({...newCargo, name: e.target.value})}
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={newCargo.origin}
            onChange={(e) => setNewCargo({...newCargo, origin: e.target.value})}
          >
            <option value="">Выберите пункт отправления</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={newCargo.destination}
            onChange={(e) => setNewCargo({...newCargo, destination: e.target.value})}
          >
            <option value="">Выберите пункт назначения</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={newCargo.departureDate}
            onChange={(e) => setNewCargo({...newCargo, departureDate: e.target.value})}
          />
        </div>
        <button type="submit" className="btn btn-primary">Добавить груз</button>
      </form>
    );
  };

  export default AddCargoForm;