import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    {{Name}}sState,
    {{Name}}sActions,
    {{name}}Details,
    {{name}}Draft
} from 'store/ducks/{{Name}}s'
import { AppState } from 'store/types'
import { {{Name}}sList } from 'views/Components/{{name}}s/{{name}}sList/{{Name}}sList'

export const {{Name}}s: React.FC = () => {
    const dispatch = useDispatch()
    const {
        isFetching,
        isFetchingDetails,
        {{name}}sList,
        {{name}}Details,
        predefinedValues,
        {{name}}Draft,
        isErrorFetchingDetails
    }: {{Name}}sState = useSelector<AppState>(
        (state) => state.{{name}}s
    ) as {{Name}}sState

    useEffect(() => {
        dispatch({{Name}}sActions.get{{Name}}sRequest())
        return () => {
            dispatch({{Name}}sActions.get{{Name}}sResponse([]))
        }
    }, [])

    const get{{Name}}Details = (id: number) =>
        dispatch({{Name}}sActions.get{{Name}}DetailsRequest(id))

    const get{{Name}}Draft = (id: number) =>
        dispatch({{Name}}sActions.get{{Name}}DraftRequest(id))

    const clean{{Name}}Details = () =>
        dispatch({{Name}}sActions.get{{Name}}DetailsResponse(null))

    const clean{{Name}}Draft = () => {
        cleanPredefinedValues()
        dispatch({{Name}}sActions.get{{Name}}DraftResponse(null))
    }

    const getPredefinedValues = () =>
        dispatch({{Name}}sActions.getPredefinedValuesRequest())

    const cleanPredefinedValues = () =>
        dispatch({{Name}}sActions.getPredefinedValuesResponse(null))

    const add{{Name}} = (data: {{name}}Draft, publish: boolean) =>
        dispatch({{Name}}sActions.Add{{Name}}Request(data, publish))

    const edit{{Name}} = (data: {{name}}Details, publish: boolean) =>
        dispatch({{Name}}sActions.Edit{{Name}}Request(data, publish))

    return (
        <div data-testid="{{name}}s">
            <{{Name}}sList
                loadingData={isFetching}
                data={{{name}}sList}
                get{{Name}}Details={get{{Name}}Details}
                get{{Name}}Draft={get{{Name}}Draft}
                clean{{Name}}Details={clean{{Name}}Details}
                clean{{Name}}Draft={clean{{Name}}Draft}
                getPredefinedValues={getPredefinedValues}
                cleanPredefinedValues={cleanPredefinedValues}
                add{{Name}}={add{{Name}} }
                edit{{Name}}={edit{{Name}} }
                isFetchingDetails={isFetchingDetails}
                {{name}}Details={{{name}}Details}
                predefinedValues={predefinedValues}
                {{name}}Draft={{{name}}Draft}
                isErrorFetchingDetails={isErrorFetchingDetails}
            />
        </div>
    )
}
