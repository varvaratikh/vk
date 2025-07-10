import logoImage from '../../../assets/pngwing.com.png';
import Search  from '@mui/icons-material/Search';
import styles from './Header.module.css';
import {useState} from "react";

export const Header = () => {

    const [isSearchActive, setIsSearchActive] = useState(false);

    return(
        <header  className={styles.header}>
            <div className={styles['image-wrapper']}>
                <img src={logoImage} alt="" />
            </div>
            <div className={styles.wrapper}>
                {!isSearchActive && <Search />}
                <input type="text" placeholder="Поиск" onClick={() => setIsSearchActive(true)}/>
            </div>
        </header>
    )
}