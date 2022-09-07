import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import List from "../Components/List"
import { createTheme } from '@mui/material';


const Home: NextPage = () => {
    // State variable for the search input.
    const [Input, setInput] = useState("");
    const [infoJson, setinfoJson] = useState({ results: [{ title: "", image: "", summary:"" }] });
  
    const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch?";
  
    const buttonScaling = {
      flex: {
        xs:'100%',
        sm:'50%'
      },
    }

    // Needs a working key.
    const KEY_URL = "apiKey=411d56db68624269b40f7bec7b6cbd4c";
  
    // Search function uses axios to make api call.
    function search() {
      axios.get(RECIPE_BASE_URL + KEY_URL + "&addRecipeInformation=true&query=" + Input).then((res) => {
        setinfoJson(res.data);
      });
    }
  


  return (
    <div className="Homepage">
      <Head>
        <title>Recipe Renovator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="Homepage">
      <h1>Recipe Renovator</h1>


      
        <FormGroup sx = {buttonScaling}>
        <TextField
          id="outlined-basic"
          label="Food"
          variant="outlined"
          focused
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              setInput((e.target as HTMLInputElement).value)
              { search() }
            }
          }}
        />
        <Button variant="outlined"
          onClick={e => { search() }}
        >Submit</Button>
        {/* <Button variant="outlined"
          onClick={e => { search() }}
        >Surpise Me</Button> */}
        </FormGroup>
      

      <div>
        <p className="searchtext">you searched for {Input}</p>

        <div id="recipe-result">
          Recipe Results
          <List 
          input={infoJson}/>
        </div>
      </div>
    </div>

    </div>

    
  )
}

export default Home