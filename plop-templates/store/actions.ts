import { Action } from 'redux'
import {
    ActionTypes,
    Get{{Name}}sResponseAction,
    {{name}},
    Get{{Name}}DetailsRequestAction,
    {{name}}Details,
    Get{{Name}}DetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get{{Name}}DraftRequestAction,
    Get{{Name}}DraftResponseAction,
    SetIsErrorFetchingAction,
    bos{{Name}}Data,
    Add{{Name}}RequestAction,
    Edit{{Name}}RequestAction,
    Submit{{Name}}ResponseAction,
    {{name}}Draft
} from './types'

export const get{{Name}}sRequest = (): Action => ({
    type: ActionTypes.GET_{{Name}}S_REQUEST
})

export const get{{Name}}sResponse = (
    {{name}}sList: {{name}}[]
): Get{{Name}}sResponseAction => ({
    type: ActionTypes.GET_{{Name}}S_RESPONSE,
    {{name}}sList
})

export const setIsFetching{{Name}}s = (
    isFetching: boolean
): SetIsFetchingAction => ({
    type: ActionTypes.SET_IS_FETCHING,
    isFetching
})

export const get{{Name}}DetailsRequest = (
    id: number
): Get{{Name}}DetailsRequestAction => ({
    type: ActionTypes.GET_{{Name}}_DETAILS_REQUEST,
    id
})

export const get{{Name}}DetailsResponse = (
    details: {{name}}Details | null
): Get{{Name}}DetailsResponseAction => ({
    type: ActionTypes.GET_{{Name}}S_DETAILS_RESPONSE,
    details
})

export const setIsFetching{{Name}}Details = (
    isFetching: boolean
): SetIsFetchingAction => ({
    type: ActionTypes.SET_IS_FETCHING_DETAILS,
    isFetching
})

export const getPredefinedValuesRequest = (): Action => ({
    type: ActionTypes.GET_PREDEFINED_VALUES_REQUEST
})

export const getPredefinedValuesResponse = (
    values: predefinedValues | null
): GetPredefinedValuesResponseAction => ({
    type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
    values
})

export const get{{Name}}DraftRequest = (
    id: number
): Get{{Name}}DraftRequestAction => ({
    type: ActionTypes.GET_{{Name}}_DRAFT_REQUEST,
    id
})

export const get{{Name}}DraftResponse = (
    draft: {{name}}Details | null
): Get{{Name}}DraftResponseAction => ({
    type: ActionTypes.GET_{{Name}}_DRAFT_RESPONSE,
    draft
})

export const Add{{Name}}Request = (
    data: {{name}}Draft,
    publish: boolean
): Add{{Name}}RequestAction => ({
    type: ActionTypes.ADD_{{Name}}_REQUEST,
    data,
    publish
})

export const Edit{{Name}}Request = (
    data: {{name}}Details,
    publish: boolean
): Edit{{Name}}RequestAction => ({
    type: ActionTypes.EDIT_{{Name}}_REQUEST,
    data,
    publish
})

export const Add{{Name}}Response = (
    {{name}}: {{name}}Details
): Submit{{Name}}ResponseAction => ({
    type: ActionTypes.ADD_{{Name}}_RESPONSE,
    {{name}}
})

export const Edit{{Name}}Response = (
    {{name}}: {{name}}Details
): Submit{{Name}}ResponseAction => ({
    type: ActionTypes.EDIT_{{Name}}_RESPONSE,
    {{name}}
})

export const setIsErrorFetching{{Name}}Details = (
    isError: boolean
): SetIsErrorFetchingAction => ({
    type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
    isError
})
