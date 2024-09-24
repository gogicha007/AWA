import Link from 'next/link';
import styles from './page.module.css';

export default function Materials() {
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
            href={'/materials/wharehouse'}
          >
            Wharehouse
          </Link>
        </li>
      </ul>
      <div>
        
      </div>
      <h1>here comes the Materials</h1>
    </div>
  );
}
