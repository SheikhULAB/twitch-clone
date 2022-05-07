import React from 'react';
import RecentItem from '../RecentItem/RecentItem';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile__topLeft">
                <img src="https://pbs.twimg.com/profile_images/1517185752895229954/YbFoWUJU_400x400.jpg" alt="" />
                <div className="profile__topLeftDetails">
                    <h1>sheikhYeamin</h1>
                    <h3>820K followers</h3>
                </div>
            </div>

            <div className="profile__topRight">
                <i className='fas fa-heart graaybg'></i>
                <i className='fas fa-bell graybg'></i>
                <i className='fas fa-ellipsis-v'></i>
            </div>
            <div className="profile__menu">
                <h2 className='active'>Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i className='fas fa-arrow-up'></i></h2>
                <h2>Chat</h2>
            </div>
            <div className="profile__recent">
               <h2>Recent broadcasts</h2>
               <div className="profile__recentItems">
                   <RecentItem
                   url={'https://www.youtube.com/embed/x3eRXeMB-4k'}
                   title={'Opensea Blockchain App'}
                   />
               
                   <RecentItem
                   url={'https://www.youtube.com/embed/BbueNXEaAxw'}
                   title={'Top Programming languages to learn'}
                   />
                
                   <RecentItem
                   url={'https://www.youtube.com/embed/hhZtiytNaBQ'}
                   title={'Cryptopunk Web3'}
                   />
               </div>
               <div className="profile__categories">
                   <h2>Sheikh Yeamin recently stream category</h2>
                   <img src="https://pbs.twimg.com/profile_images/1517185752895229954/YbFoWUJU_400x400.jpg" alt="" />
                   <h3>Science and Technology</h3>
               </div>
            </div>
        </div>
    );
};

export default Profile;