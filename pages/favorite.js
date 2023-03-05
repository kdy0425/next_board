import Head from 'next/head'
import Image from 'next/image'
import Axios from 'axios'
import React, { useState , useEffect, useMemo} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Favorite(props){
    
    const [content, setcontent] = useState([]);
    useEffect(() => {
        setcontent(props.data.results);
    }, []);
    console.log(content)

    return (
        <>
            <div className='item_list'>
            {content.map((item) => (
            <div key={item.id} className="item">
                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
                <div className="cnt">
                    <span className="subject">{item.original_title}</span>
                    <span className="date">{item.release_date}</span>
                </div>
            </div>
            ))}
            </div>
        </>
    )

}


export async function getServerSideProps() {
    const apiUrl = process.env.API_URL + `/account/mungmung2sv@naver.com/favorite/movies?api_key=` + process.env.API_KEY + '&session_id=2334070bc3148dfa2eaeb3ab8fd3a4bf1a1578fa';
    console.log(apiUrl)
    const res = await Axios.get(apiUrl)
    return {
        props: { data: res.data },
    };
  };