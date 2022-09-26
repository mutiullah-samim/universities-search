import React, { useEffect, useState, useRef } from 'react'
import apiService from '../../services/api'
import { University } from '../../types/university'
import Item from './Item'

const Universities = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [order, setOrder] = useState<string>('ASC')
    const [universities, setUniversities] = useState<University[]>([])
    const searchInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searchQuery) {
            searchUniversity()
        }
    }, [searchQuery, order])

    const searchUniversity = async () => {
        setLoading(true)
        const universities = await apiService.get(`/university/search?name=${searchQuery}&order=${order}`)
        setUniversities(universities.data)
        setLoading(false)
    }

    return (
        <div className="universities-container">
            <div className="universities-header">
                <div className="search-container">
                    <input type="text" ref={searchInput} name="search" placeholder='Enter university name' autoFocus onKeyUp={(event) => {
                        if (event.key == 'Enter') {
                            // @ts-ignore
                            setSearchQuery(event.target.value != '' ? event.target.value : '')
                        }
                    }} />
                    <button className="search-btn" onClick={() => {
                        // @ts-ignore
                        setSearchQuery(searchInput.current.value != '' ? searchInput.current.value : '')
                    }}>Search</button>
                </div>
                <div className="order">
                    <h4>Order: </h4>
                    <div>
                        <input type="radio" id="asc" name="order" value="ASC" checked={order === 'ASC'} onChange={() => {
                            setOrder('ASC')
                        }} />
                        <label htmlFor="asc">ASC</label>
                        <input type="radio" id="desc" name="order" value="DESC" checked={order === 'DESC'} onChange={() => {
                            setOrder('DESC')
                        }} />
                        <label htmlFor="desc">DESC</label>
                    </div>
                </div>
            </div>
            <div className="universities">
                {loading && <div className="loading-indicator"></div>}
                {(!loading && universities.length == 0) && <p style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                    {searchQuery != '' ? 'No result found' : 'Enter a university name to see the result'}
                </p>
                }
                {(!loading && universities.length > 0) && universities.map((university: University, index: number) => (
                    <Item university={university} index={index} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Universities