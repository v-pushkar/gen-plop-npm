import {
    get<%= name.charAt(0).toUpperCase()+name.slice(1) %>s,
    get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
    getPredefinedValues,
    get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft,
    add<%= name.charAt(0).toUpperCase()+name.slice(1) %>,
    edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>
} from './saga'
import {
    ActionTypes,
    SetIsFetchingAction,
    <%= name %>,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction,
    <%= name %>Details,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction,
    SetIsErrorFetchingAction,
    Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction,
    <%= name %>Draft,
    Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction,
    Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction
} from './types'
import { put } from 'redux-saga/effects'
import {
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>sList,
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>PredefinedValues
} from './mockedData'
import { setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details } from './actions'

const mockList: <%= name %>[] = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>sList
const mockDetails: <%= name %>Details = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details
const mockPredefinedValues: predefinedValues = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>PredefinedValues

const mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft: <%= name %>Draft = {
    region: 'testRegion',
    area: 'testArea',
    bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data: { ...mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details.bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data },
    inUse: false
}

describe('<%= name.charAt(0).toUpperCase()+name.slice(1) %>s saga unit tests', () => {
    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>s', () => {
        const mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedResponseAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>S_RESPONSE,
            <%= name %>sList: mockList
        }

        const result = get<%= name.charAt(0).toUpperCase()+name.slice(1) %>s()

        expect(result.next().value).toEqual(
            put(mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sTrueAction)
        )

        result.next()

        expect(result.next(mockList).value).toEqual(
            put(mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sFalseAction)
        )

        expect(result.next().value).toEqual(put(mockedResponseAction))
    })

    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details', () => {
        const mockedsetIsFetchingDetailsTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        const mockedsetIsFetchingDetailsFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: false
        }

        const mockedResponseAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE,
            details: mockDetails
        }

        const result = get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details({
            type: '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE',
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

    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details error', () => {
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

        const result = get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details({
            type: '@<%= name.charAt(0).toUpperCase()+name.slice(1) %>s/GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE',
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

    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft', () => {
        const mockedRequestAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_REQUEST,
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

        const mockedDraftResponseAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_RESPONSE,
            draft: mockDetails
        }

        const result = get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft(mockedRequestAction)

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

    it('Should test add<%= name.charAt(0).toUpperCase()+name.slice(1) %>', () => {
        const mockedRequestAction: Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction = {
            type: ActionTypes.ADD_<%= name.toUpperCase() %>_REQUEST,
            data: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft,
            publish: false
        }

        const mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction = {
            type: ActionTypes.ADD_<%= name.toUpperCase() %>_RESPONSE,
            <%= name %>: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details
        }

        const result = add<%= name.charAt(0).toUpperCase()+name.slice(1) %>(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sTrueAction)
        )

        result.next()

        expect(result.next(mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details).value).toEqual(
            put(mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })

    it('Should test edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>', () => {
        const mockedRequestAction: Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction = {
            type: ActionTypes.ADD_<%= name.toUpperCase() %>_REQUEST,
            data: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
            publish: false
        }

        const mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction = {
            type: ActionTypes.EDIT_<%= name.toUpperCase() %>_RESPONSE,
            <%= name %>: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details
        }

        const result = edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sTrueAction)
        )

        result.next()

        expect(result.next(mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details).value).toEqual(
            put(mockedsetIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>sFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })
})
