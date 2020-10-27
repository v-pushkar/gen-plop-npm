import { Action } from 'redux'
import {
    ActionTypes,
    GetRtrytrytersResponseAction,
    rtrytryter,
    GetRtrytryterDetailsRequestAction,
    rtrytryterDetails,
    GetRtrytryterDetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetRtrytryterDraftRequestAction,
    GetRtrytryterDraftResponseAction,
    SetIsErrorFetchingAction,
    bosRtrytryterData,
    AddRtrytryterRequestAction,
    EditRtrytryterRequestAction,
    SubmitRtrytryterResponseAction,
    rtrytryterDraft
} from './types'

export const getRtrytrytersRequest = (): Action => ({
    type: ActionTypes.GET_RtrytryterS_REQUEST
})

export const getRtrytrytersResponse = (
    rtrytrytersList: rtrytryter[]
): GetRtrytrytersResponseAction => ({
    type: ActionTypes.GET_RtrytryterS_RESPONSE,
    rtrytrytersList
})

export const setIsFetchingRtrytryters = (
    isFetching: boolean
): SetIsFetchingAction => ({
    type: ActionTypes.SET_IS_FETCHING,
    isFetching
})

export const getRtrytryterDetailsRequest = (
    id: number
): GetRtrytryterDetailsRequestAction => ({
    type: ActionTypes.GET_Rtrytryter_DETAILS_REQUEST,
    id
})

export const getRtrytryterDetailsResponse = (
    details: rtrytryterDetails | null
): GetRtrytryterDetailsResponseAction => ({
    type: ActionTypes.GET_RtrytryterS_DETAILS_RESPONSE,
    details
})

export const setIsFetchingRtrytryterDetails = (
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

export const getRtrytryterDraftRequest = (
    id: number
): GetRtrytryterDraftRequestAction => ({
    type: ActionTypes.GET_Rtrytryter_DRAFT_REQUEST,
    id
})

export const getRtrytryterDraftResponse = (
    draft: rtrytryterDetails | null
): GetRtrytryterDraftResponseAction => ({
    type: ActionTypes.GET_Rtrytryter_DRAFT_RESPONSE,
    draft
})

export const AddRtrytryterRequest = (
    data: rtrytryterDraft,
    publish: boolean
): AddRtrytryterRequestAction => ({
    type: ActionTypes.ADD_Rtrytryter_REQUEST,
    data,
    publish
})

export const EditRtrytryterRequest = (
    data: rtrytryterDetails,
    publish: boolean
): EditRtrytryterRequestAction => ({
    type: ActionTypes.EDIT_Rtrytryter_REQUEST,
    data,
    publish
})

export const AddRtrytryterResponse = (
    rtrytryter: rtrytryterDetails
): SubmitRtrytryterResponseAction => ({
    type: ActionTypes.ADD_Rtrytryter_RESPONSE,
    rtrytryter
})

export const EditRtrytryterResponse = (
    rtrytryter: rtrytryterDetails
): SubmitRtrytryterResponseAction => ({
    type: ActionTypes.EDIT_Rtrytryter_RESPONSE,
    rtrytryter
})

export const setIsErrorFetchingRtrytryterDetails = (
    isError: boolean
): SetIsErrorFetchingAction => ({
    type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
    isError
})
