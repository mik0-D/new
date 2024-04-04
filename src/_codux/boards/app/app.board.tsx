import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1428,
        windowHeight: 744,
        canvasHeight: 1622,
        canvasWidth: 1880,
    },
});
