import React, {useState, useEffect} from "react";
import MountList from "../components/MountList";

const MountBox = () => {
    const [mounts, setMounts] = useState([])
    const token = "EU3fPGcTFpFUVF6THeu5zuMV1m6jX7Qv0M"
    const url = "https://eu.api.blizzard.com/data/wow/mount/index?namespace=static-eu&locale=en_GB&access_token="
    
    const getMounts = async function(){
        const resp = await fetch(url+token)
        const mountData = await resp.json()
        setMounts(mountData.mounts)
        console.log(mountData.mounts)
            // console.log(`here are : ${mountData.length()}mounts`)
        }
        // .catch((error) => console.log(`error loading data; ${error}`))
        
    useEffect(() => {
        getMounts()
        console.log('finished fetching data')

        }, [])
    

        return (
            <>
            <p> we have some mounts to display</p>
            {mounts ? <MountList mounts={mounts}/> : null}
            </>
        )

}

export default MountBox