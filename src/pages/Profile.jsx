import React from 'react'
import MainLayout from '../Layouts/MainLayout';
import { supabase } from '../utils/supabase';
import { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        const fetchProfile = async () => {

            const { data, error } = await supabase.from('profiles').select()
            if (error) alert(error)
            if (data) console.log("data", data);
        }
        fetchProfile();
    }, []);
    return (
        <MainLayout>
            <div>Profile</div>
        </MainLayout>
    )
}

export default Profile