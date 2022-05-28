import { MdOutlineDeleteOutline } from "react-icons/md";
import "./style.css";

export default function FinanceCard({
  description,
  type,
  value,
  onCloseClick,
  ghostMode,
  removeFinance,
}) {
  const composeClassName = [
    "finance",
    type && `finance--${type}`,
    ghostMode && "ghostmode",
  ]
    .filter((c) => c)
    .join(" ");

  return (
    <li className={composeClassName}>
      <article>
        <header className="finance__header">
          <h1 className="finance__title">{description}</h1>
          <p className="finance__type">{type}</p>
        </header>
        <p className="finance__value">
          {value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button className="finance__remove" onClick={onCloseClick}>
          <MdOutlineDeleteOutline size={26} />
        </button>
      </article>
    </li>
  );
}
