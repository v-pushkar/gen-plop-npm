import { Action } from 'redux'
import {
    ActionTypes,
    <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions,
    <%= name %>,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction,
    SetIsFetchingAction,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequestAction,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction,
    <%= name %>Details,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction,
    SetIsErrorFetchingAction,
    <%= name %>Draft,
    Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction,
    Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction,
    Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction
} from '.'
import {
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>sList,
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
    mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>PredefinedValues
} from './mockedData'

const testResponse: <%= name %>[] = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>sList
const testDetailsResponse: <%= name %>Details = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details
const mockPredefinedValues: predefinedValues = mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>PredefinedValues
const mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft: <%= name %>Draft = {
    region: 'testRegion',
    area: 'testArea',
    bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data: { ...mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details.bos<%= name.charAt(0).toUpperCase()+name.slice(1) %>Data },
    inUse: false
}

describe('<%= name.charAt(0).toUpperCase()+name.slice(1) %>s actions unit tests', () => {
    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>S_REQUEST
        }

        expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sRequest()).toEqual(expectedAction)
    })

    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponse action creator', () => {
        const expectedAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponseAction = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>S_RESPONSE,
            <%= name %>sList: [...testResponse]
        }

        expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponse(testResponse)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details action creator', () => {
        const expectedAction: SetIsErrorFetchingAction = {
            type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
            isError: true
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(true)
        ).toEqual(expectedAction)
    })

    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequest action creator', () => {
        const expectedAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequestAction = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>_DETAILS_REQUEST,
            id: 11
        }

        expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequest(11)).toEqual(
            expectedAction
        )
    })

    it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponse action creator', () => {
        const expectedAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponseAction = {
            type: ActionTypes.GET_<%= name.toUpperCase() %>S_DETAILS_RESPONSE,
            details: testDetailsResponse
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponse(testDetailsResponse)
        ).toEqual(expectedAction)
    })

    it('Should test getPredefinedValuesRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_PREDEFINED_VALUES_REQUEST
        }

        expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.getPredefinedValuesRequest()).toEqual(
            expectedAction
        )
    })

    it('Should test getPredefinedValuesResponse action creator', () => {
        const expectedAction: GetPredefinedValuesResponseAction = {
            type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
            values: { ...mockPredefinedValues }
        }

        expect(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.getPredefinedValuesResponse(mockPredefinedValues)
        ).toEqual(expectedAction)
    })
})

it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequest action creator', () => {
    const expectedAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction = {
        type: ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_REQUEST,
        id: 11
    }

    expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequest(11)).toEqual(expectedAction)
})

it('Should test get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponse action creator', () => {
    const expectedAction: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponseAction = {
        type: ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_RESPONSE,
        draft: testDetailsResponse
    }

    expect(
        <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponse(testDetailsResponse)
    ).toEqual(expectedAction)
})

it('Should test Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Request action creator', () => {
    const expectedAction: Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction = {
        type: ActionTypes.ADD_<%= name.toUpperCase() %>_REQUEST,
        data: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft,
        publish: false
    }

    expect(
        <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Request(mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft, false)
    ).toEqual(expectedAction)
})

it('Should test Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Request action creator', () => {
    const expectedAction: Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction = {
        type: ActionTypes.EDIT_<%= name.toUpperCase() %>_REQUEST,
        data: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details,
        publish: false
    }

    expect(
        <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Request(mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details, false)
    ).toEqual(expectedAction)
})

it('Should test Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response action creator', () => {
    const expectedAction: Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction = {
        type: ActionTypes.ADD_<%= name.toUpperCase() %>_RESPONSE,
        <%= name %>: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details
    }

    expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response(mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details)).toEqual(
        expectedAction
    )
})

it('Should test Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response action creator', () => {
    const expectedAction: Submit<%= name.charAt(0).toUpperCase()+name.slice(1) %>ResponseAction = {
        type: ActionTypes.EDIT_<%= name.toUpperCase() %>_RESPONSE,
        <%= name %>: mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details
    }

    expect(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response(mock<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details)).toEqual(
        expectedAction
    )
})
