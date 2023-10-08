import React from "react";

const Mount = ({mount}) => {

    const url = `https://www.wowhead.com/mount/${mount.id}`
//    let checkbox = `<input type="checkbox"/>`
    // const checkCharMounts = charMounts.map((charMount) => {
    //     if (charMount.id == mount.id) {
    //         checkbox = '<input type="checkbox" checked/>'
    //         }
    //     })

    return (
        <>
        <li><a href={url}>{mount.name}</a><input type="checkbox"/></li>
        </>
    )
}

export default Mount;