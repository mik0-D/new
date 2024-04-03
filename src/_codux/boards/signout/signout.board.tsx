import { createBoard } from '@wixc3/react-board';
import { Signout } from '../../../components/signout/signout';

export default createBoard({
    name: 'Signout',
    Board: () => <Signout />,
    isSnippet: true,
});