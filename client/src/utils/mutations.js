import { gql } from '@apollo/client';

export const CREATE_GROUP = gql`
    mutation createGroup($groupName:String!, $email: String!){
        createGroup(groupName: $groupName, email: $email){
            _id
            groupName
            profile{
              email
            }
        }
    }
`

export const JOIN_GROUP = gql`
    mutation joinGroup($groupName:String!, $email: String!){
        joinGroup(groupName: $groupName, email: $email){
            _id
            groupName
            profile{
                email
            }
        }
    }
`

export const SIGN_UP = gql`
    mutation signup($email: String!, $password: String!){
        signUp(email: $email, password: $password){
            token
            profile{
                _id
                email
                password
            }
        }
    }
`


export const LIKE = gql`
    mutation like($email: String!, $groupName: String!, $dog_ID:ID!){
        like(email: $email, groupName: $groupName, dog_ID: $dog_ID){
            dog_ID
        }
    }
`


export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            profile{
                _id
            }
        }
    }
`

