import ApolloClient from 'apollo-boost';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import {Grid} from "@material-ui/core";
import CountryCard from "./CountryCard";
import { makeStyles } from '@material-ui/core/styles';

// initialize a GraphQL client
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

// write a GraphQL query that asks for names and codes for all countries
const GET_COUNTRIES = gql`
  {
    countries {
      name
      native
      emoji
      currency
      code
    }
  }
`;

// create a component that renders an API data-powered select input
export default function App(props) {
  const[country,setCountry]=useState('US');
  const classes = useStyles();

  // set the selected country to the new input value
  function onCountryChange (event) {
    setCountry(event.target.value);
  };

    return (
      <React.Fragment>
      <div className={classes.root}>
      <Query query={GET_COUNTRIES} client={client}>
        {({loading, error, data}) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;

          return (
            <Grid container spacing={1} alignItems={"center"} justify={"center"}>
              {data.countries.map(country => (
                <CountryCard key={country} country={country}/>
              ))}
            </Grid>
          );
        }}
      </Query>
    </div>
    </React.Fragment>
    );
}
