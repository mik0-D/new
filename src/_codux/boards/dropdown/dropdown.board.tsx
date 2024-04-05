import { createBoard } from '@wixc3/react-board';
import { Dropdown } from '../../../components/dropdown/dropdown';

export default createBoard({
    name: 'Userdashboard',
    Board: () => <Dropdown />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 766,
        canvasWidth: 2764,
        windowWidth: 1024,
        windowHeight: 768,
    },
});
