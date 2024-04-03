import classNames from 'classnames';
import styles from './icon.module.scss';

export interface IconProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Icon = ({ className }: IconProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button className={styles.buttonsvg}>
                <img src="/src/assets/cart.svg" className={styles.svg} />
            </button>
            <button className={styles.buttonsvg}>
                <img src="/src/assets/message.svg" className={styles.svg} />
            </button>
            <button className={styles.signoutbtn} onClick={undefined}>Sign out</button>
        </div>
    );
};
