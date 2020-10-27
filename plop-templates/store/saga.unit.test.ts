import {
    get{{Name}}s,
    get{{Name}}Details,
    getPredefinedValues,
    get{{Name}}Draft,
    add{{Name}},
    edit{{Name}}
} from './saga'
import {
    ActionTypes,
    SetIsFetchingAction,
    {{name}},
    Get{{Name}}sResponseAction,
    {{name}}Details,
    Get{{Name}}DetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get{{Name}}DraftResponseAction,
    Get{{Name}}DraftRequestAction,
    SetIsErrorFetchingAction,
    Add{{Name}}RequestAction,
    {{name}}Draft,
    Submit{{Name}}ResponseAction,
    Edit{{Name}}RequestAction
} from './types'
import { put } from 'redux-saga/effects'
import {
    mock{{Name}}sList,
    mock{{Name}}Details,
    mock{{Name}}PredefinedValues
} from './mockedData'
import { setIsErrorFetching{{Name}}Details } from './actions'

const mockList: {{name}}[] = mock{{Name}}sList
const mockDetails: {{name}}Details = mock{{Name}}Details
const mockPredefinedValues: predefinedValues = mock{{Name}}PredefinedValues

const mock{{Name}}Draft: {{name}}Draft = {
    region: 'testRegion',
    area: 'testArea',
    bos{{Name}}Data: { ...mock{{Name}}Details.bos{{Name}}Data },
    inUse: false
}

describe('{{Name}}s saga unit tests', () => {
    it('Should test get{{Name}}s', () => {
        const mockedsetIsFetching{{Name}}sTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetching{{Name}}sFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedResponseAction: Get{{Name}}sResponseAction = {
            type: ActionTypes.GET_{{NAME}}S_RESPONSE,
            {{name}}sList: mockList
        }

        const result = get{{Name}}s()

        expect(result.next().value).toEqual(
            put(mockedsetIsFetching{{Name}}sTrueAction)
        )

        result.next()

        expect(result.next(mockList).value).toEqual(
            put(mockedsetIsFetching{{Name}}sFalseAction)
        )

        expect(result.next().value).toEqual(put(mockedResponseAction))
    })

    it('Should test get{{Name}}Details', () => {
        const mockedsetIsFetchingDetailsTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        const mockedsetIsFetchingDetailsFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: false
        }

        const mockedResponseAction: Get{{Name}}DetailsResponseAction = {
            type: ActionTypes.GET_{{NAME}}S_DETAILS_RESPONSE,
            details: mockDetails
        }

        const result = get{{Name}}Details({
            type: '@{{Name}}s/GET_{{NAME}}S_DETAILS_RESPONSE',
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

    it('Should test get{{Name}}Details error', () => {
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

        const result = get{{Name}}Details({
            type: '@{{Name}}s/GET_{{NAME}}S_DETAILS_RESPONSE',
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

    it('Should test get{{Name}}Draft', () => {
        const mockedRequestAction: Get{{Name}}DraftRequestAction = {
            type: ActionTypes.GET_{{NAME}}_DRAFT_REQUEST,
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

        const mockedDraftResponseAction: Get{{Name}}DraftResponseAction = {
            type: ActionTypes.GET_{{NAME}}_DRAFT_RESPONSE,
            draft: mockDetails
        }

        const result = get{{Name}}Draft(mockedRequestAction)

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

    it('Should test add{{Name}}', () => {
        const mockedRequestAction: Add{{Name}}RequestAction = {
            type: ActionTypes.ADD_{{NAME}}_REQUEST,
            data: mock{{Name}}Draft,
            publish: false
        }

        const mockedsetIsFetching{{Name}}sTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetching{{Name}}sFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: Submit{{Name}}ResponseAction = {
            type: ActionTypes.ADD_{{NAME}}_RESPONSE,
            {{name}}: mock{{Name}}Details
        }

        const result = add{{Name}}(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetching{{Name}}sTrueAction)
        )

        result.next()

        expect(result.next(mock{{Name}}Details).value).toEqual(
            put(mockedsetIsFetching{{Name}}sFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })

    it('Should test edit{{Name}}', () => {
        const mockedRequestAction: Edit{{Name}}RequestAction = {
            type: ActionTypes.ADD_{{NAME}}_REQUEST,
            data: mock{{Name}}Details,
            publish: false
        }

        const mockedsetIsFetching{{Name}}sTrueAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        const mockedsetIsFetching{{Name}}sFalseAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: false
        }

        const mockedPredefinedValuesResponseAction: Submit{{Name}}ResponseAction = {
            type: ActionTypes.EDIT_{{NAME}}_RESPONSE,
            {{name}}: mock{{Name}}Details
        }

        const result = edit{{Name}}(mockedRequestAction)

        expect(result.next().value).toEqual(
            put(mockedsetIsFetching{{Name}}sTrueAction)
        )

        result.next()

        expect(result.next(mock{{Name}}Details).value).toEqual(
            put(mockedsetIsFetching{{Name}}sFalseAction)
        )

        expect(result.next().value).toEqual(
            put(mockedPredefinedValuesResponseAction)
        )
    })
})
