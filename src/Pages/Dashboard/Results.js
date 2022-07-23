import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';

const Results = () => {
    const [results, setResults] = useState([]);
    const [limit, setLimit] = useState(3);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0)
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://obscure-mesa-79291.herokuapp.com/results?limit=${limit}&pageNumber=${page}`);
            setResults(data.data)
            setPageCount(Math.ceil(data.count/limit))
            setIsloading(false)
        })()
    }, [limit, page])

    if (isloading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Height</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            results.map((result, index) =>
                                <tr class="hover">
                                    <th>{index + 1}</th>
                                    <td>{result.name}</td>
                                    <td>{result.gender}</td>
                                    <td>{result.height} cm</td>
                                    <td><Link to={`/details/${result._id}`} className='btn btn-primary btn-xs'>Details</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className='mt-10 flex justify-center'>
                {
                    [...Array(pageCount).keys()].map((number, index) =>
                        <button key={index} onClick={ () => setPage(number)} className={`btn btn-outline btn-sm text-primary border-primary hover:bg-primary hover:border-primary mx-2 `} >
                            {number + 1}
                        </button>
                    )
                }
              <select default={limit} onChange={ e => setLimit(e.target.value)} className='btn btn-sm btn-outline btn-primary' name="" id="">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
        </div>
    );
};

export default Results;