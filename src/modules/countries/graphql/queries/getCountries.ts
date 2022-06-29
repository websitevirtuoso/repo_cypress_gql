// #import "../fragments/country.fragment.gql"
import gql from 'graphql-tag'
import { countries } from '../fragments/country'

export const getCountries = gql`
  ${ countries }

  query GetCountries {
    countries {
      ...CountryFragment
    }
  }
`
