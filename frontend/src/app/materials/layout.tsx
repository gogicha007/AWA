import styles from './page.module.css'
import Link from "next/link";



export default function MaterialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.materials}>
      <ul className={styles.materials__navbar}>
        <li>
          <Link className={styles.materials__btn} href={'/materials/purchases'}>
            Purchases
          </Link>
        </li>
        <li>
          <Link
            className={styles.materials__btn}
            href={'/materials/warehouse'}
          >
            Wharehouse
          </Link>
        </li>
      </ul>
      <section>{children}</section>
    </div>
  );
}
