import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Cards } from './components/cards/cards';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.div}>
                <Menu />
                <Cards />
            </div>
        </div>
    );
}

export default App;
