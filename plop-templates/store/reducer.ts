import {
    {{Name}}sState,
    Get{{Name}}sResponseAction,
    ActionTypes,
    Get{{Name}}DetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    Get{{Name}}DraftResponseAction,
    SetIsErrorFetchingAction,
    Submit{{Name}}ResponseAction
} from './types'
import { updateList } from './utils'

const INITIAL_STATE: {{Name}}sState = {
    {{name}}sList: [],
    isFetching: false,
    {{name}}Details: null,
    isFetchingDetails: false,
    predefinedValues: null,
    {{name}}Draft: null,
    isErrorFetchingDetails: false
}

export type {{Name}}sAction =
    | Get{{Name}}sResponseAction
    | SetIsFetchingAction
    | Get{{Name}}DetailsResponseAction
    | GetPredefinedValuesResponseAction
    | Get{{Name}}DraftResponseAction
    | SetIsErrorFetchingAction
    | Submit{{Name}}ResponseAction

export const {{Name}}sReducer = (
    state: {{Name}}sState = INITIAL_STATE,
    action: {{Name}}sAction
): {{Name}}sState => {
    switch (action.type) {
        case ActionTypes.GET_{{NAME}}S_RESPONSE:
            return {
                ...state,
                {{name}}sList: [
                    ...(action as Get{{Name}}sResponseAction).{{name}}sList
                ]
            }
        case ActionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: (action as SetIsFetchingAction).isFetching
            }
        case ActionTypes.GET_{{NAME}}S_DETAILS_RESPONSE:
            return {
                ...state,
                {{name}}Details: (action as Get{{Name}}DetailsResponseAction)
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
        case ActionTypes.GET_{{NAME}}_DRAFT_RESPONSE:
            return {
                ...state,
                {{name}}Draft: (action as Get{{Name}}DraftResponseAction).draft
            }
        case ActionTypes.SET_IS_ERROR_FETCHING_DETAILS:
            return {
                ...state,
                isErrorFetchingDetails: (action as SetIsErrorFetchingAction)
                    .isError
            }
        case ActionTypes.ADD_{{NAME}}_RESPONSE:
            return {
                ...state,
                {{name}}sList: [
                    ...state.{{name}}sList,
                    (action as Submit{{Name}}ResponseAction).{{name}}
                ]
            }
        case ActionTypes.EDIT_{{NAME}}_RESPONSE:
            return {
                ...state,
                {{name}}sList: updateList(
                    state.{{name}}sList,
                    action as Submit{{Name}}ResponseAction
                )
            }
        default:
            return state
    }
}
