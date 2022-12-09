import React from 'react';

const Home = () => {
    return (
        <>
            <h1 className='text-center'>
                Katarina "Lulu" Mihaylovich
            </h1>
            <div className='container'>
                <figure className='align-items'>
                    <img src={require('../assets/skills.png')}  className='skills'/>
                    <img src={require('../assets/Lulu-50.jpg')} className='project-lulu'/>
                    <h3 className='text-center'>
                    Welcome to my coding website.
                    </h3>
                </figure>
            </div>
        </>

    )

}

export default Home;