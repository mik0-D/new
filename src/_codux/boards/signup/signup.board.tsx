import { createBoard } from '@wixc3/react-board';
import { Signup } from '../../../components/signup/signup';

export default createBoard({
    name: 'Signup',
    Board: () => <Signup />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
