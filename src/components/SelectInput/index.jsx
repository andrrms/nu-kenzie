import "./style.css";

export default function SelectInput({
  hint,
  type,
  id,
  placeholder,
  children,
  className,
  name,
  value,
  onChange,
}) {
  const composeClassName = ["select", className].filter((c) => c).join(" ");

  return (
    <div className="select__container">
      <label htmlFor={id} className="select__label">
        {name}
      </label>
      <select
        id={id}
        type={type}
        className={composeClassName}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}
