import {useState, createContext, useMemo} from 'react';

export const AlertContext = createContext();


export default function AlertProvider({children}) {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('')
    const[message, setMessage] = useState('');

    const providerValue = useMemo(()=>({open, setOpen, message, setMessage, status, setStatus}),
        [open, setOpen, message, setMessage, status, setStatus])

    return (
        <AlertContext.Provider value={providerValue}>
            {children}
        </AlertContext.Provider>
    )
}