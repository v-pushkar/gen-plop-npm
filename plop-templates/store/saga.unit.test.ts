import {
    getTemplates,
    getTemplateDetails,
    getPredefinedValues,
    getTemplateDraft,
    addTemplate,
    editTemplate
} from './saga'
import {
    ActionTypes,
    SetIsFetchingAction,
    template,
    GetTemplatesResponseAction,
    templateDetails,
    GetTemplateDetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetTemplateDraftResponseAction,
    GetTemplateDraftRequestAction,
    SetIsErrorFetchingAction,
    AddTemplateRequestAction,
    templateDraft,
    SubmitTemplateResponseAction,
    EditTemplateRequestAction
} from './types'
import { put } from 'redux-saga/effects'
import {
    mockTemplatesList,
    mockTemplateDetails,
    mockTemplatePredefinedValues
} from './mockedData'
import { setIsErrorFetchingTemplateDetails } from './actions'

const mockList: template[] = mockTemplatesList
const mockDetails: templateDetails = mockTemplateDetails
const mockPredefinedValues: predefinedValues = mockTemplatePredefinedValues

const mockTemplateDraft: templateDraft = {
    region: 'testRegion',
    area: 'testArea',
    bosTemplateData: { ...mockTemplateDetails.bosTemplateData },
    inUse: false
}

describe('Templates saga unit tests', () => {
    it('Should test getTemplates', () => {
        const mockedsetIsFetchingTemplatesTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetchingTemplatesFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedResponseAction: GetTemplatesResponseAction = {
            type: ActionTypes.GET_TEMPLATES_RESPONSE,
            templatesList: mockList
        }

        const result = getTemplates()

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingTemplatesTrueAction)
        )

        result.next()

        expect(result.next(mockList).value).toEqual(
            put(mockedsetIsFetchingTemplatesFalseAction)
        )

        expect(result.next().value).toEqual(put(mockedResponseAction))
    })

    it('Should test getTemplateDetails', () => {
        const mockedsetIsFetchingDetailsTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        const mockedsetIsFetchingDetailsFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: false
        }

        const mockedResponseAction: GetTemplateDetailsResponseAction = {
            type: ActionTypes.GET_TEMPLATES_DETAILS_RESPONSE,
            details: mockDetails
        }

        const result = getTemplateDetails({
            type: '@Templates/GET_TEMPLATES_DETAILS_RESPONSE',
            id: 1
        })

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingDetailsTrueAction)
        )

        result.next()

        expect(result.next(mockDetails).value).toEqual(
            put(mockedsetIsFetchingDetailsFalseAction)
        )

        expect(result.next().value).toEqual(put(mockedResponseAction))
    })

    it('Should test getTemplateDetails error', () => {
        const mockedsetIsFetchingDetailsTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        const mockedsetIsFetchingDetailsFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: false
        }

        const mockedsetIsErrorFetchingDetailsFalseAction: SetIsErrorFetchingAction = {
            type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
            isError: true
        }

        const result = getTemplateDetails({
            type: '@Templates/GET_TEMPLATES_DETAILS_RESPONSE',
            id: 1
        })

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingDetailsTrueAction)
        )
        result.next()
        result.throw(new Error())

        expect(result.next().value).toEqual(
            put(mockedsetIsErrorFetchingDetailsFalseAction)
        )
    })

    it('Should test getPredefinedValues', () => {
        const mockedsetIsFetchingDetailsTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        const mockedsetIsFetchingDetailsFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: false
        }

        const mockedResponseAction: GetPredefinedValuesResponseAction = {
            type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
            values: mockPredefinedValues
        }

        const result = getPredefinedValues()

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingDetailsTrueAction)
        )

        result.next()

        expect(result.next(mockPredefinedValues).value).toEqual(
            put(mockedsetIsFetchingDetailsFalseAction)
        )

        expect(result.next().value).toEqual(put(mockedResponseAction))
    })

    it('Should test getTemplateDraft', () => {
        const mockedRequestAction: GetTemplateDraftRequestAction = {
            type: ActionTypes.GET_TEMPLATE_DRAFT_REQUEST,
            id: 1
        }

        const mockedsetIsFetchingDetailsTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        const mockedsetIsFetchingDetailsFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: GetPredefinedValuesResponseAction = {
            type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
            values: mockPredefinedValues
        }

        const mockedDraftResponseAction: GetTemplateDraftResponseAction = {
            type: ActionTypes.GET_TEMPLATE_DRAFT_RESPONSE,
            draft: mockDetails
        }

        const result = getTemplateDraft(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingDetailsTrueAction)
        )

        result.next()

        expect(result.next([mockDetails, mockPredefinedValues]).value).toEqual(
            put(mockedsetIsFetchingDetailsFalseAction)
        )

        expect(result.next().value).toEqual(put(mockedDraftResponseAction))
        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })

    it('Should test addTemplate', () => {
        const mockedRequestAction: AddTemplateRequestAction = {
            type: ActionTypes.ADD_TEMPLATE_REQUEST,
            data: mockTemplateDraft,
            publish: false
        }

        const mockedsetIsFetchingTemplatesTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetchingTemplatesFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: SubmitTemplateResponseAction = {
            type: ActionTypes.ADD_TEMPLATE_RESPONSE,
            template: mockTemplateDetails
        }

        const result = addTemplate(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingTemplatesTrueAction)
        )

        result.next()

        expect(result.next(mockTemplateDetails).value).toEqual(
            put(mockedsetIsFetchingTemplatesFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })

    it('Should test editTemplate', () => {
        const mockedRequestAction: EditTemplateRequestAction = {
            type: ActionTypes.ADD_TEMPLATE_REQUEST,
            data: mockTemplateDetails,
            publish: false
        }

        const mockedsetIsFetchingTemplatesTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetchingTemplatesFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: SubmitTemplateResponseAction = {
            type: ActionTypes.EDIT_TEMPLATE_RESPONSE,
            template: mockTemplateDetails
        }

        const result = editTemplate(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingTemplatesTrueAction)
        )

        result.next()

        expect(result.next(mockTemplateDetails).value).toEqual(
            put(mockedsetIsFetchingTemplatesFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })
})
