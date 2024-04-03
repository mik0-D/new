import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    equipment: {
        id: string;
        category: string;
        equipment_picture?: string;
        brand: string;
        title: string;
        price: string;
        replacement_value: string;
        description: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, equipment }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={equipment.equipment_picture} className={styles.cardimg} />
            <div className={styles.nameanddescriptiondiv}>
                <span className={styles.titlespan}>{equipment.title}</span>
                <span className={styles.descriptionsspam}>Descrition:</span>
                <span>{equipment.description}</span>
            </div>
            <div className={styles.priceandreservediv}>
                <span className={styles.perdayspan}>Per day</span>
                <span className={styles.pricespan}>{equipment.price}</span>
                <span className={styles.perdayspan}>
                    Replacement value:{equipment.replacement_value}
                </span>
                <br />
                <button className={styles.reservebutton}>Reserve</button>
            </div>
        </div>
    );
};
