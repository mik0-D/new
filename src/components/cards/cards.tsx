import classNames from 'classnames';
import styles from './cards.module.scss';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
            <Card
                equipment={{
                    brand: 'Canon',
                    category: 'Camera',
                    id: '001',
                    kit_includes: 'dfdffd',
                    price: '$350',
                    replacement_value: '$6000',
                    title: 'Canon EOS R5',
                    equipment_picture:
                        'https://manioscinetools.gr/wp-content/uploads/2020/07/Canon-EOS-R5.jpeg',
                    description: 'The camera comes with 1x charger and 2x batteries',
                }}
            />
        </div>
    );
};
