import React from "react";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function LandingPage() {
    return (
        <div>
            <div className="text-center font-sans">
                {/* eslint-disable-next-line */}
                <div className="h-32"></div>
                {/* eslint-disable-next-line */}
                <a className="text-2xl tracking-tight font-semibold md:text-base">lorem ipsum</a>
                <div className="h-8"></div>
                {/* eslint-disable-next-line */}
                <span className="text-6xl font-extrabold tracking-widest">RANDOMISATION ANDOCRINIENT</span>
                <div className="h-8"></div>
                {/* eslint-disable-next-line */}
                <a className="text-2xl tracking-tight font-semibold">bullshit descriptif again the zouk</a>
                <div className="h-24"></div>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-10 rounded inline-flex items-center py-6">
                    < ArrowForwardIosIcon />
                    <span className="text-xl">Register</span>
                </button>
                <div className="h-32"></div>
            </div>
        </div>
    )
}

export default LandingPage
