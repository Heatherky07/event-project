import React from 'react'
import MainLayout from '../Layouts/MainLayout';
import { supabase } from '../utils/supabase';
import { useEffect, useContext } from 'react';
import { SessionContext } from '../Contexts/SessionContext';


const Profile = () => {
    const session = useContext(SessionContext);
    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select()
                .eq('id', session.user.id)
                .single();
            if (error) alert(error.message);
            if (data) console.log("data", data);
        }

        if (session) {
            fetchProfile();
        }
    }, [session]);


    return <MainLayout>Profile</MainLayout>
}

export default Profile;