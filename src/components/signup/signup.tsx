import classNames from 'classnames';
import styles from './signup.module.scss';

export interface SignupProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Signup = ({ className }: SignupProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.signupspan}>Sign up</span>
            <span className={styles.welcomespan}>Welcome to Gearstream</span>
            <br />
            <br />
            <span className={styles.span}>Email</span>
            <input className={styles.input} placeholder="" />
            <br />
            <span className={styles.span}>Last Name</span>
            <input className={styles.input} />
            <br />
            <span className={styles.span}>Email</span>
            <input className={styles.input} />
            <br />
            <span className={styles.span}>Password</span>
            <input type="password" className={styles.input} />
            <br />
            <span className={styles.span}>Confirm Password</span>
            <input type="password" className={styles.input} />
            <br />
            <div className={styles.signupdiv}>
                <button className={styles.signupbtn}>Sign up</button>
                <a href="/" className={styles.link}>
                    Already have an account?
                </a>
            </div>
        </div>
    );
};
