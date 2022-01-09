import React from "react";


const Header = () => {
    return (
        <>

            <div className>
                <hr className="border-2 bg-green-500"/>
                <nav className="sm:bg-gray-100 md:bg-gray-100 lg:bg-gray-100 sm:text-black md:text-black lg:text-black flex sm:justify-between md:justify-between lg:justify-between">

                    <h1 className=" font-mono sm:width-4 md:width-4 lg-width-4 md:h-10 sm:h-10 lg:h-10  sm:py-3 md:py-3 lg:py-3 px-5 font-medium text-2xl">Dev-Get.com</h1>

                    <ul className=" space-x-2 sm:px-28 md:px-28 lg:px-28 sm:py-4 md:py-4 lg:py-4 sm:flex md:flex lg:flex sm:space-x-11 md:space-x-11  lg:space-x-11 sm:justify-end md:justify-end lg:justify-end ">



                        <button class="bg-gray-100  px-3 py-1 text-gray-700 border-gray-300 shadow-lg shadow-black -500/50 ...">Signup</button>

                        <button class="bg-blue-700 text-white px-3  py-1  shadow-lg shadow-black -500/50 ...">Login</button>


                    </ul>
                </nav>

                {/* sm-md-lg */}

                <hr className="text-gray-300" />
                {/* <main className="bg-gray-100 md -10 flex"> */}


            </div>

        </>
    )
}


export default Header;