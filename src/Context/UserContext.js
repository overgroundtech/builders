import {useState, createContext, useMemo, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {ME} from '../graphql/query';
import Loader from 'react-loader-spinner';

export const UserContext = createContext();

export default function UserProvider({children}){
    const [user, setUser] = useState();
    const [login, setLogin] = useState(false);
    const {loading, data}  = useQuery(ME);
    const providerValue = useMemo(() => ({user, setUser, login, setLogin}), [user, setUser, login, setLogin])

    useEffect(()=> {
        if(data){
            setUser(data.me);
        }
    }, [data, setUser]);

    if (loading) return <Loader type="TailSpin" color="#00BFFF" height={100} width={100} timeout={10000} />;

    return (
        <UserContext.Provider value={providerValue}>
            {children}
        </UserContext.Provider>
    )
}