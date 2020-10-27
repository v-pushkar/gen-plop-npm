import { Action } from 'redux'
import {
    ActionTypes,
    {{Name}}sActions,
    {{name}},
    Get{{Name}}sResponseAction,
    SetIsFetchingAction,
    Get{{Name}}DetailsRequestAction,
    Get{{Name}}DetailsResponseAction,
    {{name}}Details,
    GetPredefinedValuesResponseAction,
    predefinedValues,
    Get{{Name}}DraftRequestAction,
    Get{{Name}}DraftResponseAction,
    SetIsErrorFetchingAction,
    {{name}}Draft,
    Add{{Name}}RequestAction,
    Edit{{Name}}RequestAction,
    Submit{{Name}}ResponseAction
} from '.'
import {
    mock{{Name}}sList,
    mock{{Name}}Details,
    mock{{Name}}PredefinedValues
} from './mockedData'

const testResponse: {{name}}[] = mock{{Name}}sList
const testDetailsResponse: {{name}}Details = mock{{Name}}Details
const mockPredefinedValues: predefinedValues = mock{{Name}}PredefinedValues
const mock{{Name}}Draft: {{name}}Draft = {
    region: 'testRegion',
    area: 'testArea',
    bos{{Name}}Data: { ...mock{{Name}}Details.bos{{Name}}Data },
    inUse: false
}

describe('{{Name}}s actions unit tests', () => {
    it('Should test get{{Name}}sRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_{{NAME}}S_REQUEST
        }

        expect({{Name}}sActions.get{{Name}}sRequest()).toEqual(expectedAction)
    })

    it('Should test get{{Name}}sResponse action creator', () => {
        const expectedAction: Get{{Name}}sResponseAction = {
            type: ActionTypes.GET_{{NAME}}S_RESPONSE,
            {{name}}sList: [...testResponse]
        }

        expect({{Name}}sActions.get{{Name}}sResponse(testResponse)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetching{{Name}}s action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING,
            isFetching: true
        }

        expect({{Name}}sActions.setIsFetching{{Name}}s(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsFetching{{Name}}Details action creator', () => {
        const expectedAction: SetIsFetchingAction = {
            type: ActionTypes.SET_IS_FETCHING_DETAILS,
            isFetching: true
        }

        expect({{Name}}sActions.setIsFetching{{Name}}Details(true)).toEqual(
            expectedAction
        )
    })

    it('Should test setIsErrorFetching{{Name}}Details action creator', () => {
        const expectedAction: SetIsErrorFetchingAction = {
            type: ActionTypes.SET_IS_ERROR_FETCHING_DETAILS,
            isError: true
        }

        expect(
            {{Name}}sActions.setIsErrorFetching{{Name}}Details(true)
        ).toEqual(expectedAction)
    })

    it('Should test get{{Name}}DetailsRequest action creator', () => {
        const expectedAction: Get{{Name}}DetailsRequestAction = {
            type: ActionTypes.GET_{{NAME}}_DETAILS_REQUEST,
            id: 11
        }

        expect({{Name}}sActions.get{{Name}}DetailsRequest(11)).toEqual(
            expectedAction
        )
    })

    it('Should test get{{Name}}DetailsResponse action creator', () => {
        const expectedAction: Get{{Name}}DetailsResponseAction = {
            type: ActionTypes.GET_{{NAME}}S_DETAILS_RESPONSE,
            details: testDetailsResponse
        }

        expect(
            {{Name}}sActions.get{{Name}}DetailsResponse(testDetailsResponse)
        ).toEqual(expectedAction)
    })

    it('Should test getPredefinedValuesRequest action creator', () => {
        const expectedAction: Action = {
            type: ActionTypes.GET_PREDEFINED_VALUES_REQUEST
        }

        expect({{Name}}sActions.getPredefinedValuesRequest()).toEqual(
            expectedAction
        )
    })

    it('Should test getPredefinedValuesResponse action creator', () => {
        const expectedAction: GetPredefinedValuesResponseAction = {
            type: ActionTypes.GET_PREDEFINED_VALUES_RESPONSE,
            values: { ...mockPredefinedValues }
        }

        expect(
            {{Name}}sActions.getPredefinedValuesResponse(mockPredefinedValues)
        ).toEqual(expectedAction)
    })
})

it('Should test get{{Name}}DraftRequest action creator', () => {
    const expectedAction: Get{{Name}}DraftRequestAction = {
        type: ActionTypes.GET_{{NAME}}_DRAFT_REQUEST,
        id: 11
    }

    expect({{Name}}sActions.get{{Name}}DraftRequest(11)).toEqual(expectedAction)
})

it('Should test get{{Name}}DraftResponse action creator', () => {
    const expectedAction: Get{{Name}}DraftResponseAction = {
        type: ActionTypes.GET_{{NAME}}_DRAFT_RESPONSE,
        draft: testDetailsResponse
    }

    expect(
        {{Name}}sActions.get{{Name}}DraftResponse(testDetailsResponse)
    ).toEqual(expectedAction)
})

it('Should test Add{{Name}}Request action creator', () => {
    const expectedAction: Add{{Name}}RequestAction = {
        type: ActionTypes.ADD_{{NAME}}_REQUEST,
        data: mock{{Name}}Draft,
        publish: false
    }

    expect(
        {{Name}}sActions.Add{{Name}}Request(mock{{Name}}Draft, false)
    ).toEqual(expectedAction)
})

it('Should test Edit{{Name}}Request action creator', () => {
    const expectedAction: Edit{{Name}}RequestAction = {
        type: ActionTypes.EDIT_{{NAME}}_REQUEST,
        data: mock{{Name}}Details,
        publish: false
    }

    expect(
        {{Name}}sActions.Edit{{Name}}Request(mock{{Name}}Details, false)
    ).toEqual(expectedAction)
})

it('Should test Add{{Name}}Response action creator', () => {
    const expectedAction: Submit{{Name}}ResponseAction = {
        type: ActionTypes.ADD_{{NAME}}_RESPONSE,
        {{name}}: mock{{Name}}Details
    }

    expect({{Name}}sActions.Add{{Name}}Response(mock{{Name}}Details)).toEqual(
        expectedAction
    )
})

it('Should test Edit{{Name}}Response action creator', () => {
    const expectedAction: Submit{{Name}}ResponseAction = {
        type: ActionTypes.EDIT_{{NAME}}_RESPONSE,
        {{name}}: mock{{Name}}Details
    }

    expect({{Name}}sActions.Edit{{Name}}Response(mock{{Name}}Details)).toEqual(
        expectedAction
    )
})
