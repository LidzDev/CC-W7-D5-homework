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
        const resp = await fetch(mountsUrl+(process.env.BLZ_TOKEN))
        const mountData = await resp.json()
        setMounts(mountData.mounts)
    }    

    const getCharMounts = function(url){
        fetch(url+(process.env.BLZ_TOKEN))
        .then(resp =>  resp.json())
        .then((data) => {setCharMounts(data.mounts)
            console.log('getting charmountdata')
            console.log(data.mounts)
        })
        .then(compareMounts())
    }    

    const onCharInput = (event) => {
        setCharacter(event.target.value)
        console.log(event.target.value)      
    }

    const onRealmInput = (event) => {
        setRealm(event.target.value)
        console.log(event.target.value)      
    }

    const seeCharMounts = (event) => {
        event.preventDefault()
        const url = `${base}/${charPath}/${realm}/${character}/${collPath}?namespace=profile-${namespace}`
        console.log(url)
        getCharMounts(url)
    }

    const compareMounts = () => {
        const copyMounts = [... mounts]
        charMounts.map((charMount, index) => {
            console.log(charMount.id)
        })
    }

    useEffect(() => {
        getMounts()
        console.log(`finished fetching data for mounts`)
        }, [])

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

export default MountBox