import React, { useState, useEffect, useContext } from 'react'
import axios from "axios";

import { MainContext } from '../../Contexts/MainContext';

import '../Main/main.css'

export const Main = () => {

    const { data, setData, error, setError, isLoading, setIsLoading} = useContext(MainContext);

    const [apiUrl, setApiUrl] = 
    useState(`https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&locale=us&apiKey=dSdCEhxwiWujTb_v9bZlnqI7eQ3yyy0L`
      );

    useEffect(() => {
      const getData = async () => {
        try {
          setIsLoading(true);
          const response = await axios.get(apiUrl);
          setData(response.data.results);
          setError(null);
        } catch (error) {
          setError(error.message);
          setData(null);
        } finally {
          setIsLoading(false);
        }
      };
      getData();
    }, []);


  return (
    <>
    <h1 className='mainContainer'>Main</h1>
    </>
  )
}

