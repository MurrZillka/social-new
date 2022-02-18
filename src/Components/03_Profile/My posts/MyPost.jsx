import * as React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";


const MyPost = ({postData}) => {

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div className={s.textNewPost}>
                    <textarea></textarea>
                </div>
                <div className={s.textNewPostBtn}>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            {postData.map(item => <Post message={item.postMessage} key={item.id}/>)}
        </div>
    )
}

export default MyPost;