import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries} from '../Api/ApiWorldChart';
import "./ChartCountryPicker.scss"


const Countries = ({handleCountryChange}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };

        fetchAPI();
    }, []);

    return (
        <div className="form-input-container">
            <FormControl className="formControl-chart">
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl></div>
    );
};

export default Countries;
