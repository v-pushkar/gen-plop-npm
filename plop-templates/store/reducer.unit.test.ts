import {{Name}}sReducer, {
    Get{{Name}}sResponseAction,
    {{Name}}sState,
    {{name}},
    SetIsFetchingAction,
    {{name}}Details,
    Get{{Name}}DetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get{{Name}}DraftResponseAction,
    SetIsErrorFetchingAction,
    Submit{{Name}}ResponseAction
} from '.'
import {
    get{{Name}}sResponse,
    setIsFetching{{Name}}s,
    get{{Name}}DetailsResponse,
    setIsFetching{{Name}}Details,
    getPredefinedValuesResponse,
    get{{Name}}DraftResponse,
    setIsErrorFetching{{Name}}Details,
    Add{{Name}}Response,
    Edit{{Name}}Response
} from './actions'
import {
    mock{{Name}}sList,
    mock{{Name}}Details,
    mock{{Name}}PredefinedValues
} from './mockedData'

const INITIAL_STATE: {{Name}}sState = {
    {{name}}sList: [],
    isFetching: false,
    {{name}}Details: null,
    isFetchingDetails: false,
    predefinedValues: null,
    {{name}}Draft: null,
    isErrorFetchingDetails: false
}

const mockData: {{name}}[] = mock{{Name}}sList
const mockDetails: {{name}}Details = mock{{Name}}Details
const mockPredefinedValues: predefinedValues = mock{{Name}}PredefinedValues

const INITIAL_STATE_WITH_LIST_ELEMENT: {{Name}}sState = {
    {{name}}sList: [mockDetails],
    isFetching: false,
    {{name}}Details: null,
    isFetchingDetails: false,
    predefinedValues: null,
    {{name}}Draft: null,
    isErrorFetchingDetails: false
}

const mockEditedDetails: {{name}}Details = JSON.parse(
    JSON.stringify({ ...mockDetails, physicalPlaces: 'editedPhysicalPlaces' })
)

describe('{{Name}}s reducer unit tests', () => {
    it('Should return proper state for Get{{Name}}sResponseAction action', () => {
        const mockedGet{{Name}}sResponseAction: Get{{Name}}sResponseAction = get{{Name}}sResponse(
            mockData
        )

        const mocked{{Name}}sState: {{Name}}sState = {
            {{name}}sList: [...mockData],
            isFetching: false,
            {{name}}Details: null,
            isFetchingDetails: false,
            predefinedValues: null,
            {{name}}Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            {{Name}}sReducer(INITIAL_STATE, mockedGet{{Name}}sResponseAction)
        ).toEqual(mocked{{Name}}sState)
    })

    it('Should return proper state for SetIsFetchingAction action', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetching{{Name}}s(
            true
        )

        const mocked{{Name}}sState: {{Name}}sState = {
            {{name}}sList: [],
            isFetching: true,
            {{name}}Details: null,
            isFetchingDetails: false,
            predefinedValues: null,
            {{name}}Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            {{Name}}sReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mocked{{Name}}sState)
    })

    it('Should return proper state for Get{{Name}}DetailsResponseAction action', () => {
        const mockedGet{{Name}}DetailsResponseAction: Get{{Name}}DetailsResponseAction = get{{Name}}DetailsResponse(
            mockDetails
        )

        const mocked{{Name}}sState: {{Name}}sState = {
            {{name}}sList: [],
            isFetching: false,
            {{name}}Details: mockDetails,
            isFetchingDetails: false,
            predefinedValues: null,
            {{name}}Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            {{Name}}sReducer(
                INITIAL_STATE,
                mockedGet{{Name}}DetailsResponseAction
            )
        ).toEqual(mocked{{Name}}sState)
    })

    it('Should return proper state for SetIsFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetching{{Name}}Details(
            true
        )

        const mocked{{Name}}sState: {{Name}}sState = {
            {{name}}sList: [],
            isFetching: false,
            {{name}}Details: null,
            isFetchingDetails: true,
            predefinedValues: null,
            {{name}}Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            {{Name}}sReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mocked{{Name}}sState)
    })

    it('Should return proper state for SetIsErrorFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsErrorFetchingAction = setIsErrorFetching{{Name}}Details(
            true
        )

        const mocked{{Name}}sState: {{Name}}sState = {
            {{name}}sList: [],
            isFetching: false,
            {{name}}Details: null,
            isFetchingDetails: false,
            predefinedValues: null,
            {{name}}Draft: null,
            isErrorFetchingDetails: true
        }

        expect(
            {{Name}}sReducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mocked{{Name}}sState)
    })

    it('Should return proper state for GetPredefinedValuesResponseAction action for details', () => {
        const mockedGetPredefinedValuesResponseAction: GetPredefinedValuesResponseAction = getPredefinedValuesResponse(
            mockPredefinedValues
        )

        const mocked{{Name}}sState: {{Name}}sState = {
            {{name}}sList: [],
            isFetching: false,
            {{name}}Details: null,
            isFetchingDetails: false,
            predefinedValues: { ...mockPredefinedValues },
            {{name}}Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            {{Name}}sReducer(
                INITIAL_STATE,
                mockedGetPredefinedValuesResponseAction
            )
        ).toEqual(mocked{{Name}}sState)
    })
})

it('Should return proper state for Get{{Name}}DraftResponseAction action', () => {
    const mockedGet{{Name}}DraftResponseAction: Get{{Name}}DraftResponseAction = get{{Name}}DraftResponse(
        mockDetails
    )

    const mocked{{Name}}sState: {{Name}}sState = {
        {{name}}sList: [],
        isFetching: false,
        {{name}}Details: null,
        isFetchingDetails: false,
        predefinedValues: null,
        {{name}}Draft: mockDetails,
        isErrorFetchingDetails: false
    }

    expect(
        {{Name}}sReducer(INITIAL_STATE, mockedGet{{Name}}DraftResponseAction)
    ).toEqual(mocked{{Name}}sState)
})

it('Should return proper state for ADD_{{NAME}}_RESPONSE action', () => {
    const mockedSubmit{{Name}}ResponseAction: Submit{{Name}}ResponseAction = Add{{Name}}Response(
        mockDetails
    )

    const mocked{{Name}}sState: {{Name}}sState = {
        {{name}}sList: [mockDetails],
        isFetching: false,
        {{name}}Details: null,
        isFetchingDetails: false,
        predefinedValues: null,
        {{name}}Draft: null,
        isErrorFetchingDetails: false
    }

    expect(
        {{Name}}sReducer(INITIAL_STATE, mockedSubmit{{Name}}ResponseAction)
    ).toEqual(mocked{{Name}}sState)
})

it('Should return proper state for EDIT_{{NAME}}_RESPONSE action', () => {
    const mockedSubmit{{Name}}ResponseAction: Submit{{Name}}ResponseAction = Edit{{Name}}Response(
        mockEditedDetails
    )

    const mocked{{Name}}sState: {{Name}}sState = {
        {{name}}sList: [mockEditedDetails],
        isFetching: false,
        {{name}}Details: null,
        isFetchingDetails: false,
        predefinedValues: null,
        {{name}}Draft: null,
        isErrorFetchingDetails: false
    }

    expect(
        {{Name}}sReducer(
            INITIAL_STATE_WITH_LIST_ELEMENT,
            mockedSubmit{{Name}}ResponseAction
        )
    ).toEqual(mocked{{Name}}sState)
})
