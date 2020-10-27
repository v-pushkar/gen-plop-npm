import TemplatesReducer, {
    GetTemplatesResponseAction,
    TemplatesState,
    template,
    SetIsFetchingAction,
    templateDetails,
    GetTemplateDetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetTemplateDraftResponseAction,
    SetIsErrorFetchingAction,
    SubmitTemplateResponseAction
} from '.'
import {
    getTemplatesResponse,
    setIsFetchingTemplates,
    getTemplateDetailsResponse,
    setIsFetchingTemplateDetails,
    getPredefinedValuesResponse,
    getTemplateDraftResponse,
    setIsErrorFetchingTemplateDetails,
    AddTemplateResponse,
    EditTemplateResponse
} from './actions'
import {
    mockTemplatesList,
    mockTemplateDetails,
    mockTemplatePredefinedValues
} from './mockedData'

const INITIAL_STATE: TemplatesState = {
    templatesList: [],
    isFetching: false,
    templateDetails: null,
    isFetchingDetails: false,
    predefinedValues: null,
    templateDraft: null,
    isErrorFetchingDetails: false
}

const mockData: template[] = mockTemplatesList
const mockDetails: templateDetails = mockTemplateDetails
const mockPredefinedValues: predefinedValues = mockTemplatePredefinedValues

const INITIAL_STATE_WITH_LIST_ELEMENT: TemplatesState = {
    templatesList: [mockDetails],
    isFetching: false,
    templateDetails: null,
    isFetchingDetails: false,
    predefinedValues: null,
    templateDraft: null,
    isErrorFetchingDetails: false
}

const mockEditedDetails: templateDetails = JSON.parse(
    JSON.stringify({ ...mockDetails, physicalPlaces: 'editedPhysicalPlaces' })
)

describe('Templates reducer unit tests', () => {
    it('Should return proper state for GetTemplatesResponseAction action', () => {
        const mockedGetTemplatesResponseAction: GetTemplatesResponseAction = getTemplatesResponse(
            mockData
        )

        const mockedTemplatesState: TemplatesState = {
            templatesList: [...mockData],
            isFetching: false,
            templateDetails: null,
            isFetchingDetails: false,
            predefinedValues: null,
            templateDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            TemplatesReducer(INITIAL_STATE, mockedGetTemplatesResponseAction)
        ).toEqual(mockedTemplatesState)
    })

    it('Should return proper state for SetIsFetchingAction action', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetchingTemplates(
            true
        )

        const mockedTemplatesState: TemplatesState = {
            templatesList: [],
            isFetching: true,
            templateDetails: null,
            isFetchingDetails: false,
            predefinedValues: null,
            templateDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            TemplatesReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mockedTemplatesState)
    })

    it('Should return proper state for GetTemplateDetailsResponseAction action', () => {
        const mockedGetTemplateDetailsResponseAction: GetTemplateDetailsResponseAction = getTemplateDetailsResponse(
            mockDetails
        )

        const mockedTemplatesState: TemplatesState = {
            templatesList: [],
            isFetching: false,
            templateDetails: mockDetails,
            isFetchingDetails: false,
            predefinedValues: null,
            templateDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            TemplatesReducer(
                INITIAL_STATE,
                mockedGetTemplateDetailsResponseAction
            )
        ).toEqual(mockedTemplatesState)
    })

    it('Should return proper state for SetIsFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetchingTemplateDetails(
            true
        )

        const mockedTemplatesState: TemplatesState = {
            templatesList: [],
            isFetching: false,
            templateDetails: null,
            isFetchingDetails: true,
            predefinedValues: null,
            templateDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            TemplatesReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mockedTemplatesState)
    })

    it('Should return proper state for SetIsErrorFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsErrorFetchingAction = setIsErrorFetchingTemplateDetails(
            true
        )

        const mockedTemplatesState: TemplatesState = {
            templatesList: [],
            isFetching: false,
            templateDetails: null,
            isFetchingDetails: false,
            predefinedValues: null,
            templateDraft: null,
            isErrorFetchingDetails: true
        }

        expect(
            TemplatesReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mockedTemplatesState)
    })

    it('Should return proper state for GetPredefinedValuesResponseAction action for details', () => {
        const mockedGetPredefinedValuesResponseAction: GetPredefinedValuesResponseAction = getPredefinedValuesResponse(
            mockPredefinedValues
        )

        const mockedTemplatesState: TemplatesState = {
            templatesList: [],
            isFetching: false,
            templateDetails: null,
            isFetchingDetails: false,
            predefinedValues: { ...mockPredefinedValues },
            templateDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            TemplatesReducer(
                INITIAL_STATE,
                mockedGetPredefinedValuesResponseAction
            )
        ).toEqual(mockedTemplatesState)
    })
})

it('Should return proper state for GetTemplateDraftResponseAction action', () => {
    const mockedGetTemplateDraftResponseAction: GetTemplateDraftResponseAction = getTemplateDraftResponse(
        mockDetails
    )

    const mockedTemplatesState: TemplatesState = {
        templatesList: [],
        isFetching: false,
        templateDetails: null,
        isFetchingDetails: false,
        predefinedValues: null,
        templateDraft: mockDetails,
        isErrorFetchingDetails: false
    }

    expect(
        TemplatesReducer(INITIAL_STATE, mockedGetTemplateDraftResponseAction)
    ).toEqual(mockedTemplatesState)
})

it('Should return proper state for ADD_TEMPLATE_RESPONSE action', () => {
    const mockedSubmitTemplateResponseAction: SubmitTemplateResponseAction = AddTemplateResponse(
        mockDetails
    )

    const mockedTemplatesState: TemplatesState = {
        templatesList: [mockDetails],
        isFetching: false,
        templateDetails: null,
        isFetchingDetails: false,
        predefinedValues: null,
        templateDraft: null,
        isErrorFetchingDetails: false
    }

    expect(
        TemplatesReducer(INITIAL_STATE, mockedSubmitTemplateResponseAction)
    ).toEqual(mockedTemplatesState)
})

it('Should return proper state for EDIT_TEMPLATE_RESPONSE action', () => {
    const mockedSubmitTemplateResponseAction: SubmitTemplateResponseAction = EditTemplateResponse(
        mockEditedDetails
    )

    const mockedTemplatesState: TemplatesState = {
        templatesList: [mockEditedDetails],
        isFetching: false,
        templateDetails: null,
        isFetchingDetails: false,
        predefinedValues: null,
        templateDraft: null,
        isErrorFetchingDetails: false
    }

    expect(
        TemplatesReducer(
            INITIAL_STATE_WITH_LIST_ELEMENT,
            mockedSubmitTemplateResponseAction
        )
    ).toEqual(mockedTemplatesState)
})
