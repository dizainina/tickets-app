import React from "react";

const TicketItem = ({ ticket }) => {
  return (
    <li>
      <h3>{ticket.destination}</h3>
      <p>Цена: {ticket.price} руб.</p>
      <p>Пересадки: {ticket.transfers}</p>
    </li>
  );
};

export default TicketItem;
