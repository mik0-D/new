import classNames from 'classnames';
import styles from './header.module.scss';
import { Logo } from '../logo/logo';
import { Search } from '../search/search';
import { Icon } from '../icon/icon';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Logo />
            <Search />
            <Icon />
        </div>
    );
};
