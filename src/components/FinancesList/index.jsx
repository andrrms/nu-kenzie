import { useEffect, useState } from "react";
import Button from "../Button";
import FinanceCard from "../FinanceCard";
import "./style.css";

export default function FinancesList({ finances, deleteFinance }) {
  const [filteredFinances, setFilteredFinances] = useState(finances);
  const [selectedButton, setSelectedButton] = useState("Todos");

  useEffect(() => setFilteredFinances(finances), [finances]);

  function clearFilters() {
    setFilteredFinances(finances);
    setSelectedButton("Todos");
  }

  function filterByIncoming() {
    setFilteredFinances(
      finances.filter((finance) => finance.type === "incoming")
    );
    setSelectedButton("Entradas");
  }

  function filterByOutgoing() {
    setFilteredFinances(
      finances.filter((finance) => finance.type === "outgoing")
    );
    setSelectedButton("Saídas");
  }

  function handleDeleteFinance(name, value) {
    deleteFinance(name, value);
  }

  return (
    <section className="finances__container">
      <header className="finances__header">
        <h1 className="finances__title">Resumo financeiro</h1>
        <div className="button__group">
          <Button onClick={clearFilters} selected={selectedButton}>
            Todos
          </Button>
          <Button onClick={filterByIncoming} selected={selectedButton}>
            Entradas
          </Button>
          <Button onClick={filterByOutgoing} selected={selectedButton}>
            Saídas
          </Button>
        </div>
      </header>
      <ul className="finances__list">
        {filteredFinances.length === 0 ? (
          <>
            <p className="finances__empty">Nenhum lançamento encontrado</p>
            <FinanceCard
              ghostMode
              description="Lorem Ipsum Dolor Sit Amet"
              type="incoming"
              value={23.23}
            />
            <FinanceCard
              ghostMode
              description="Lorem Ipsum Dolor Sit Amet"
              type="incoming"
              value={23.23}
            />
            <FinanceCard
              ghostMode
              description="Lorem Ipsum Dolor Sit Amet"
              type="incoming"
              value={23.23}
            />
          </>
        ) : (
          filteredFinances.map((finance, i) => (
            <FinanceCard
              {...finance}
              onCloseClick={() =>
                handleDeleteFinance(finance.description, finance.value)
              }
              key={i}
            />
          ))
        )}
      </ul>
    </section>
  );
}
