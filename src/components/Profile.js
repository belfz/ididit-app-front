import React from 'react';
import { connect } from 'react-redux';
import Achievements from './Achievements';

const Profile = ({dispatch, profile = {achievements: []}}) => {
    console.log('profile:', profile);
    return (
        <div>
            <p>Profile: {profile.email}</p>
            {profile.achievements && <Achievements list={profile.achievements} />}
        </div>    
    );
};

export default connect((state) => ({
    profile: state.authReducer.profile
}))(Profile);
