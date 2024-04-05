import { createBoard } from '@wixc3/react-board';
import { Profilecard } from '../../../components/profilecard/profilecard';

export default createBoard({
    name: 'Profilecard 1',
    Board: () => <Profilecard />,
    isSnippet: true,
});