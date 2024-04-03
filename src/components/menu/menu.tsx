import classNames from 'classnames';
import styles from './menu.module.scss';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2 className={styles.h2}>Category</h2>
            <hr className={styles.hr} />
            <a className={styles.link}>Camera</a>
            <a href="/" className={styles.link}>
                Lens
            </a>
            <a href="/" className={styles.link}>
                Lighting
            </a>
            <a href="/" className={styles.link}>
                Audio
            </a>
            <h2 className={styles.h2}>Brand</h2>
            <hr className={styles.hr} />
            <a href="/" className={styles.link}>
                Canon
            </a>
            <a href="/" className={styles.link}>
                Sony
            </a>
            <a href="/" className={styles.link}>
                Nikon
            </a>
        </div>
    );
};
