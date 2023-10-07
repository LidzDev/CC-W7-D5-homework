import React from "react";
import Mount from "./Mount";

const MountList = ({mounts, charMounts}) => {
    const mountItems = mounts.map((mount, index) => {
    return <Mount mount={mount} key={index} charmounts={charMounts}/>
    })    

    return (
        <>
        <h3>The serious mount collector list </h3>
        <p> Below you can find all the mounts in World of Warcraft, for the retail EU edition. 
            <br></br>You can click on the link to see more detail at wowhead.</p>
            <ol>
            {mountItems}
            </ol>
        </>
    );
}

export default MountList