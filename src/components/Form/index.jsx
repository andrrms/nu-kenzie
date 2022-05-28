import Container from "../Container";
import SelectInput from "../SelectInput";
import Input from "../Input";
import Button from "../Button";
import "./style.css";
import { useState } from "react";

export default function Form({ addFinance, removeFinance }) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0.01);
  const [type, setType] = useState("");

  function handleNewFinance() {
    if (!description || !value || !type)
      return alert("Você precisa passar algum valor");

    setDescription("");
    setValue(0.01);
    setType("");

    addFinance(description, type, type === "outgoing" ? value * -1 : value);
  }

  return (
    <form
      className="dashboard__form"
      onSubmit={(e) => handleNewFinance(e.preventDefault())}
    >
      <Input
        required
        type="text"
        name="Descrição"
        placeholder="Digite aqui sua descrição"
        hint="Exemplo: Compras de roupa"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Container horizontal noMargin gap={10}>
        <Input
          required
          type="number"
          name="Valor"
          placeholder="50,00"
          id="price"
          metricName="R$"
          value={value}
          onChange={(e) => setValue(e.target.valueAsNumber)}
        />
        <SelectInput
          name="Tipo"
          required
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="" disabled>
            Selecione o tipo
          </option>
          <option value="incoming">Entrada</option>
          <option value="outgoing">Saída</option>
        </SelectInput>
      </Container>
      <Button submit extend primary>
        Inserir transação
      </Button>
    </form>
  );
}
