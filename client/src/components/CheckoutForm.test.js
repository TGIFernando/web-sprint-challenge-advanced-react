import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm/>)
    const h2 = screen.getByText(/checkout\sform/i)
});

test("form shows success message on submit with form details", async () => {
    render (<CheckoutForm/>)

    const fName = screen.getByLabelText(/first name/i)
    const lName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const button = await screen.getByRole('button', {name: /checkout/i})

    fireEvent.change(fName, {target: {value: 'Fernando'}})
    fireEvent.change(lName, {target: {value: 'Chavez'}})
    fireEvent.change(address, {target: {value: '1234 some st'}})
    fireEvent.change(city, {target: {value: 'San-Diego'}})
    fireEvent.change(state, {target: {value: 'CA'}})
    fireEvent.change(zip, {target: {value: '92101'}})
    fireEvent.click(button);

    await screen.findByTestId(/successMessage/i)
    await screen.findByText(/Your new green friends will be shipped to:/i)
});
