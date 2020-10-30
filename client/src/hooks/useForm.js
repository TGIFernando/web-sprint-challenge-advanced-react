// write your custom hook here to control your checkout form
import { useState } from 'react'

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
};

export default function useForm(){
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [values, setValues] = useState(initialValue)
    const [confirmVal, setConfirmVal] = useState(initialValue)

    const handleChanges = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value })
    };
  
    const handleSubmit = (e) => {
      e.preventDefault()
      setShowSuccessMessage(true)
      setConfirmVal(values)
      setValues(initialValue)
    };
    return[values, confirmVal, showSuccessMessage, handleChanges, handleSubmit]
}