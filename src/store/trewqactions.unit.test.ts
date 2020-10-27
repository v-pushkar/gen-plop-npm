import { Action } from 'redux'
import {
    ActionTypes,
    TrewqsActions,
    ,
    GetTrewqsResponseAction,
    SetIsFetchingAction,
    GetTrewqDetailsRequestAction,
    GetTrewqDetailsResponseAction,
    Details,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetTrewqDraftRequestAction,
    GetTrewqDraftResponseAction,
    SetIsErrorFetchingAction,
    Draft,
    AddTrewqRequestAction,
    EditTrewqRequestAction,
    SubmitTrewqResponseAction
} from '.'
import {
    mockTrewqsList,
    mockTrewqDetails,
    mockTrewqPredefinedValues
} from './mockedData'

const testResponse: [] = mockTrewqsList
const testDetailsResponse: Details = mockTrewqDetails
const mockPredefinedValues: predefinedValues = mockTrewqPredefinedValues
const mockTrewqDraft: Draft = {
    region: 'testRegion',
    area: 'testArea',
    bosTrewqData: { ...mockTrewqDetails.bosTrewqData },
    inUse: false
}

describe('Trewqs actions unit tests', () => {
    it('Should test getTrewqsRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_TREWQS_REQUEST
        }

        expect(TrewqsActions.getTrewqsRequest()).toEqual(expectedAction)
    })

    it('Should test getTrewqsResponse action creator', () => {
        const expectedAction: GetTrewqsResponseAction = {
            type: ActionTypes.GET_TREWQS_RESPONSE,
            sList: [...testResponse]
        }

        expect(TrewqsActions.getTrewqsResponse(testResponse)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetchingTrewqs action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        expect(TrewqsActions.setIsFetchingTrewqs(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetchingTrewqDetails action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        expect(TrewqsActions.setIsFetchingTrewqDetails(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsErrorFetchingTrewqDetails action creator', () => {
        const expectedAction: SetIsErrorFetchingAction = {
            type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
            isError: true
        }

        expect(
            TrewqsActions.setIsErrorFetchingTrewqDetails(true)
        ).toEqual(expectedAction)
    })

    it('Should test getTrewqDetailsRequest action creator', () => {
        const expectedAction: GetTrewqDetailsRequestAction = {
            type: ActionTypes.GET_TREWQ_DETAILS_REQUEST,
            id: 11
        }

        expect(TrewqsActions.getTrewqDetailsRequest(11)).toEqual(
            expectedAction
        )
    })

    it('Should test getTrewqDetailsResponse action creator', () => {
        const expectedAction: GetTrewqDetailsResponseAction = {
            type: ActionTypes.GET_TREWQS_DETAILS_RESPONSE,
            details: testDetailsResponse
        }

        expect(
            TrewqsActions.getTrewqDetailsResponse(testDetailsResponse)
        ).toEqual(expectedAction)
    })

    it('Should test getPredefinedValuesRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_PREDEFINED_VALUES_REQUEST
        }

        expect(TrewqsActions.getPredefinedValuesRequest()).toEqual(
            expectedAction
        )
    })

    it('Should test getPredefinedValuesResponse action creator', () => {
        const expectedAction: GetPredefinedValuesResponseAction = {
            type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
            values: { ...mockPredefinedValues }
        }

        expect(
            TrewqsActions.getPredefinedValuesResponse(mockPredefinedValues)
        ).toEqual(expectedAction)
    })
})

it('Should test getTrewqDraftRequest action creator', () => {
    const expectedAction: GetTrewqDraftRequestAction = {
        type: ActionTypes.GET_TREWQ_DRAFT_REQUEST,
        id: 11
    }

    expect(TrewqsActions.getTrewqDraftRequest(11)).toEqual(expectedAction)
})

it('Should test getTrewqDraftResponse action creator', () => {
    const expectedAction: GetTrewqDraftResponseAction = {
        type: ActionTypes.GET_TREWQ_DRAFT_RESPONSE,
        draft: testDetailsResponse
    }

    expect(
        TrewqsActions.getTrewqDraftResponse(testDetailsResponse)
    ).toEqual(expectedAction)
})

it('Should test AddTrewqRequest action creator', () => {
    const expectedAction: AddTrewqRequestAction = {
        type: ActionTypes.ADD_TREWQ_REQUEST,
        data: mockTrewqDraft,
        publish: false
    }

    expect(
        TrewqsActions.AddTrewqRequest(mockTrewqDraft, false)
    ).toEqual(expectedAction)
})

it('Should test EditTrewqRequest action creator', () => {
    const expectedAction: EditTrewqRequestAction = {
        type: ActionTypes.EDIT_TREWQ_REQUEST,
        data: mockTrewqDetails,
        publish: false
    }

    expect(
        TrewqsActions.EditTrewqRequest(mockTrewqDetails, false)
    ).toEqual(expectedAction)
})

it('Should test AddTrewqResponse action creator', () => {
    const expectedAction: SubmitTrewqResponseAction = {
        type: ActionTypes.ADD_TREWQ_RESPONSE,
        : mockTrewqDetails
    }

    expect(TrewqsActions.AddTrewqResponse(mockTrewqDetails)).toEqual(
        expectedAction
    )
})

it('Should test EditTrewqResponse action creator', () => {
    const expectedAction: SubmitTrewqResponseAction = {
        type: ActionTypes.EDIT_TREWQ_RESPONSE,
        : mockTrewqDetails
    }

    expect(TrewqsActions.EditTrewqResponse(mockTrewqDetails)).toEqual(
        expectedAction
    )
})
