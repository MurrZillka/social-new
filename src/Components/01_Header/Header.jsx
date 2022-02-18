import * as React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBgQ8O_HRyOJSoEr6rdsU2uD6Ux8kAr4E6gQ&usqp=CAU'
                alt='logo
                '/>
        </header>
    )
}

export default Header;