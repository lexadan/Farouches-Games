import { CSSProperties } from "react";

export const GlobalHeader = () => {
    return (
        <div className="bg-amber-500 w-full flex justify-evenly items-center p-2 ">
            <div>
                <img className="h-12" src="https://picsum.photos/200"/>
            </div>
            <div>
                <p className="text-white text-xl">FaroucheHub</p>
            </div>
        </div>
    );
}