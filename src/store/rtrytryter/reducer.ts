import {
    RtrytrytersState,
    GetRtrytrytersResponseAction,
    ActionTypes,
    GetRtrytryterDetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    GetRtrytryterDraftResponseAction,
    SetIsErrorFetchingAction,
    SubmitRtrytryterResponseAction
} from './types'
import { updateList } from './utils'

const INITIAL_STATE: RtrytrytersState = {
    rtrytrytersList: [],
    isFetching: false,
    rtrytryterDetails: null,
    isFetchingDetails: false,
    predefinedValues: null,
    rtrytryterDraft: null,
    isErrorFetchingDetails: false
}

export type RtrytrytersAction =
    | GetRtrytrytersResponseAction
    | SetIsFetchingAction
    | GetRtrytryterDetailsResponseAction
    | GetPredefinedValuesResponseAction
    | GetRtrytryterDraftResponseAction
    | SetIsErrorFetchingAction
    | SubmitRtrytryterResponseAction

export const RtrytrytersReducer = (
    state: RtrytrytersState = INITIAL_STATE,
    action: RtrytrytersAction
): RtrytrytersState => {
    switch (action.type) {
        case ActionTypes.GET_RTRYTRYTERS_RESPONSE:
            return {
                ...state,
                rtrytrytersList: [
                    ...(action as GetRtrytrytersResponseAction).rtrytrytersList
                ]
            }
        case ActionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: (action as SetIsFetchingAction).isFetching
            }
        case ActionTypes.GET_RTRYTRYTERS_DETAILS_RESPONSE:
            return {
                ...state,
                rtrytryterDetails: (action as GetRtrytryterDetailsResponseAction)
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
        case ActionTypes.GET_RTRYTRYTER_DRAFT_RESPONSE:
            return {
                ...state,
                rtrytryterDraft: (action as GetRtrytryterDraftResponseAction).draft
            }
        case ActionTypes.SET_IS_ERROR_FETCHING_DETAILS:
            return {
                ...state,
                isErrorFetchingDetails: (action as SetIsErrorFetchingAction)
                    .isError
            }
        case ActionTypes.ADD_RTRYTRYTER_RESPONSE:
            return {
                ...state,
                rtrytrytersList: [
                    ...state.rtrytrytersList,
                    (action as SubmitRtrytryterResponseAction).rtrytryter
                ]
            }
        case ActionTypes.EDIT_RTRYTRYTER_RESPONSE:
            return {
                ...state,
                rtrytrytersList: updateList(
                    state.rtrytrytersList,
                    action as SubmitRtrytryterResponseAction
                )
            }
        default:
            return state
    }
}
