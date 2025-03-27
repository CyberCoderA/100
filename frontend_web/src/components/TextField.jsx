import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const TextField = (props) => {
    const { placeholder } = props;

    return (
        <div class="hidden relative md:flex">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MagnifyingGlassIcon className="size-7 text-dark-light" />
            </div>
            <input 
                type="text" 
                className="bg-white border-2 text-dark-light text-sm font-bold rounded-lg block w-80 h-10 placeholder:text-lg pl-12" 
                placeholder={placeholder} />
        </div>
    );
};

export default TextField;
