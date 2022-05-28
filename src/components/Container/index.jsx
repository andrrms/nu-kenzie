import "./style.css";

export default function Container({
  children,
  horizontal,
  className,
  noMargin,
  smallMargin,
  noMarginMobile,
  gap,
}) {
  const composedClassName = [
    "container__element",
    className,
    horizontal && "container--horizontal",
    noMargin && "container--no-margin",
    smallMargin && "container--small-margin",
    noMarginMobile && "container--no-margin-mobile",
  ]
    .filter((e) => e)
    .join(" ");

  return (
    <div className={composedClassName} style={{ gap: gap ? gap : undefined }}>
      {children}
    </div>
  );
}
