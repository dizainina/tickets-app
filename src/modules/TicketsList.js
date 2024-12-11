import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import { requestTickets } from "../api/tickets";
import { getFormatTrahsfer } from "../helpers/getFormatTransfer";
import {
  AirportDestinationInfo,
  ButtonBuy,
  ButtonBuyWrap,
  ButtonCurency,
  CurrencyWrap,
  Divider,
  FiltersContainer,
  Header,
  InfoTransferWrap,
  Li,
  Line,
  LineImg,
  SpanDate,
  SpanNameAirport,
  SpanTime,
  Stops,
  Ul,
  Wrap,
} from "./TicketsListStyles";
import { convertPrice, currencyRates } from "../helpers/convertPrice";
import { getFilteredTickets } from "../helpers/getFilteredTickets";
import { addIdsToItems } from "../helpers/addIdsItems";
import { getCurrencySymbol } from "../helpers/getCurrencySymbol";
import { formatDate } from "../helpers/formatDate";
import AviaLogo2 from "../assets/plane_u67bt4vdggiw.svg";

const TicketList = () => {
  const [tickets, setTickets] = useState([]); // добавили с id
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currency, setCurrency] = useState("USD");

  const fetchTickets = async () => {
    try {
      const response = await requestTickets();
      const arr = addIdsToItems(response.tickets);
      setTickets(arr);
      setLoading(false);
    } catch (err) {
      setError("Ошибка загрузки данных: " + err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleClickCurrency = (event) => {
    setCurrency(event);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredTickets = getFilteredTickets(filter, tickets);

  if (loading && !filteredTickets) {
    return <Wrap>Загрузка...</Wrap>;
  }

  if (error) {
    return <Wrap>{error}</Wrap>;
  }

  return (
    <>
      <Header>
        Тестовое задание: создать страницу выдачи билетов с фильтрами
      </Header>
      <Wrap>
        <FiltersContainer>
          <label>ВАЛЮТА</label>
          <CurrencyWrap>
            {Object.keys(currencyRates).map((curr) => (
              <ButtonCurency
                key={curr}
                onClick={() => handleClickCurrency(curr)}
                curr={curr}
                isActive={currency === curr}
              >
                {curr}
              </ButtonCurency>
            ))}
          </CurrencyWrap>

          <Filter onFilterChange={handleFilterChange} />
        </FiltersContainer>

        <Ul>
          {filteredTickets && filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <Li key={ticket.id}>
                <ButtonBuyWrap>
                  Перевозчик: {ticket.carrier}
                  <br />
                  <ButtonBuy
                    onClick={() => {
                      console.log("Покупка билета еще не реализована");
                    }}
                  >
                    Купить <br /> за{" "}
                    {convertPrice(currency, ticket.price, "RUB")}{" "}
                    {getCurrencySymbol(currency)}
                  </ButtonBuy>
                </ButtonBuyWrap>
                <Divider />
                <InfoTransferWrap>
                  <div>
                    <SpanTime>{ticket.departure_time}</SpanTime>
                    <br />{" "}
                    <SpanNameAirport>
                      {ticket.origin}, {ticket.origin_name}
                    </SpanNameAirport>
                    <br />
                    <SpanDate>{formatDate(ticket.departure_date)}</SpanDate>
                  </div>
                  <Stops>
                    <div>
                      {ticket.stops === 0
                        ? " без пересадок"
                        : getFormatTrahsfer(ticket.stops)}
                    </div>
                    <LineImg>
                      <Line />{" "}
                      <img src={AviaLogo2} alt="самолет_иконка" width="10%" />
                    </LineImg>
                  </Stops>
                  <AirportDestinationInfo>
                    <SpanTime>{ticket.arrival_time}</SpanTime>
                    <br />
                    <SpanNameAirport>
                      {ticket.destination}, {ticket.destination_name}
                    </SpanNameAirport>

                    <br />
                    <SpanDate>{formatDate(ticket.departure_date)}</SpanDate>
                  </AirportDestinationInfo>
                </InfoTransferWrap>
              </Li>
            ))
          ) : (
            <li>Нет доступных билетов</li>
          )}
        </Ul>
      </Wrap>
    </>
  );
};

export default TicketList;
