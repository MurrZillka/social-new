import * as React from "react";
import s from './Post.module.css';

const Post = ({message}) => {
    return (
        <div className={s.item}>
            <img
                src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
                alt="Юзер"/>
            {message}
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;