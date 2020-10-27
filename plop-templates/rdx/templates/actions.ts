import { Action } from 'redux'
import {
    ActionTypes,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction,
    <%= name %>,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequestAction,
    <%= name %>Details,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction,
    SetIsErrorFetchingAction,
    bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data,
    Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction,
    Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction,
    Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction,
    <%= name %>Draft
} from './types'

export const get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sRequest = (): Action => ({
    type: ActionTypes.GET_<%= name.toUpperCase() %>S_REQUEST
})

export const get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponse = (
    <%= name %>sList: <%= name %>[]
): Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction => ({
    type: ActionTypes.GET_<%= name.toUpperCase() %>S_RESPONSE,
    <%= name %>sList
})

export const setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s = (
    isFetching: boolean
): SetIsFetchingAction => ({
    type: ActionTypes.SET_IS_FETCHING,
    isFetching
})

export const get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequest = (
    id: number
): Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequestAction => ({
    type: ActionTypes.GET_<%= name.toUpperCase() %>_DETAILS_REQUEST,
    id
})

export const get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponse = (
    details: <%= name %>Details | null
): Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction => ({
    type: ActionTypes.GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE,
    details
})

export const setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details = (
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

export const get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequest = (
    id: number
): Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction => ({
    type: ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_REQUEST,
    id
})

export const get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponse = (
    draft: <%= name %>Details | null
): Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction => ({
    type: ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_RESPONSE,
    draft
})

export const Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Request = (
    data: <%= name %>Draft,
    publish: boolean
): Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction => ({
    type: ActionTypes.ADD_<%= name.toUpperCase() %>_REQUEST,
    data,
    publish
})

export const Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Request = (
    data: <%= name %>Details,
    publish: boolean
): Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction => ({
    type: ActionTypes.EDIT_<%= name.toUpperCase() %>_REQUEST,
    data,
    publish
})

export const Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response = (
    <%= name %>: <%= name %>Details
): Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction => ({
    type: ActionTypes.ADD_<%= name.toUpperCase() %>_RESPONSE,
    <%= name %>
})

export const Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response = (
    <%= name %>: <%= name %>Details
): Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction => ({
    type: ActionTypes.EDIT_<%= name.toUpperCase() %>_RESPONSE,
    <%= name %>
})

export const setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details = (
    isError: boolean
): SetIsErrorFetchingAction => ({
    type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
    isError
})
