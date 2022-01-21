import { useEffect, useState } from 'react';
import { ListHeader, Tile } from '..';
import axios from 'axios';
import style from './style.module.css';

export default function List() {

    const temp: {}[] = [];
    const [ListOfChains, setListOfChains] = useState<Array<any>>([]);

    const [count, setCount] = useState(0);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://app.subsocial.network/subid/api/v1/chains/properties',
            headers: {}
        })
            .then(function (response) {
                console.log(Object.values(response.data));
                Object.values(response.data).map((item: any) => {
                    if ("tokenSymbol" in item && "tokenDecimals" in item)
                        temp.push(item);
                });
                setListOfChains(temp);
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [count]);

    type itemType = {
        name: string;
        icon: string;
        ss58Format: number;
        tokenSymbol: string;
        tokenDecimals: number;
    }
    return <div className={style.List}>
        <ListHeader/>
        {ListOfChains && ListOfChains.map((item: itemType, index) => <Tile key={index} name={item.name} icon={item.icon} />)}
    </div>;
}