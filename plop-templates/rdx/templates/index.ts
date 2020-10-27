import { <%= name.charAt(0).toUpperCase()+name.slice(1) %>sReducer } from './reducer'
import * as Actions from './actions'

export * from './saga'
export * from './types'
export const <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions = Actions
export default <%= name.charAt(0).toUpperCase()+name.slice(1) %>sReducer
