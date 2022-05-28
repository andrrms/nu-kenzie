import "./style.css";

export default function Input({
  hint,
  type,
  id,
  placeholder,
  metricName,
  className,
  required,
  name,
  value,
  onChange,
}) {
  const composeClassName = ["input", className].filter((c) => c).join(" ");

  if (!id) console.warn("Você tem que passar um id para o seu input!");

  return (
    <div className="input__container">
      <label htmlFor={id} className="input__label">
        {name}
      </label>
      <div className="input__mask">
        <input
          id={id}
          required={required}
          type={type}
          className={composeClassName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          step={type === "number" ? 0.01 : 1}
          min={0.01}
        />
        {metricName && <label htmlFor={id}>{metricName}</label>}
      </div>
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}
