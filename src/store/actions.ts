import { Action } from 'redux'
import {
    ActionTypes,
    GetQwertysResponseAction,
    qwerty,
    GetQwertyDetailsRequestAction,
    qwertyDetails,
    GetQwertyDetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetQwertyDraftRequestAction,
    GetQwertyDraftResponseAction,
    SetIsErrorFetchingAction,
    bosQwertyData,
    AddQwertyRequestAction,
    EditQwertyRequestAction,
    SubmitQwertyResponseAction,
    qwertyDraft
} from './types'

export const getQwertysRequest = (): Action => ({
    type: ActionTypes.GET_QwertyS_REQUEST
})

export const getQwertysResponse = (
    qwertysList: qwerty[]
): GetQwertysResponseAction => ({
    type: ActionTypes.GET_QwertyS_RESPONSE,
    qwertysList
})

export const setIsFetchingQwertys = (
    isFetching: boolean
): SetIsFetchingAction => ({
    type: ActionTypes.SET_IS_FETCHING,
    isFetching
})

export const getQwertyDetailsRequest = (
    id: number
): GetQwertyDetailsRequestAction => ({
    type: ActionTypes.GET_Qwerty_DETAILS_REQUEST,
    id
})

export const getQwertyDetailsResponse = (
    details: qwertyDetails | null
): GetQwertyDetailsResponseAction => ({
    type: ActionTypes.GET_QwertyS_DETAILS_RESPONSE,
    details
})

export const setIsFetchingQwertyDetails = (
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

export const getQwertyDraftRequest = (
    id: number
): GetQwertyDraftRequestAction => ({
    type: ActionTypes.GET_Qwerty_DRAFT_REQUEST,
    id
})

export const getQwertyDraftResponse = (
    draft: qwertyDetails | null
): GetQwertyDraftResponseAction => ({
    type: ActionTypes.GET_Qwerty_DRAFT_RESPONSE,
    draft
})

export const AddQwertyRequest = (
    data: qwertyDraft,
    publish: boolean
): AddQwertyRequestAction => ({
    type: ActionTypes.ADD_Qwerty_REQUEST,
    data,
    publish
})

export const EditQwertyRequest = (
    data: qwertyDetails,
    publish: boolean
): EditQwertyRequestAction => ({
    type: ActionTypes.EDIT_Qwerty_REQUEST,
    data,
    publish
})

export const AddQwertyResponse = (
    qwerty: qwertyDetails
): SubmitQwertyResponseAction => ({
    type: ActionTypes.ADD_Qwerty_RESPONSE,
    qwerty
})

export const EditQwertyResponse = (
    qwerty: qwertyDetails
): SubmitQwertyResponseAction => ({
    type: ActionTypes.EDIT_Qwerty_RESPONSE,
    qwerty
})

export const setIsErrorFetchingQwertyDetails = (
    isError: boolean
): SetIsErrorFetchingAction => ({
    type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
    isError
})
