import * as React from 'react';
import s from './MainUserProfile.module.css'


const MainUserProfile = () => {
    return (
        <div>
            <img className={s.mainUserPicture}
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                alt="Юзер"/>
        </div>
    )
}

export default MainUserProfile;