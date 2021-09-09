import { gql } from '@apollo/client';

export const CREATE_GROUP = gql`
    mutation createGroup($groupName:String!, $email: String!){
        createGroup(groupName: $groupName, email: $email){
            _id
            groupName
            email
        }
    }
`

export const JOIN_GROUP = gql`
    mutation joinGroup($groupName:String!, $email: String!){
        joinGroup(groupName: $groupName, email: $email){
            _id
            groupName
            email
        }
    }
`

export const SIGN_UP = gql`
    mutation signup($email: String!, $password: String!){
        signUp(email: $email, password: $password){
            profile{
                _id
                email
                password
            }
        }
    }
`