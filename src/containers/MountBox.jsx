import React, {useState, useEffect} from "react";
import MountList from "../components/MountList";

const MountBox = () => {
    const [mounts, setMounts] = useState([])
    const [charMounts, setCharMounts] = useState([])

    const base = "https://eu.api.blizzard.com"
    const mountPath = "data/wow/mount/index"
    const charPath = "profile/wow/character"
    const collPath = "collections/mounts"
    const namespace = "eu&locale=en_GB&access_token="
    const mountsUrl = `${base}/${mountPath}?namespace=static-${namespace}`
    const [character, setCharacter] = useState()
    const [realm, setRealm] = useState()

    const getMounts = async function(){
        // console.log(`mountsUrl (process.env.BLZ_TOKEN)`)
        const resp = await fetch(mountsUrl+(process.env.BLZ_TOKEN))
        const mountData = await resp.json()
        setMounts(mountData.mounts)
        console.log(mountData.mounts)
    }    

    const getCharMounts = function(url){
        fetch(url+(process.env.BLZ_TOKEN))
        .then(resp =>  resp.json())
        .then((data) => {
            setCharMounts(data.mounts)
        })   // .catch here
    }    

    const onCharInput = (event) => {
        setCharacter(event.target.value)
        // console.log(event.target.value)      
    }

    const onRealmInput = (event) => {
        setRealm(event.target.value)
        // console.log(event.target.value)      
    }

    const seeCharMounts = (event) => {
        event.preventDefault()
        const url = `${base}/${charPath}/${realm}/${character}/${collPath}?namespace=profile-${namespace}`
        // console.log(url)
        getCharMounts(url)
    }

    const compareMounts = () => {
        // const copyMounts = [...mounts]
        console.log('reached the compare function')
        console.log(charMounts)
        charMounts.map((charMount, index) => {
            // console.log(charMount.mount.id) - this works
            // console.log(charMount.mount.name) - this works
        })

        const copyMounts = mounts.map((mount) => {
            const copyMount = mount
            // console.log(mount.name) - works
            console.log(mount.id)
            copyMount.collected = false
            charMounts.map((charMount) => {
                // console.log('charmount loop')  - works
                // console.log(charMount.mount.id) - works
                if (mount.id == charMount.mount.id) {
                    copyMount.collected = true
                    console.log('mount match found')
                    return copyMount
                }
            })
            return copyMount
        })
        console.log(copyMounts)
        setMounts(copyMounts)
    }

    useEffect(() => {
        getMounts()
        console.log(`finished fetching data for mounts`)
    }, [])

    useEffect(() => {
        compareMounts()
    }, [charMounts])

        return (
            <>  
                <h3>The serious mount collector list </h3>
                <form onSubmit={seeCharMounts}>
                    <label htmlFor="character">Character name:</label>
                    <input id="character" type="text" value={character} onChange={onCharInput} />
                    <label htmlFor="realm">Realm:</label>
                    <input id="realm" type="text" value={realm} onChange={onRealmInput} />
                    <input type="submit" value="see char mounts"/>
                </form>
                <p> Below you can find all the mounts in World of Warcraft, for the retail EU edition. 
                <br></br>You can click on the link to see more detail at wowhead.</p>
                {mounts ? <MountList mounts={mounts} /> : null}
            </>
        )

}
// onClick{() => handleFavouriteButton(index)}
// is creating the function on click look into this for the mount.jsx
export default MountBox