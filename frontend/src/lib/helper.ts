import { useRef } from "react"

export default function useModal() {
    const ref = useRef<null|HTMLDialogElement>(null);
    
    const onOpen = () => {
        console.log('show the fucking modal')
        ref.current?.showModal()};

    const onClose = () => {
        ref.current?.close();
    }

    return { ref, onOpen, onClose}
}