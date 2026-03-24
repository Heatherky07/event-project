import React from 'react'
import MainLayout from '../Layouts/MainLayout';
import { supabase } from '../utils/supabase';
import { useEffect, useContext, useState } from 'react';
import { SessionContext } from '../Contexts/SessionContext';
import { Link } from 'react-router';
import EditIcon from '../components/Icons/EditIcon';


const Profile = () => {
    const session = useContext(SessionContext);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select()
                .eq('id', session.user.id)
                .single();

            if (error) alert(error);
            if (data) {
                setProfile(data);
            }
        }

        if (session) {
            fetchProfile();
        }
    }, [session]);


    return <MainLayout>
        <div className="text-center py-24 -px-8">
            Firstname: {profile?.firstname} <br />
            Lastname: {profile?.lastname}<br />
            Email: {profile?.email}<br /><br />
            <div >
                <Link to="/edit-profile" className="btn btn-primary rounded-full">
                    <EditIcon className="text-lg mr-2" />
                    Edit Profile
                </Link> <br />
            </div>
        </div>
    </MainLayout>
}

export default Profile;
