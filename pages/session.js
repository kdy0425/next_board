import Head from 'next/head'
import Image from 'next/image'
import Axios from 'axios'
import React, { useState , useEffect, useMemo} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Session(props){
    async function session(){
        axios.post("url", {
                username: "",
                password: ""
            })
            .then(function (response) {
                console.log(response)
            }).catch(function (error) {
                // 오류발생시 실행
            }).then(function() {
                // 항상 실행
            });
            
        // async await 함수를 사용할 때, 
        
        try {
            const data = await axios.post("url");
        } catch {
            // 오류 발생시 실행
        }
    }
    

    return (

        <>
            <button type="button" onClick={session}>session</button>
        </>
    )

}


export async function getServerSideProps(context) {
    //const id = context.params.id;
    const apiUrl = process.env.API_URL + `/account/mungmung2sv@naver.com/favorite/movies?api_key=` + process.env.API_KEY;
    console.log(apiUrl)
    const res = await Axios.get(apiUrl)
    return {
        props: { data: res.data },
    };
  };