import { useState } from "react";

export default function useModal() {
    const [modal, setModal] = useState(null);

    const handlerOpen = () => {
        console.log('wewew')
        setModal(true)
    }
    const handlerClose = () => {
        setModal(null);
    }

    return [
        modal, handlerOpen, handlerClose
    ]
}