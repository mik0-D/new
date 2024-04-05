import { createBoard } from '@wixc3/react-board';
import { Dropdown } from '../../../components/dropdown/dropdown';

export default createBoard({
    name: 'Userdashboard',
    Board: () => <Dropdown />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 694,
        canvasWidth: 2764,
    },
});
