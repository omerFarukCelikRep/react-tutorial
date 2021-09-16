import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiUrl } from '../env/config';

function EmployeeDetails() {

    const {id} = useParams();

    const [employeeDetails, setEmployeeDetails] = useState({})

    useEffect(() => {
        fetch(apiUrl + '/api/suppliers/' + id)
            .then((res) => res.json())
            .then((data) => {
                setEmployeeDetails(data);
            });
    })

    return (
        <>
            <h1>Employee Details</h1>
            <hr />
            <span>Company Name: {employeeDetails.companyName}</span>
            <hr />
            <span>Contact Name: {employeeDetails.contactName}</span>
            <hr />
            <span>Contact Title: {employeeDetails.contactTitle}</span>
        </>
    )
}

export default EmployeeDetails
