import axios from 'axios';
import SingleHoliday from 'components/Holiday/SingleHoliday';
import React, { useState,useEffect } from 'react';

const url = 'https://run.mocky.io/v3/1e49ea4b-166f-407f-ac6c-65cb92d5b9cc'

export default function Header() {
    const [data,setData] = useState([]);
    const [selected,setSelected] = useState(1);

    const nextHoliday = () => {
        setSelected((prevValue) =>{
            if (prevValue + 1 === data.data.length) {
                return 0;
            } else {
                return prevValue + 1;
            }
        })
    }

    const prevHoliday = () => {
        setSelected((prevValue) => {
            if (prevValue - 1 < 0) {
                return data.data.length - 1;
            } else {
                return prevValue - 1;
            }
        })
    }

    const getData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getData()
    }, [])
    
    if (data.success) {
        return (
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
                {
                                data.data.length > 0 ? (
                                    <SingleHoliday {...data.data[selected]} 
                                        next={nextHoliday}
                                        prev={prevHoliday}
                                    />
                                ) : (
                                    <h4>No Vacanze</h4>
                                )
                            }
            </div>
        );
    } else {
        return <h2>Loading...</h2>
    }
    
}
