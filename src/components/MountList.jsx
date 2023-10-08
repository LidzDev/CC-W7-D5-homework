import React from "react";
import Mount from "./Mount";

const MountList = ({mounts}) => {
    const mountItems = mounts.map((mount, index) => {
    return <Mount mount={mount} key={index}/>
    })    

    return (
        <>
            <ol>
            {mountItems}
            </ol>
        </>
    );
}

export default MountList