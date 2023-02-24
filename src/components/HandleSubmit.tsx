import { FormEvent } from "react";

export const HandleSubmit = async (event: FormEvent<Element>, id: number) => {
    event.preventDefault();
    alert(`Hello World ${id}`)
}
