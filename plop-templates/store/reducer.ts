import {
    TemplatesState,
    GetTemplatesResponseAction,
    ActionTypes,
    GetTemplateDetailsResponseAction,
    SetIsFetchingAction,
    GetPredefinedValuesResponseAction,
    GetTemplateDraftResponseAction,
    SetIsErrorFetchingAction,
    SubmitTemplateResponseAction
} from './types'
import { updateList } from './utils'

const INITIAL_STATE: TemplatesState = {
    templatesList: [],
    isFetching: false,
    templateDetails: null,
    isFetchingDetails: false,
    predefinedValues: null,
    templateDraft: null,
    isErrorFetchingDetails: false
}

export type TemplatesAction =
    | GetTemplatesResponseAction
    | SetIsFetchingAction
    | GetTemplateDetailsResponseAction
    | GetPredefinedValuesResponseAction
    | GetTemplateDraftResponseAction
    | SetIsErrorFetchingAction
    | SubmitTemplateResponseAction

export const TemplatesReducer = (
    state: TemplatesState = INITIAL_STATE,
    action: TemplatesAction
): TemplatesState => {
    switch (action.type) {
        case ActionTypes.GET_TEMPLATES_RESPONSE:
            return {
                ...state,
                templatesList: [
                    ...(action as GetTemplatesResponseAction).templatesList
                ]
            }
        case ActionTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: (action as SetIsFetchingAction).isFetching
            }
        case ActionTypes.GET_TEMPLATES_DETAILS_RESPONSE:
            return {
                ...state,
                templateDetails: (action as GetTemplateDetailsResponseAction)
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
        case ActionTypes.GET_TEMPLATE_DRAFT_RESPONSE:
            return {
                ...state,
                templateDraft: (action as GetTemplateDraftResponseAction).draft
            }
        case ActionTypes.SET_IS_ERROR_FETCHING_DETAILS:
            return {
                ...state,
                isErrorFetchingDetails: (action as SetIsErrorFetchingAction)
                    .isError
            }
        case ActionTypes.ADD_TEMPLATE_RESPONSE:
            return {
                ...state,
                templatesList: [
                    ...state.templatesList,
                    (action as SubmitTemplateResponseAction).template
                ]
            }
        case ActionTypes.EDIT_TEMPLATE_RESPONSE:
            return {
                ...state,
                templatesList: updateList(
                    state.templatesList,
                    action as SubmitTemplateResponseAction
                )
            }
        default:
            return state
    }
}
