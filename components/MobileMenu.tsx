import React from "react";

interface MobileMenuProps{
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) {
        return null;
    }
    return(
        <div className="bg-amber-600 opacity-60 w-40 absolute top-8 right-0 py-5 flex-col shadow-black shadow-md rounded-md flex">
            <div className="flex flex-col gap-4">
                <div className="px-3 text-left text-gray-950 hover:underline">
                    Series
                </div>
                <div className="px-3 text-left text-gray-950 hover:underline">
                    Films
                </div>
                <div className="px-3 text-left text-gray-950 hover:underline">
                    OnGoings
                </div>
                <div className="px-3 text-left text-gray-950 hover:underline">
                    Anonse
                </div>
                <div className="px-3 text-left text-gray-950 hover:underline">
                    Genre
                </div>
                <div className="px-3 text-left text-gray-950 hover:underline">
                    TOP - 10
                </div>
                <div className="px-3 text-left text-gray-950 hover:underline">
                    Search
                </div>
            </div>
        </div>
    )
};

export default MobileMenu;