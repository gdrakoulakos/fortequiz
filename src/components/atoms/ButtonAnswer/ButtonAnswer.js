import styles from "./ButtonAnswer.module.css";

export default function ButtonAnswer({
  id = "",
  className = "",
  additionalClassName = "",
  children,
  onClick,
  disabled,
}) {
  return (
    <button
      id={id}
      className={`${className} ${additionalClassName}`} // No need for styles.answerButton again
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
