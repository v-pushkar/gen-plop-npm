import { Action } from 'redux'
import {
    ActionTypes,
    RtrytrytersActions,
    rtrytryter,
    GetRtrytrytersResponseAction,
    SetIsFetchingAction,
    GetRtrytryterDetailsRequestAction,
    GetRtrytryterDetailsResponseAction,
    rtrytryterDetails,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetRtrytryterDraftRequestAction,
    GetRtrytryterDraftResponseAction,
    SetIsErrorFetchingAction,
    rtrytryterDraft,
    AddRtrytryterRequestAction,
    EditRtrytryterRequestAction,
    SubmitRtrytryterResponseAction
} from '.'
import {
    mockRtrytrytersList,
    mockRtrytryterDetails,
    mockRtrytryterPredefinedValues
} from './mockedData'

const testResponse: rtrytryter[] = mockRtrytrytersList
const testDetailsResponse: rtrytryterDetails = mockRtrytryterDetails
const mockPredefinedValues: predefinedValues = mockRtrytryterPredefinedValues
const mockRtrytryterDraft: rtrytryterDraft = {
    region: 'testRegion',
    area: 'testArea',
    bosRtrytryterData: { ...mockRtrytryterDetails.bosRtrytryterData },
    inUse: false
}

describe('Rtrytryters actions unit tests', () => {
    it('Should test getRtrytrytersRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_RTRYTRYTERS_REQUEST
        }

        expect(RtrytrytersActions.getRtrytrytersRequest()).toEqual(expectedAction)
    })

    it('Should test getRtrytrytersResponse action creator', () => {
        const expectedAction: GetRtrytrytersResponseAction = {
            type: ActionTypes.GET_RTRYTRYTERS_RESPONSE,
            rtrytrytersList: [...testResponse]
        }

        expect(RtrytrytersActions.getRtrytrytersResponse(testResponse)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetchingRtrytryters action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        expect(RtrytrytersActions.setIsFetchingRtrytryters(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetchingRtrytryterDetails action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        expect(RtrytrytersActions.setIsFetchingRtrytryterDetails(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsErrorFetchingRtrytryterDetails action creator', () => {
        const expectedAction: SetIsErrorFetchingAction = {
            type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
            isError: true
        }

        expect(
            RtrytrytersActions.setIsErrorFetchingRtrytryterDetails(true)
        ).toEqual(expectedAction)
    })

    it('Should test getRtrytryterDetailsRequest action creator', () => {
        const expectedAction: GetRtrytryterDetailsRequestAction = {
            type: ActionTypes.GET_RTRYTRYTER_DETAILS_REQUEST,
            id: 11
        }

        expect(RtrytrytersActions.getRtrytryterDetailsRequest(11)).toEqual(
            expectedAction
        )
    })

    it('Should test getRtrytryterDetailsResponse action creator', () => {
        const expectedAction: GetRtrytryterDetailsResponseAction = {
            type: ActionTypes.GET_RTRYTRYTERS_DETAILS_RESPONSE,
            details: testDetailsResponse
        }

        expect(
            RtrytrytersActions.getRtrytryterDetailsResponse(testDetailsResponse)
        ).toEqual(expectedAction)
    })

    it('Should test getPredefinedValuesRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_PREDEFINED_VALUES_REQUEST
        }

        expect(RtrytrytersActions.getPredefinedValuesRequest()).toEqual(
            expectedAction
        )
    })

    it('Should test getPredefinedValuesResponse action creator', () => {
        const expectedAction: GetPredefinedValuesResponseAction = {
            type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
            values: { ...mockPredefinedValues }
        }

        expect(
            RtrytrytersActions.getPredefinedValuesResponse(mockPredefinedValues)
        ).toEqual(expectedAction)
    })
})

it('Should test getRtrytryterDraftRequest action creator', () => {
    const expectedAction: GetRtrytryterDraftRequestAction = {
        type: ActionTypes.GET_RTRYTRYTER_DRAFT_REQUEST,
        id: 11
    }

    expect(RtrytrytersActions.getRtrytryterDraftRequest(11)).toEqual(expectedAction)
})

it('Should test getRtrytryterDraftResponse action creator', () => {
    const expectedAction: GetRtrytryterDraftResponseAction = {
        type: ActionTypes.GET_RTRYTRYTER_DRAFT_RESPONSE,
        draft: testDetailsResponse
    }

    expect(
        RtrytrytersActions.getRtrytryterDraftResponse(testDetailsResponse)
    ).toEqual(expectedAction)
})

it('Should test AddRtrytryterRequest action creator', () => {
    const expectedAction: AddRtrytryterRequestAction = {
        type: ActionTypes.ADD_RTRYTRYTER_REQUEST,
        data: mockRtrytryterDraft,
        publish: false
    }

    expect(
        RtrytrytersActions.AddRtrytryterRequest(mockRtrytryterDraft, false)
    ).toEqual(expectedAction)
})

it('Should test EditRtrytryterRequest action creator', () => {
    const expectedAction: EditRtrytryterRequestAction = {
        type: ActionTypes.EDIT_RTRYTRYTER_REQUEST,
        data: mockRtrytryterDetails,
        publish: false
    }

    expect(
        RtrytrytersActions.EditRtrytryterRequest(mockRtrytryterDetails, false)
    ).toEqual(expectedAction)
})

it('Should test AddRtrytryterResponse action creator', () => {
    const expectedAction: SubmitRtrytryterResponseAction = {
        type: ActionTypes.ADD_RTRYTRYTER_RESPONSE,
        rtrytryter: mockRtrytryterDetails
    }

    expect(RtrytrytersActions.AddRtrytryterResponse(mockRtrytryterDetails)).toEqual(
        expectedAction
    )
})

it('Should test EditRtrytryterResponse action creator', () => {
    const expectedAction: SubmitRtrytryterResponseAction = {
        type: ActionTypes.EDIT_RTRYTRYTER_RESPONSE,
        rtrytryter: mockRtrytryterDetails
    }

    expect(RtrytrytersActions.EditRtrytryterResponse(mockRtrytryterDetails)).toEqual(
        expectedAction
    )
})
