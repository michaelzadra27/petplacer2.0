import "./linkAccts.css"
import { useState } from 'react'
import { useMutation, useQuery } from "@apollo/react-hooks"
import { CREATE_GROUP, JOIN_GROUP } from "../../utils/mutations"
import { FIND_GROUP } from "../../utils/queries"

const LinkAccts = () => {
    const [createFormState, setCreateForm] = useState('')
    const [searchFormState, setSearchForm] = useState('')
    const [foundGroup, setfoundGroup] = useState('')
    const { loading, data, refetch } = useQuery(FIND_GROUP, {variables: {...searchFormState}})

    const [newGroup] = useMutation(CREATE_GROUP)
    const [joinGroup] = useMutation(JOIN_GROUP)

    const handleCreateChange = (event) => {
        const { name, value } = event.target;
        setCreateForm({ ...createFormState, [name]: value });
    };

    const handleSearchChange = (event) => {
        const { name, value } = event.target;
        setSearchForm({ ...searchFormState, [name]: value });
    };
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const SearchForGroup = async (event) => {
        event.preventDefault()
        const results = await refetch({...searchFormState})
        setfoundGroup(results.data.findGroup.groupName)
    }

    const createGroup = (event) => {
        event.preventDefault()

        const { data } = newGroup({variables: {...createFormState}})
    }

    const handleJoinGroup = async (event) => {
        event.preventDefault()
        const { data } = await joinGroup({variables: { groupName: foundGroup }})
    }

    return (
        <div className="findAccts">
            <div className="linkCard">



                <h4 className="title">Join a Group</h4>

                <div className="acctForm">
                    <form className="linkForm" onSubmit={SearchForGroup}>
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
                    <form className="joinEmails" onSubmit={handleJoinGroup}>
                        <p className="emailResults">EMAIL RESULTS{foundGroup}</p>
                        <button className="linkResultBtn">Join</button>
                    </form>
                </div>
                <h4 className="title"Create a Group>Create a Group</h4>
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