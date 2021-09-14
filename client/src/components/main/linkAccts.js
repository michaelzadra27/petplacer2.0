import "./linkAccts.css"
import { useState } from 'react'
import { useMutation } from "@apollo/react-hooks"
import { CREATE_GROUP, JOIN_GROUP } from "../../utils/mutations"

const LinkAccts = () => {
    const [createFormState, setCreateForm] = useState('')
    const [searchFormState, setSearchForm] = useState('')

    const [newGroup] = useMutation(CREATE_GROUP)

    const handleCreateChange = (event) => {
        const { name, value } = event.target;
        console.log("create")
        setCreateForm({ ...createFormState, [name]: value });
    };

    const handleSearchChange = (event) => {
        const { name, value } = event.target;
        console.log("search")
        setSearchForm({ ...searchFormState, [name]: value });
    };

    const searchForGroup = (event) => {
        event.preventDefault()
        console.log(searchFormState)
    }

    const createGroup = (event) => {
        event.preventDefault()
        console.log(createFormState)

        const { data } = newGroup({variables: {...createFormState}})
        console.log(data)
    }

    return (
        <div className="findAccts">
            <div className="linkCard">
                <h4 className="title">Join a Group</h4>
                <div className="acctForm">
                    <form className="linkForm" onSubmit={searchForGroup}>
                        <label>Search for Group</label>
                        <input
                            type='text'
                            placeholder=''
                            name='groupName'
                            onChange={handleSearchChange}
                            value={searchFormState.groupName}
                            required
                        />
                        <button className="linkSearchBtn">Search</button>
                    </form>
                </div>
                <div className="linkResults">
                    <p className="emailResults">Groups display here</p>
                    <button className="linkResultBtn">Join</button>
                </div>
                <h4 className="title">Create a Group</h4>
                <div className="acctForm">
                    <form className="linkForm" onSubmit={createGroup}>
                        <label>Create a Group</label>
                        <input
                            type='text'
                            placeholder=''
                            name='groupName'
                            onChange={handleCreateChange}
                            value={createFormState.groupName}
                            required
                        />
                        <button className="linkSearchBtn">Create</button>
                    </form>
                </div>
                <div className="closeBtnDiv">
                    <button className="closeLinkBtn">Close</button>
                </div>
            </div>

        </div>
    );
}

export default LinkAccts;