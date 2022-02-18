import * as React from 'react';
import {Route, BrowserRouter, Routes,} from "react-router-dom";
import './App.css';
import Navbar from "./Components/02_Navbar/Navbar";
import Header from "./Components/01_Header/Header";
import Profile from "./Components/03_Profile/Profile";
import Dialogs from "./Components/04_Dialogs/Dialogs";
import Music from "./Components/06_Music/Music";
import News from "./Components/05_News/News";
import Settings from "./Components/07_Settings/Settings";

function App({postData, dialogsData, messagesData}) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper__content'>
                    <Routes>
                        <Route path='/'
                               element={<Profile
                                   postData={postData}/>}
                        />
                        <Route path='/profile'
                               element={<Profile
                                   postData={postData}/>}
                        />
                        <Route path='/dialogs'
                               element={<Dialogs
                                   dialogsData={dialogsData}
                                   messagesData={messagesData}/>}
                        />
                        <Route path='/news'
                               element={<News/>}
                        />
                        <Route path='/music'
                               element={<Music/>}
                        />
                        <Route path='/settings'
                               element={<Settings/>}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
