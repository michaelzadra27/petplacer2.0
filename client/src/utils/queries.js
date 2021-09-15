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
    query findGroup($groupName: String!){
        findGroup(groupName: $groupName){
            groupName
        }
    }
`

export const GET_LIKES = gql`
    query getLikes{
        getLikes{
                profile
        }
    }
`

export const GET_MATCHES = gql`
    query getMatches{
        getMatches{
            profile{
                _id
            }
        }
    }
`