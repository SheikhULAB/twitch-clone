import React from 'react';
import Channel from '../Channel/Channel';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
           <div className="sidebar__top">
           <h5>Followed Channels</h5>
            <Channel
             avatar = 'https://avatars.githubusercontent.com/u/60327839?s=280&v=4'
             name = 'programmer'
             followers = '1.2M'
             />
               <Channel
             avatar = 'https://avatars.githubusercontent.com/u/49518797?s=400&u=3b3ec248bc5ddc33211822213d24f1b0a7207cc8&v=4'
             name = 'yeamin'
             followers = '100M'
             />
            <h5>Recommended Channels</h5>
            <Channel
             avatar = 'https://avatars.githubusercontent.com/u/49518797?s=400&u=3b3ec248bc5ddc33211822213d24f1b0a7207cc8&v=4'
             name = 'davrakoshi'
             followers = '200k'
             />
            <p className="sidebar__topShowMore">Show More</p>
           </div>

           <div className="sidebar__bottom">
               <div className="sidebar__bottomContainer">
                   <i className='fas fa-search'></i>
                   <input type="text" placeholder='Search to Add Friends' />
               </div>
           </div>
        </div>
    );
};

export default Sidebar;