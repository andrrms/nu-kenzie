import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Container from "../../components/Container";
import FinancesList from "../../components/FinancesList";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import Summary from "../../components/Summary";
import "./style.css";

export default function DashboardPage({ setIsLogged }) {
  const [finances, setFinances] = useState(
    JSON.parse(window.localStorage.getItem("financesData")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("financesData", JSON.stringify(finances));
  }, [finances]);

  function newFinance(description, type, value) {
    setFinances([...finances, { description, value, type }]);
  }

  function deleteFinance(financeName, value) {
    const financesCopy = Array.from(finances);
    financesCopy.splice(
      finances.findIndex(
        (finance) =>
          finance.description === financeName && finance.value === value
      ),
      1
    );
    setFinances(financesCopy);
  }

  return (
    <div className="dashboard">
      <Navbar>
        <Button onClick={() => setIsLogged(false)}>Sair</Button>
      </Navbar>
      <main className="dashboard__body">
        <aside className="dashboard__side">
          <Container smallMargin className="dashboard__container">
            <Form addFinance={newFinance} />
            <Summary
              value={finances.reduce((prev, curr) => prev + curr.value, 0)}
            />
          </Container>
        </aside>
        <section className="main__container">
          <Container smallMargin>
            <FinancesList finances={finances} deleteFinance={deleteFinance} />
          </Container>
        </section>
      </main>
    </div>
  );
}
