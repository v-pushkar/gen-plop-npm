import RtrytrytersReducer, {
    GetRtrytrytersResponseAction,
    RtrytrytersState,
    rtrytryter,
    SetIsFetchingAction,
    rtrytryterDetails,
    GetRtrytryterDetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetRtrytryterDraftResponseAction,
    SetIsErrorFetchingAction,
    SubmitRtrytryterResponseAction
} from '.'
import {
    getRtrytrytersResponse,
    setIsFetchingRtrytryters,
    getRtrytryterDetailsResponse,
    setIsFetchingRtrytryterDetails,
    getPredefinedValuesResponse,
    getRtrytryterDraftResponse,
    setIsErrorFetchingRtrytryterDetails,
    AddRtrytryterResponse,
    EditRtrytryterResponse
} from './actions'
import {
    mockRtrytrytersList,
    mockRtrytryterDetails,
    mockRtrytryterPredefinedValues
} from './mockedData'

const INITIAL_STATE: RtrytrytersState = {
    rtrytrytersList: [],
    isFetching: false,
    rtrytryterDetails: null,
    isFetchingDetails: false,
    predefinedValues: null,
    rtrytryterDraft: null,
    isErrorFetchingDetails: false
}

const mockData: rtrytryter[] = mockRtrytrytersList
const mockDetails: rtrytryterDetails = mockRtrytryterDetails
const mockPredefinedValues: predefinedValues = mockRtrytryterPredefinedValues

const INITIAL_STATE_WITH_LIST_ELEMENT: RtrytrytersState = {
    rtrytrytersList: [mockDetails],
    isFetching: false,
    rtrytryterDetails: null,
    isFetchingDetails: false,
    predefinedValues: null,
    rtrytryterDraft: null,
    isErrorFetchingDetails: false
}

const mockEditedDetails: rtrytryterDetails = JSON.parse(
    JSON.stringify({ ...mockDetails, physicalPlaces: 'editedPhysicalPlaces' })
)

describe('Rtrytryters reducer unit tests', () => {
    it('Should return proper state for GetRtrytrytersResponseAction action', () => {
        const mockedGetRtrytrytersResponseAction: GetRtrytrytersResponseAction = getRtrytrytersResponse(
            mockData
        )

        const mockedRtrytrytersState: RtrytrytersState = {
            rtrytrytersList: [...mockData],
            isFetching: false,
            rtrytryterDetails: null,
            isFetchingDetails: false,
            predefinedValues: null,
            rtrytryterDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            RtrytrytersReducer(INITIAL_STATE, mockedGetRtrytrytersResponseAction)
        ).toEqual(mockedRtrytrytersState)
    })

    it('Should return proper state for SetIsFetchingAction action', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetchingRtrytryters(
            true
        )

        const mockedRtrytrytersState: RtrytrytersState = {
            rtrytrytersList: [],
            isFetching: true,
            rtrytryterDetails: null,
            isFetchingDetails: false,
            predefinedValues: null,
            rtrytryterDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            RtrytrytersReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mockedRtrytrytersState)
    })

    it('Should return proper state for GetRtrytryterDetailsResponseAction action', () => {
        const mockedGetRtrytryterDetailsResponseAction: GetRtrytryterDetailsResponseAction = getRtrytryterDetailsResponse(
            mockDetails
        )

        const mockedRtrytrytersState: RtrytrytersState = {
            rtrytrytersList: [],
            isFetching: false,
            rtrytryterDetails: mockDetails,
            isFetchingDetails: false,
            predefinedValues: null,
            rtrytryterDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            RtrytrytersReducer(
                INITIAL_STATE,
                mockedGetRtrytryterDetailsResponseAction
            )
        ).toEqual(mockedRtrytrytersState)
    })

    it('Should return proper state for SetIsFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetchingRtrytryterDetails(
            true
        )

        const mockedRtrytrytersState: RtrytrytersState = {
            rtrytrytersList: [],
            isFetching: false,
            rtrytryterDetails: null,
            isFetchingDetails: true,
            predefinedValues: null,
            rtrytryterDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            RtrytrytersReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mockedRtrytrytersState)
    })

    it('Should return proper state for SetIsErrorFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsErrorFetchingAction = setIsErrorFetchingRtrytryterDetails(
            true
        )

        const mockedRtrytrytersState: RtrytrytersState = {
            rtrytrytersList: [],
            isFetching: false,
            rtrytryterDetails: null,
            isFetchingDetails: false,
            predefinedValues: null,
            rtrytryterDraft: null,
            isErrorFetchingDetails: true
        }

        expect(
            RtrytrytersReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mockedRtrytrytersState)
    })

    it('Should return proper state for GetPredefinedValuesResponseAction action for details', () => {
        const mockedGetPredefinedValuesResponseAction: GetPredefinedValuesResponseAction = getPredefinedValuesResponse(
            mockPredefinedValues
        )

        const mockedRtrytrytersState: RtrytrytersState = {
            rtrytrytersList: [],
            isFetching: false,
            rtrytryterDetails: null,
            isFetchingDetails: false,
            predefinedValues: { ...mockPredefinedValues },
            rtrytryterDraft: null,
            isErrorFetchingDetails: false
        }

        expect(
            RtrytrytersReducer(
                INITIAL_STATE,
                mockedGetPredefinedValuesResponseAction
            )
        ).toEqual(mockedRtrytrytersState)
    })
})

it('Should return proper state for GetRtrytryterDraftResponseAction action', () => {
    const mockedGetRtrytryterDraftResponseAction: GetRtrytryterDraftResponseAction = getRtrytryterDraftResponse(
        mockDetails
    )

    const mockedRtrytrytersState: RtrytrytersState = {
        rtrytrytersList: [],
        isFetching: false,
        rtrytryterDetails: null,
        isFetchingDetails: false,
        predefinedValues: null,
        rtrytryterDraft: mockDetails,
        isErrorFetchingDetails: false
    }

    expect(
        RtrytrytersReducer(INITIAL_STATE, mockedGetRtrytryterDraftResponseAction)
    ).toEqual(mockedRtrytrytersState)
})

it('Should return proper state for ADD_RTRYTRYTER_RESPONSE action', () => {
    const mockedSubmitRtrytryterResponseAction: SubmitRtrytryterResponseAction = AddRtrytryterResponse(
        mockDetails
    )

    const mockedRtrytrytersState: RtrytrytersState = {
        rtrytrytersList: [mockDetails],
        isFetching: false,
        rtrytryterDetails: null,
        isFetchingDetails: false,
        predefinedValues: null,
        rtrytryterDraft: null,
        isErrorFetchingDetails: false
    }

    expect(
        RtrytrytersReducer(INITIAL_STATE, mockedSubmitRtrytryterResponseAction)
    ).toEqual(mockedRtrytrytersState)
})

it('Should return proper state for EDIT_RTRYTRYTER_RESPONSE action', () => {
    const mockedSubmitRtrytryterResponseAction: SubmitRtrytryterResponseAction = EditRtrytryterResponse(
        mockEditedDetails
    )

    const mockedRtrytrytersState: RtrytrytersState = {
        rtrytrytersList: [mockEditedDetails],
        isFetching: false,
        rtrytryterDetails: null,
        isFetchingDetails: false,
        predefinedValues: null,
        rtrytryterDraft: null,
        isErrorFetchingDetails: false
    }

    expect(
        RtrytrytersReducer(
            INITIAL_STATE_WITH_LIST_ELEMENT,
            mockedSubmitRtrytryterResponseAction
        )
    ).toEqual(mockedRtrytrytersState)
})
