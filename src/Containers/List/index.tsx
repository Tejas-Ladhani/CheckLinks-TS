import { useEffect, useState } from 'react';
import { ListHeader, Tile } from '../../Components';
import axios from 'axios';
import style from './style.module.css';

export default function List() {

    const temp: {}[] = [];
    const [ListOfChains, setListOfChains] = useState<Array<any>>([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://app.subsocial.network/subid/api/v1/chains/properties',
            headers: {}
        })
            .then(function (response) {
                /**
                 * Fetching the Values from key-value pairs ; using Object.values() - return array of objects
                 * Iterating through every item of the obtained array & checking , if the "tokenSymbol" & "tokenDecimals" key is present in that particular object item.
                 * If the keys are present , we are simply pushing/saving it in our variable : temp
                 * And after the completion ot the iteration, we are saving it in our state.
                 */
                Object.values(response.data).map((item: any) => {
                    if ("tokenSymbol" in item && "tokenDecimals" in item)
                        temp.push(item);
                });
                setListOfChains(temp);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);

    type itemType = {
        name: string;
        icon: string;
        ss58Format: number;
        tokenSymbol: string;
        tokenDecimals: number;
    }
    return <div className={style.List}>
        <ListHeader />
        <div className={style.ListContainer}>
            {/* Mapping the data with Tile Component */}
            {ListOfChains && ListOfChains.map((item: itemType, index) => <Tile key={index} name={item.name} icon={item.icon} />)}
        </div>
    </div>;
}