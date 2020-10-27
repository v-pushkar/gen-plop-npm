import {
    <%= name.charAt(0).toUpperCase()+name.slice(1) %>sState,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction,
    ActionTypes,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction,
    SetIsErrorFetchingAction,
    Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction
} from './types'
import { updateList } from './utils'

const INITIAL_STATE: <%= name.charAt(0).toUpperCase()+name.slice(1) %>sState = {
    <%= name %>sList: [],
    isFetching: false,
    <%= name %>Details: null,
    isFetchingDetails: false,
    predefinedValues: null,
    <%= name %>Draft: null,
    isErrorFetchingDetails: false
}

export type <%= name.charAt(0).toUpperCase()+name.slice(1) %>sAction =
    | Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction
    | SetIsFetchingAction
    | Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction
    | GetPredefinedValuesResponseAction
    | Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction
    | SetIsErrorFetchingAction
    | Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction

export const <%= name.charAt(0).toUpperCase()+name.slice(1) %>sReducer = (
    state: <%= name.charAt(0).toUpperCase()+name.slice(1) %>sState = INITIAL_STATE,
    action: <%= name.charAt(0).toUpperCase()+name.slice(1) %>sAction
): <%= name.charAt(0).toUpperCase()+name.slice(1) %>sState => {
    switch (action.type) {
        case ActionTypes.GET_<%= name.toUpperCase() %>S_RESPONSE:
            return {
                ...state,
                <%= name %>sList: [
                    ...(action as Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction).<%= name %>sList
                ]
            }
        case ActionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: (action as SetIsFetchingAction).isFetching
            }
        case ActionTypes.GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE:
            return {
                ...state,
                <%= name %>Details: (action as Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction)
                    .details
            }
        case ActionTypes.SET_IS_FETCHING_DETAILS:
            return {
                ...state,
                isFetchingDetails: (action as SetIsFetchingAction).isFetching
            }
        case ActionTypes.GET_PREDEFINED_VALUES_RESPONSE:
            return {
                ...state,
                predefinedValues: (action as GetPredefinedValuesResponseAction)
                    .values
            }
        case ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_RESPONSE:
            return {
                ...state,
                <%= name %>Draft: (action as Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction).draft
            }
        case ActionTypes.SET_IS_ERROR_FETCHING_DETAILS:
            return {
                ...state,
                isErrorFetchingDetails: (action as SetIsErrorFetchingAction)
                    .isError
            }
        case ActionTypes.ADD_<%= name.toUpperCase() %>_RESPONSE:
            return {
                ...state,
                <%= name %>sList: [
                    ...state.<%= name %>sList,
                    (action as Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction).<%= name %>
                ]
            }
        case ActionTypes.EDIT_<%= name.toUpperCase() %>_RESPONSE:
            return {
                ...state,
                <%= name %>sList: updateList(
                    state.<%= name %>sList,
                    action as Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction
                )
            }
        default:
            return state
    }
}
