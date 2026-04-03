import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import './Root.css';

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = navigation.state === 'loading';

    return (
        <div>
            <Header />

            <div className='root-main'>
                <SideBar />

                <div className='flex-1'>
                    {isNavigating && (
                        <div className='text-center text-blue-600 text-xl my-4'>
                            Navigating...
                        </div>
                    )}

                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Root;