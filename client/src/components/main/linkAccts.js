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
        console.log("create")
        setCreateForm({ ...createFormState, [name]: value });
    };

    const handleSearchChange = (event) => {
        const { name, value } = event.target;
        console.log("search")
        setSearchForm({ ...searchFormState, [name]: value });
    };
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    const SearchForGroup = async (event) => {
        event.preventDefault()
        const results = await refetch({...searchFormState})
        console.log(results.data.findGroup.groupName)
        setfoundGroup(results.data.findGroup.groupName)
    }

    const createGroup = (event) => {
        event.preventDefault()
        console.log(createFormState)

        const { data } = newGroup({variables: {...createFormState}})
        console.log(data)
    }

    const handleJoinGroup = async (event) => {
        event.preventDefault()
        console.log("join")
        console.log(foundGroup)
        const { data } = await joinGroup({variables: { groupName: foundGroup }})
        console.log(data)
    }

    return (
        <div className="findAccts">
            <div className="linkCard">
                <h4 className="title" value="">Join a Group</h4>
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
                    <form onSubmit={handleJoinGroup}>
                        <p className="emailResults">{foundGroup}</p>
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