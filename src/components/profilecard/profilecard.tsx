import classNames from 'classnames';
import styles from './profilecard.module.scss';

export interface ProfilecardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Profilecard = ({ className }: ProfilecardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imgdiv}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.img}
                />
            </div>
            <div className={styles.spandiv}>
                <span>Users Name</span>
            </div>
        </div>
    );
};
