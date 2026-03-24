import MainLayout from '../Layouts/MainLayout';

{/* https://wallpaperaccess.com/full/18957.jpg wallpaper para dito sa part na to */ }

const HomePage = () => {
    return (
        <MainLayout>

            <div className="text-center py-24 -px-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Eventify Center!</h1>
                <p className="text-lg mb-8">Discover and catch amazing Pokémon with us.</p>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src="https://i.pinimg.com/1200x/f9/fe/20/f9fe204f3e659c61dcc894d79c62c7e8.jpg" alt="Tailwind CSS 3D card" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src="https://i.pinimg.com/736x/61/88/24/6188240c8c7146dadc041cbc6cd632ff.jpg" alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src="https://i.pinimg.com/736x/e3/3f/7b/e33f7b492b0958b814bdee63a08f3533.jpg" alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src="https://i.pinimg.com/736x/3c/4e/8a/3c4e8a3dab8aa044940c49de18b2311a.jpg" alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


        </MainLayout>
    )
};

export default HomePage;