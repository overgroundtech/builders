import {useState, createContext, useMemo} from 'react';

export const AlertContext = createContext();


export default function AlertProvider({children}) {
    const [open, setOpen] = useState(false);
    const[message, setMessage] = useState();

    const providerValue = useMemo(()=>({open, setOpen, message, setMessage}), [open, setOpen, message, setMessage])

    return (
        <AlertContext.Provider value={providerValue}>
            {children}
        </AlertContext.Provider>
    )
}