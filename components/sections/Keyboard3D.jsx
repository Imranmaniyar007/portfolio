"use client";

import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function Keyboard3D() {
    const splineRef = useRef(null);

    function onLoad(spline) {
        splineRef.current = spline;
    }
    

    return (
        
        <div className="w-full h-[700px]">
            <Spline scene="/scene.splinecode" onLoad={onLoad} />
        </div>
        
    );
}
