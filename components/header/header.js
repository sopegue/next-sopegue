import styles from "./header.module.css";

export default function Header({ children }) {
  return (
    <div className="flex z-20 sticky top-0 bg-white containers border-b align-center justify-between py-3">{children}</div>
  );
}
