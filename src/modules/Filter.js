import React, { useState } from "react";
import { FilterTransferWrap } from "./TicketsListStyles";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    all: true,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeOrMoreTransfers: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (name === "all") {
      const updatedFilters = {
        all: checked,
        noTransfers: false,
        oneTransfer: false,
        twoTransfers: false,
        threeOrMoreTransfers: false,
      };

      setFilters(updatedFilters);
      onFilterChange(updatedFilters);
      return;
    }

    const updatedFilters = {
      ...filters,
      [name]: checked,
    };

    if (
      updatedFilters.noTransfers ||
      updatedFilters.oneTransfer ||
      updatedFilters.twoTransfers ||
      updatedFilters.threeOrMoreTransfers
    ) {
      updatedFilters.all = false;
    }

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <FilterTransferWrap>
      <label>КОЛИЧЕСТВО ПЕРЕСАДОК</label>
      <div>
        <label className="filter-label">
          <input
            type="checkbox"
            name="all"
            checked={filters.all}
            onChange={handleChange}
          />
          Все
        </label>
      </div>
      <div>
        <label className="filter-label">
          <input
            type="checkbox"
            name="noTransfers"
            checked={filters.noTransfers}
            onChange={handleChange}
            disabled={filters.all}
          />
          Без пересадок
        </label>
      </div>
      <div>
        <label className="filter-label">
          <input
            type="checkbox"
            name="oneTransfer"
            checked={filters.oneTransfer}
            onChange={handleChange}
            disabled={filters.all}
          />
          1 пересадка
        </label>
      </div>
      <div>
        <label className="filter-label">
          <input
            type="checkbox"
            name="twoTransfers"
            checked={filters.twoTransfers}
            onChange={handleChange}
            disabled={filters.all}
          />
          2 пересадки
        </label>
      </div>
      <div>
        <label className="filter-label">
          <input
            type="checkbox"
            name="threeOrMoreTransfers"
            checked={filters.threeOrMoreTransfers}
            onChange={handleChange}
            disabled={filters.all}
          />
          3 и более пересадки
        </label>
      </div>
    </FilterTransferWrap>
  );
};

export default Filter;
