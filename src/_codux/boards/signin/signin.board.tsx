import { createBoard } from '@wixc3/react-board';
import { Signin } from '../../../components/signin/signin';

export default createBoard({
    name: 'Signin',
    Board: () => <Signin />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 485.8462239882021,
        canvasHeight: 388.3734652426431,
    },
});
