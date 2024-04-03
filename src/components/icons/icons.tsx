import classNames from 'classnames';
import styles from './icons.module.scss';

export interface IconsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Icons = ({ className }: IconsProps) => {
    return <div className={classNames(styles.root, className)}>Icons</div>;
};
