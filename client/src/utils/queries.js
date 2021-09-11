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

export const GET_LIKES = gql`
    query getLikes($email: String!){
        getLikes(email: $email){
              userEmail
              groupName
              dog_ID
        }
    }
`

export const GET_MATCHES = gql`
    query getMatches($groupName: String!){
        getMatcches(groupName: $groupName){
            dog_ID
        }
    }
`