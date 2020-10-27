import <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer, {
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction,
    <%= name.charAt(0).toUpperCase()+name.slice(1) %>State,
    <%= name %>,
    SetIsFetchingAction,
    <%= name %>Details,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction,
    SetIsErrorFetchingAction,
    Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction
} from '.'
import {
    get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response,
    setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>,
    get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponse,
    setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
    getPredefinedValuesResponse,
    get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponse,
    setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
    Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response,
    Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response
} from './actions'
import {
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>List,
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>PredefinedValues
} from './mockedData'

const INITIAL_STATE: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
    <%= name %>sList: [],
    isFetching: false,
    <%= name %>Details: null,
    isFetchingDetails: false,
    predefinedValues: null,
    <%= name %>Draft: null,
    isErrorFetchingDetails: false
}

const mockData: <%= name %>[] = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>List
const mockDetails: <%= name %>Details = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details
const mockPredefinedValues: predefinedValues = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>PredefinedValues

const INITIAL_STATE_WITH_LIST_ELEMENT: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
    <%= name %>sList: [mockDetails],
    isFetching: false,
    <%= name %>Details: null,
    isFetchingDetails: false,
    predefinedValues: null,
    <%= name %>Draft: null,
    isErrorFetchingDetails: false
}

const mockEditedDetails: <%= name %>Details = JSON.parse(
    JSON.stringify({ ...mockDetails, physicalPlaces: 'editedPhysicalPlaces' })
)

describe('<%= name.charAt(0).toUpperCase()+name.slice(1) %> reducer unit tests', () => {
    it('Should return proper state for Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction action', () => {
        const mockedGet<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction = get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response(
            mockData
        )

        const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
            <%= name %>sList: [...mockData],
            isFetching: false,
            <%= name %>Details: null,
            isFetchingDetails: false,
            predefinedValues: null,
            <%= name %>Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(INITIAL_STATE, mockedGet<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction)
        ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
    })

    it('Should return proper state for SetIsFetchingAction action', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>(
            true
        )

        const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
            <%= name %>sList: [],
            isFetching: true,
            <%= name %>Details: null,
            isFetchingDetails: false,
            predefinedValues: null,
            <%= name %>Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
    })

    it('Should return proper state for Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction action', () => {
        const mockedGet<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction = get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponse(
            mockDetails
        )

        const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
            <%= name %>sList: [],
            isFetching: false,
            <%= name %>Details: mockDetails,
            isFetchingDetails: false,
            predefinedValues: null,
            <%= name %>Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(
                INITIAL_STATE,
                mockedGet<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction
            )
        ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
    })

    it('Should return proper state for SetIsFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsFetchingAction = setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(
            true
        )

        const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
            <%= name %>sList: [],
            isFetching: false,
            <%= name %>Details: null,
            isFetchingDetails: true,
            predefinedValues: null,
            <%= name %>Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
    })

    it('Should return proper state for SetIsErrorFetchingAction action for details', () => {
        const mockedSetIsFetchingAction: SetIsErrorFetchingAction = setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(
            true
        )

        const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
            <%= name %>sList: [],
            isFetching: false,
            <%= name %>Details: null,
            isFetchingDetails: false,
            predefinedValues: null,
            <%= name %>Draft: null,
            isErrorFetchingDetails: true
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(INITIAL_STATE, mockedSetIsFetchingAction)
        ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
    })

    it('Should return proper state for GetPredefinedValuesResponseAction action for details', () => {
        const mockedGetPredefinedValuesResponseAction: GetPredefinedValuesResponseAction = getPredefinedValuesResponse(
            mockPredefinedValues
        )

        const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
            <%= name %>sList: [],
            isFetching: false,
            <%= name %>Details: null,
            isFetchingDetails: false,
            predefinedValues: { ...mockPredefinedValues },
            <%= name %>Draft: null,
            isErrorFetchingDetails: false
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(
                INITIAL_STATE,
                mockedGetPredefinedValuesResponseAction
            )
        ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
    })
})

it('Should return proper state for Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction action', () => {
    const mockedGet<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction = get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponse(
        mockDetails
    )

    const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
        <%= name %>sList: [],
        isFetching: false,
        <%= name %>Details: null,
        isFetchingDetails: false,
        predefinedValues: null,
        <%= name %>Draft: mockDetails,
        isErrorFetchingDetails: false
    }

    expect(
        <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(INITIAL_STATE, mockedGet<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction)
    ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
})

it('Should return proper state for ADD_<%= name.toUpperCase() %>_RESPONSE action', () => {
    const mockedSubmit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction: Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction = Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response(
        mockDetails
    )

    const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
        <%= name %>sList: [mockDetails],
        isFetching: false,
        <%= name %>Details: null,
        isFetchingDetails: false,
        predefinedValues: null,
        <%= name %>Draft: null,
        isErrorFetchingDetails: false
    }

    expect(
        <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(INITIAL_STATE, mockedSubmit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction)
    ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
})

it('Should return proper state for EDIT_<%= name.toUpperCase() %>_RESPONSE action', () => {
    const mockedSubmit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction: Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction = Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response(
        mockEditedDetails
    )

    const mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State: <%= name.charAt(0).toUpperCase()+name.slice(1) %>State = {
        <%= name %>sList: [mockEditedDetails],
        isFetching: false,
        <%= name %>Details: null,
        isFetchingDetails: false,
        predefinedValues: null,
        <%= name %>Draft: null,
        isErrorFetchingDetails: false
    }

    expect(
        <%= name.charAt(0).toUpperCase()+name.slice(1) %>Reducer(
            INITIAL_STATE_WITH_LIST_ELEMENT,
            mockedSubmit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction
        )
    ).toEqual(mocked<%= name.charAt(0).toUpperCase()+name.slice(1) %>State)
})
