import "./style.css";

export default function Button({
  children,
  primary,
  extend,
  className,
  selected,
  onClick,
  submit,
}) {
  const composedClassName = [
    className || "button",
    primary && "button--primary",
    extend && "button--extend",
    children === selected && "selected",
  ]
    .filter((s) => s)
    .join(" ");

  return (
    <button
      className={composedClassName}
      type={submit ? "submit" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
