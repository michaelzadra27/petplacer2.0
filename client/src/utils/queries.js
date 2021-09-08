import { gql } from '@apollo/client'

export const QUERY_ME = gql`
    query me {
        me{
            _id
            email
        }
    }
`

export const FIND_GROUP = gql`
    query findGroup($name: String!){
        findGroup(name: $name){
            groupName
            profile
        }
    }
`