import styles from './spinner.module.css';

class Spinner {
  node: HTMLDivElement;

  constructor() {
    const spinner = document.createElement('div');
    spinner.classList.add(styles.spinner);
    spinner.style.display = 'none';

    this.node = spinner;
  }

  public show() {
    this.node.style.display = 'block';
  }

  public hide() {
    this.node.style.display = 'none';
  }

  public getNode() {
    return this.node;
  }
}

export default Spinner;
