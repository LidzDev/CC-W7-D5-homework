import React from "react";
import Mount from "./Mount";

const MountList = ({mounts}) => {
    const mountItems = mounts.map((mount) => {
    return <Mount mount={mount}/>
    })    

    return (
        <>
        <h3>The serious mount collector list </h3>
            <ol>
            {mountItems}
            </ol>
        </>
    );
}

export default MountList