import React from "react";

const Mount = ({mount}) => {

    const url = `https://www.wowhead.com/mount/${mount.id}`

    return (
        <>
        <li>
            <a href={url}>{mount.name}</a> 
            <input id={mount.id} type="checkbox" name="collected" checked={mount.collected} />
        </li>
        </>
    )
}

export default Mount;