import styles from "./styles.module.scss";

export default function ButtonFilled({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={className + " " + styles.buttonContainer} {...rest}>
      {children}
    </button>
  );
}
