import classNames from 'classnames';
import styles from './dropdown.module.scss';
import { Header } from '../header/header';
import { Profilecard } from '../profilecard/profilecard';

export interface DropdownProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Dropdown = ({ className }: DropdownProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <div className={styles.boddiv}>
                <div className={styles.columndiv}>
                    <Profilecard />
                    <div className={styles.btndiv}>
                        <button className={styles.btn}>Profile</button>
                        <button className={styles.btn}>My Ads</button>
                        <button className={styles.btn}>Rent Requests</button>
                        <button className={styles.btn}>Post new Ad</button>
                    </div>
                </div>
                <div>
                    <div>
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
