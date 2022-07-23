import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [result, setResult] = useState([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://obscure-mesa-79291.herokuapp.com/results/${id}`);
            setResult(data)
        })()
    }, [id])
    console.log(result)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold">Name: {result.name}</h1>
                    <h2 className="text-3xl py-3">Others details</h2>
                    <div className='flex justify-between pb-5'>
                        <div className='mr-5'>
                            <p className="py-2">Birth Date: {result.birth_year}</p>
                            <p className="py-2">Gender: {result.gender}</p>
                            <p className="py-2">Hair Color: {result.hair_color}</p>
                        </div>
                        <div>
                            <p className="py-2">Height: {result.height} cm.</p>
                            <p className="py-2">Weight: {result.mass} kg.</p>
                            <p className="py-2">Scin Color: {result.skin_color}</p>
                        </div>
                    </div>
                    <Link to='/results' className="btn btn-primary btn-sm">Main Page</Link>
                </div>
            </div>
        </div>
    );
};

export default Details;