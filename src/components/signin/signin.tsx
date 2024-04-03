import classNames from 'classnames';
import styles from './signin.module.scss';

export interface SigninProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Signin = ({ className }: SigninProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.signinspan}>Sign in</span>
            <span className={styles.welcomespan}>
                Welcom to Gearstream
                <br />
                <br />
            </span>
            <span className={styles.text}>Email</span>
            <input className={styles.input} />
            <br />
            <span className={styles.text}>Password</span>
            <input className={styles.input} />
            <a href="/" className={styles.link}>
                Forgot Password?
            </a>
            <br />
            <div className={styles.signindiv}>
                <button className={styles.signbtn}>Sign in</button>
                <a className={styles.createaccount} href="">
                    Create an account?
                </a>
            </div>
        </div>
    );
};
