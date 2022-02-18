import * as React from "react";
import s from './Profile.module.css'
import MyPost from "./My posts/MyPost";
import MainUserProfile from "./MainUserProfile/MainUserProfile";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = ({postData}) => {


    return (
        <div>
            <ProfileHeader/>
            <div className={s.descriptionBlock}>
                <MainUserProfile/>
                <MyPost postData={postData}/>
            </div>
        </div>
    )
}

export default Profile;