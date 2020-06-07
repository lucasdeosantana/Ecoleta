import { createContext } from 'react';
import { stateContextI } from '../interfaces/appInterfaces'

const contextSetCity = createContext<stateContextI>({} as stateContextI)

export default contextSetCity