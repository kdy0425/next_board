import Head from 'next/head'
import Image from 'next/image'
import Axios from 'axios'
import React, { useState , useEffect, useMemo} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Detail(props){
    
    const [content, setcontent] = useState([]);
    useEffect(() => {
        setcontent(props.data);
    }, []);
    console.log(content)
    

    return (

        <>
            <div className="detail_wrap">
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}/>
                </div>
                <div className=''>제목: {content.original_title}</div>
                <div className=''>등록일: {content.release_date}</div>
                <div className=''>조회수: {content.vote_count}</div>
                <div className=''>{content.overview}</div>
            </div>
        </>
    )

}


export async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = process.env.API_URL + `/movie/${id}?api_key=` + process.env.API_KEY;
    console.log(apiUrl)
    const res = await Axios.get(apiUrl)
    return {
        props: { data: res.data },
    };
  };