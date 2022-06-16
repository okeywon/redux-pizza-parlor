function CustomerInfo(){
    console.log('inside')
    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <ul>
            <li>
                <input type={'text'} placeholder="Name"/>
            </li>
            <li>
                <input type={'text'} placeholder="Street Adress"/>
            </li>
            <li>
                <input type={'text'} placeholder="City"/>
            </li>
            <li>
                <input type={"number"} placeholder="Zip"/>
            </li>
        </ul>
        <div>
            <button>Next</button>
        </div>
        </>
    )
}

export default CustomerInfo