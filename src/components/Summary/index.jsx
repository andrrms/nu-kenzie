import { MdOutlineInfo } from "react-icons/md";
import "./style.css";

export default function Summary({ value }) {
  const composeClassName = [
    "summary__value",
    value > 0 ? "value--left" : value < 0 ? "value--debt" : "value--neutral",
  ]
    .filter((c) => c)
    .join(" ");

  return (
    <section className="summary">
      <h2 className="summary__title">
        Saldo total:{" "}
        <span className={composeClassName}>
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </h2>
      <p className="summary__text">
        <MdOutlineInfo size={24} />
        Valor calculado com base nas suas entradas e saídas do mês atual.
      </p>
    </section>
  );
}
