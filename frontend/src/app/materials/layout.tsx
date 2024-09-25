import styles from './page.module.css';
import Link from 'next/link';

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
          <Link className={styles.materials__btn} href={'/materials/warehouse'}>
            Wharehouse
          </Link>
        </li>
      </ul>
      <div className={styles.materials__main}>{children}</div>
      <div className={styles.materials__footer}>
        <h3>Footer</h3>
      </div>
    </div>
  );
}
