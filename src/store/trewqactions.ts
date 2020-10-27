import { Action } from 'redux'
import {
    ActionTypes,
    GetTrewqsResponseAction,
    trewq,
    GetTrewqDetailsRequestAction,
    trewqDetails,
    GetTrewqDetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetTrewqDraftRequestAction,
    GetTrewqDraftResponseAction,
    SetIsErrorFetchingAction,
    bosTrewqData,
    AddTrewqRequestAction,
    EditTrewqRequestAction,
    SubmitTrewqResponseAction,
    trewqDraft
} from './types'

export const getTrewqsRequest = (): Action => ({
    type: ActionTypes.GET_TrewqS_REQUEST
})

export const getTrewqsResponse = (
    trewqsList: trewq[]
): GetTrewqsResponseAction => ({
    type: ActionTypes.GET_TrewqS_RESPONSE,
    trewqsList
})

export const setIsFetchingTrewqs = (
    isFetching: boolean
): SetIsFetchingAction => ({
    type: ActionTypes.SET_IS_FETCHING,
    isFetching
})

export const getTrewqDetailsRequest = (
    id: number
): GetTrewqDetailsRequestAction => ({
    type: ActionTypes.GET_Trewq_DETAILS_REQUEST,
    id
})

export const getTrewqDetailsResponse = (
    details: trewqDetails | null
): GetTrewqDetailsResponseAction => ({
    type: ActionTypes.GET_TrewqS_DETAILS_RESPONSE,
    details
})

export const setIsFetchingTrewqDetails = (
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

export const getTrewqDraftRequest = (
    id: number
): GetTrewqDraftRequestAction => ({
    type: ActionTypes.GET_Trewq_DRAFT_REQUEST,
    id
})

export const getTrewqDraftResponse = (
    draft: trewqDetails | null
): GetTrewqDraftResponseAction => ({
    type: ActionTypes.GET_Trewq_DRAFT_RESPONSE,
    draft
})

export const AddTrewqRequest = (
    data: trewqDraft,
    publish: boolean
): AddTrewqRequestAction => ({
    type: ActionTypes.ADD_Trewq_REQUEST,
    data,
    publish
})

export const EditTrewqRequest = (
    data: trewqDetails,
    publish: boolean
): EditTrewqRequestAction => ({
    type: ActionTypes.EDIT_Trewq_REQUEST,
    data,
    publish
})

export const AddTrewqResponse = (
    trewq: trewqDetails
): SubmitTrewqResponseAction => ({
    type: ActionTypes.ADD_Trewq_RESPONSE,
    trewq
})

export const EditTrewqResponse = (
    trewq: trewqDetails
): SubmitTrewqResponseAction => ({
    type: ActionTypes.EDIT_Trewq_RESPONSE,
    trewq
})

export const setIsErrorFetchingTrewqDetails = (
    isError: boolean
): SetIsErrorFetchingAction => ({
    type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
    isError
})
