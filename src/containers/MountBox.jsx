import React, {useState, useEffect} from "react";
import MountList from "../components/MountList";
import CharForm from "../components/CharForm";

const MountBox = () => {
    const [mounts, setMounts] = useState([])
    const [charMounts, setCharMounts] = useState([])

    const base = "https://eu.api.blizzard.com"
    const mountPath = "data/wow/mount/index"
    const charPath = "profile/wow/character"
    const myChar = "azjolnerub/tania"
    const collPath = "collections/mounts"
    const namespace = "eu&locale=en_GB&access_token="
    const mountsUrl = `${base}/${mountPath}?namespace=static-${namespace}`
    const charMountsUrl = `${base}/${charPath}/${myChar}/${collPath}?namespace=profile-${namespace}`

    const getMounts = async function(){
        const resp = await fetch(mountsUrl+(process.env.BLZ_TOKEN))
        const mountData = await resp.json()
        setMounts(mountData.mounts)
        // console.log(mountData.mounts)
        // .catch((error) => console.log(`error loading data; ${error}`))
    }    

    // const getCharMounts = async function(){
    //     const resp = await fetch(charMountsUrl+(process.env.BLZ_TOKEN))
    //     const charMountData = await resp.json()
    //     setCharMounts(charMountData.mounts)
    //     console.log(charMountData.mounts)
    //     // .catch((error) => console.log(`error loading data; ${error}`))
    // }    

    const handleCharInput = (event) => {
        event.preventDefault()
        const copyMounts = [... mounts]

    }

    useEffect(() => {
        getMounts()
        // getCharMounts()
        console.log(`finished fetching data for mounts and charmounts`)
        }, [])

        return (
            <>  
                <h3>The serious mount collector list </h3>
                <CharForm/>
                <p> Below you can find all the mounts in World of Warcraft, for the retail EU edition. 
                <br></br>You can click on the link to see more detail at wowhead.</p>
                {mounts ? <MountList mounts={mounts}/> : null}
            </>
        )

}

export default MountBox