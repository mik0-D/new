import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1500,
        windowHeight: 768,
        canvasHeight: 4426,
        canvasWidth: 1727,
    },
});
