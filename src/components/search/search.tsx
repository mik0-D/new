import classNames from 'classnames';
import styles from './search.module.scss';

export interface SearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Search = ({ className }: SearchProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.searchinput} placeholder="Search..." />
            <button className={styles.svgbtn}>
                <img src="/src/assets/search.svg" className={styles.svgimg} />
            </button>
        </div>
    );
};
