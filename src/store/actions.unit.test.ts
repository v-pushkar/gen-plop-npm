import { Action } from 'redux'
import {
    ActionTypes,
    QwertysActions,
    ,
    GetQwertysResponseAction,
    SetIsFetchingAction,
    GetQwertyDetailsRequestAction,
    GetQwertyDetailsResponseAction,
    Details,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetQwertyDraftRequestAction,
    GetQwertyDraftResponseAction,
    SetIsErrorFetchingAction,
    Draft,
    AddQwertyRequestAction,
    EditQwertyRequestAction,
    SubmitQwertyResponseAction
} from '.'
import {
    mockQwertysList,
    mockQwertyDetails,
    mockQwertyPredefinedValues
} from './mockedData'

const testResponse: [] = mockQwertysList
const testDetailsResponse: Details = mockQwertyDetails
const mockPredefinedValues: predefinedValues = mockQwertyPredefinedValues
const mockQwertyDraft: Draft = {
    region: 'testRegion',
    area: 'testArea',
    bosQwertyData: { ...mockQwertyDetails.bosQwertyData },
    inUse: false
}

describe('Qwertys actions unit tests', () => {
    it('Should test getQwertysRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_QWERTYS_REQUEST
        }

        expect(QwertysActions.getQwertysRequest()).toEqual(expectedAction)
    })

    it('Should test getQwertysResponse action creator', () => {
        const expectedAction: GetQwertysResponseAction = {
            type: ActionTypes.GET_QWERTYS_RESPONSE,
            sList: [...testResponse]
        }

        expect(QwertysActions.getQwertysResponse(testResponse)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetchingQwertys action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        expect(QwertysActions.setIsFetchingQwertys(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetchingQwertyDetails action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        expect(QwertysActions.setIsFetchingQwertyDetails(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsErrorFetchingQwertyDetails action creator', () => {
        const expectedAction: SetIsErrorFetchingAction = {
            type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
            isError: true
        }

        expect(
            QwertysActions.setIsErrorFetchingQwertyDetails(true)
        ).toEqual(expectedAction)
    })

    it('Should test getQwertyDetailsRequest action creator', () => {
        const expectedAction: GetQwertyDetailsRequestAction = {
            type: ActionTypes.GET_QWERTY_DETAILS_REQUEST,
            id: 11
        }

        expect(QwertysActions.getQwertyDetailsRequest(11)).toEqual(
            expectedAction
        )
    })

    it('Should test getQwertyDetailsResponse action creator', () => {
        const expectedAction: GetQwertyDetailsResponseAction = {
            type: ActionTypes.GET_QWERTYS_DETAILS_RESPONSE,
            details: testDetailsResponse
        }

        expect(
            QwertysActions.getQwertyDetailsResponse(testDetailsResponse)
        ).toEqual(expectedAction)
    })

    it('Should test getPredefinedValuesRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_PREDEFINED_VALUES_REQUEST
        }

        expect(QwertysActions.getPredefinedValuesRequest()).toEqual(
            expectedAction
        )
    })

    it('Should test getPredefinedValuesResponse action creator', () => {
        const expectedAction: GetPredefinedValuesResponseAction = {
            type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
            values: { ...mockPredefinedValues }
        }

        expect(
            QwertysActions.getPredefinedValuesResponse(mockPredefinedValues)
        ).toEqual(expectedAction)
    })
})

it('Should test getQwertyDraftRequest action creator', () => {
    const expectedAction: GetQwertyDraftRequestAction = {
        type: ActionTypes.GET_QWERTY_DRAFT_REQUEST,
        id: 11
    }

    expect(QwertysActions.getQwertyDraftRequest(11)).toEqual(expectedAction)
})

it('Should test getQwertyDraftResponse action creator', () => {
    const expectedAction: GetQwertyDraftResponseAction = {
        type: ActionTypes.GET_QWERTY_DRAFT_RESPONSE,
        draft: testDetailsResponse
    }

    expect(
        QwertysActions.getQwertyDraftResponse(testDetailsResponse)
    ).toEqual(expectedAction)
})

it('Should test AddQwertyRequest action creator', () => {
    const expectedAction: AddQwertyRequestAction = {
        type: ActionTypes.ADD_QWERTY_REQUEST,
        data: mockQwertyDraft,
        publish: false
    }

    expect(
        QwertysActions.AddQwertyRequest(mockQwertyDraft, false)
    ).toEqual(expectedAction)
})

it('Should test EditQwertyRequest action creator', () => {
    const expectedAction: EditQwertyRequestAction = {
        type: ActionTypes.EDIT_QWERTY_REQUEST,
        data: mockQwertyDetails,
        publish: false
    }

    expect(
        QwertysActions.EditQwertyRequest(mockQwertyDetails, false)
    ).toEqual(expectedAction)
})

it('Should test AddQwertyResponse action creator', () => {
    const expectedAction: SubmitQwertyResponseAction = {
        type: ActionTypes.ADD_QWERTY_RESPONSE,
        : mockQwertyDetails
    }

    expect(QwertysActions.AddQwertyResponse(mockQwertyDetails)).toEqual(
        expectedAction
    )
})

it('Should test EditQwertyResponse action creator', () => {
    const expectedAction: SubmitQwertyResponseAction = {
        type: ActionTypes.EDIT_QWERTY_RESPONSE,
        : mockQwertyDetails
    }

    expect(QwertysActions.EditQwertyResponse(mockQwertyDetails)).toEqual(
        expectedAction
    )
})
