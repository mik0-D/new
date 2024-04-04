import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
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
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 1335,
        canvasHeight: 470.53406492912666,
        canvasWidth: 397,
    },
});
