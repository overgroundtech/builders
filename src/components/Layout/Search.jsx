import React, {useState} from 'react';
import {ReactSearchAutocomplete} from 'react-search-autocomplete';
import {useMutation} from "@apollo/client";
import {SEARCH} from "../../graphql/mutation";
import {useHistory} from "react-router-dom";


export default function SearchArea(){
    const [search, {loading, error}] = useMutation(SEARCH);
    const [searchRes, setSearchRes] = useState([]);
    const history = useHistory();

    const handleSearch = async (value) => {
        const {data} = await search({
            variables: {
                key: value
            }
        });
        if(data){
            let results = data.search.results;
            let ids = results.map( item => item.id);
            setSearchRes(results.filter(({id}, index) => !ids.includes(id, index + 1)))
        }
    }
    const handleSelect = (item) => {
        history.push(`/products/${item.id}`)
    }

    return (
        <div style={{width: 400}}>
            <ReactSearchAutocomplete
                items={searchRes}
                onSearch={handleSearch}
                onSelect={handleSelect}
            />
        </div>
    )
}
