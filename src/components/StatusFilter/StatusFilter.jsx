import React from 'react';
import { statuses } from '../../constants/initialCargoList.js';

// Компонент фильтра по статусу
const StatusFilter = ({ currentFilter, setFilter }) => (
    <div className="mb-3">
      <select
        className="form-select"
        value={currentFilter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Все статусы</option>
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </div>
  );

  export default StatusFilter;