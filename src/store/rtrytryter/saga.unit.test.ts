import {
    getRtrytryters,
    getRtrytryterDetails,
    getPredefinedValues,
    getRtrytryterDraft,
    addRtrytryter,
    editRtrytryter
} from './saga'
import {
    ActionTypes,
    SetIsFetchingAction,
    rtrytryter,
    GetRtrytrytersResponseAction,
    rtrytryterDetails,
    GetRtrytryterDetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    GetRtrytryterDraftResponseAction,
    GetRtrytryterDraftRequestAction,
    SetIsErrorFetchingAction,
    AddRtrytryterRequestAction,
    rtrytryterDraft,
    SubmitRtrytryterResponseAction,
    EditRtrytryterRequestAction
} from './types'
import { put } from 'redux-saga/effects'
import {
    mockRtrytrytersList,
    mockRtrytryterDetails,
    mockRtrytryterPredefinedValues
} from './mockedData'
import { setIsErrorFetchingRtrytryterDetails } from './actions'

const mockList: rtrytryter[] = mockRtrytrytersList
const mockDetails: rtrytryterDetails = mockRtrytryterDetails
const mockPredefinedValues: predefinedValues = mockRtrytryterPredefinedValues

const mockRtrytryterDraft: rtrytryterDraft = {
    region: 'testRegion',
    area: 'testArea',
    bosRtrytryterData: { ...mockRtrytryterDetails.bosRtrytryterData },
    inUse: false
}

describe('Rtrytryters saga unit tests', () => {
    it('Should test getRtrytryters', () => {
        const mockedsetIsFetchingRtrytrytersTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetchingRtrytrytersFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedResponseAction: GetRtrytrytersResponseAction = {
            type: ActionTypes.GET_RTRYTRYTERS_RESPONSE,
            rtrytrytersList: mockList
        }

        const result = getRtrytryters()

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingRtrytrytersTrueAction)
        )

        result.next()

        expect(result.next(mockList).value).toEqual(
            put(mockedsetIsFetchingRtrytrytersFalseAction)
        )

        expect(result.next().value).toEqual(put(mockedResponseAction))
    })

    it('Should test getRtrytryterDetails', () => {
        const mockedsetIsFetchingDetailsTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        const mockedsetIsFetchingDetailsFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: false
        }

        const mockedResponseAction: GetRtrytryterDetailsResponseAction = {
            type: ActionTypes.GET_RTRYTRYTERS_DETAILS_RESPONSE,
            details: mockDetails
        }

        const result = getRtrytryterDetails({
            type: '@Rtrytryters/GET_RTRYTRYTERS_DETAILS_RESPONSE',
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

    it('Should test getRtrytryterDetails error', () => {
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

        const result = getRtrytryterDetails({
            type: '@Rtrytryters/GET_RTRYTRYTERS_DETAILS_RESPONSE',
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

    it('Should test getRtrytryterDraft', () => {
        const mockedRequestAction: GetRtrytryterDraftRequestAction = {
            type: ActionTypes.GET_RTRYTRYTER_DRAFT_REQUEST,
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

        const mockedDraftResponseAction: GetRtrytryterDraftResponseAction = {
            type: ActionTypes.GET_RTRYTRYTER_DRAFT_RESPONSE,
            draft: mockDetails
        }

        const result = getRtrytryterDraft(mockedRequestAction)

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

    it('Should test addRtrytryter', () => {
        const mockedRequestAction: AddRtrytryterRequestAction = {
            type: ActionTypes.ADD_RTRYTRYTER_REQUEST,
            data: mockRtrytryterDraft,
            publish: false
        }

        const mockedsetIsFetchingRtrytrytersTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetchingRtrytrytersFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: SubmitRtrytryterResponseAction = {
            type: ActionTypes.ADD_RTRYTRYTER_RESPONSE,
            rtrytryter: mockRtrytryterDetails
        }

        const result = addRtrytryter(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingRtrytrytersTrueAction)
        )

        result.next()

        expect(result.next(mockRtrytryterDetails).value).toEqual(
            put(mockedsetIsFetchingRtrytrytersFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })

    it('Should test editRtrytryter', () => {
        const mockedRequestAction: EditRtrytryterRequestAction = {
            type: ActionTypes.ADD_RTRYTRYTER_REQUEST,
            data: mockRtrytryterDetails,
            publish: false
        }

        const mockedsetIsFetchingRtrytrytersTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetchingRtrytrytersFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: SubmitRtrytryterResponseAction = {
            type: ActionTypes.EDIT_RTRYTRYTER_RESPONSE,
            rtrytryter: mockRtrytryterDetails
        }

        const result = editRtrytryter(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetchingRtrytrytersTrueAction)
        )

        result.next()

        expect(result.next(mockRtrytryterDetails).value).toEqual(
            put(mockedsetIsFetchingRtrytrytersFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })
})
