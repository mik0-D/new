import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 951,
        windowHeight: 1080,
    },
});
