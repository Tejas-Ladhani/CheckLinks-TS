import { useEffect, useState } from 'react';
import { Tile } from '..';
import style from './style.module.css';


export default function List() {
    const [ListOfChains, setListOfChains] = useState<Array<any>>([]);
    useEffect(() => {
         fetch("https://app.subsocial.network/subid/api/v1/chains/properties")
            .then(response => response.text())
            .then(result =>
                JSON.parse(result)
            )
            .then(result => {
                Object.keys(result)?.forEach(
                    (item) => {
                        // Sorting the Chains which have tokenSymbol and tokenDecimal as key. 
                        if ("tokenSymbol" in result[item] && "tokenDecimals" in result[item]) {
                            // For readability : pushing the object in List.  
                            let temp = ListOfChains;
                            temp?.push(result[item])
                            setListOfChains(temp)
                        }

                    }
                )
                console.log(ListOfChains)
            }) 

            .catch(error => console.log('error', error));
    }, [])

    type itemType = {
        name: string;
        icon: string;
        ss58Format:number;
        tokenSymbol: string;
        tokenDecimals: number;
    }
    return <div className={style.List}>
        {ListOfChains&&ListOfChains?.map((item: itemType,index) => <Tile key={index} name={item.name} icon={item.icon}/>)}    </div>;
}
