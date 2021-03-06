import { gql } from '@apollo/client';

export const CREATE_GROUP = gql`
    mutation createGroup($groupName:String!){
        createGroup(groupName: $groupName){
            token
        }
    }
`

export const JOIN_GROUP = gql`
    mutation joinGroup($groupName:String!){
        joinGroup(groupName: $groupName){
            _id
            groupName
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
    mutation like($dogPhotoApi: String, $email: String, $groupName: String, $dog_ID:ID, $dogName: String, $contactCity: String, $contactEmail: String, $dogURL: String, $description: String){
        like(dogPhotoApi: $dogPhotoApi, email: $email, groupName: $groupName, dog_ID: $dog_ID, dogName: $dogName, contactCity: $contactCity, contactEmail: $contactEmail, dogURL: $dogURL, description: $description){
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

