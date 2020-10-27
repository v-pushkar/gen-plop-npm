import {
    {{name}},
    ActionTypes,
    {{name}}Details,
    predefinedValues,
    Get{{Name}}DraftRequestAction,
    Get{{Name}}DetailsRequestAction,
    Add{{Name}}RequestAction,
    Edit{{Name}}RequestAction
} from './types'
import { {{Name}}sActions } from '.'
import { put, takeEvery, call, takeLatest, all } from 'redux-saga/effects'
import { NotificationsActions, NotificationTypes } from 'store'
import {
    fetch{{Name}}s,
    fetch{{Name}},
    fetchPredefinedValues,
    sendPublished,
    sendDraft
} from 'Services/{{Name}}s'

export function* get{{Name}}s(): Generator {
    yield put({{Name}}sActions.setIsFetching{{Name}}s(true))
    try {
        const response = (yield call(() => fetch{{Name}}s())) as {{name}}[]
        yield put({{Name}}sActions.setIsFetching{{Name}}s(false))
        yield put({{Name}}sActions.get{{Name}}sResponse(response))
    } catch (error) {
        yield put({{Name}}sActions.setIsFetching{{Name}}s(false))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* get{{Name}}Details({
    id
}: Get{{Name}}DetailsRequestAction): Generator {
    yield put({{Name}}sActions.setIsFetching{{Name}}Details(true))
    try {
        const response = (yield call(() =>
            fetch{{Name}}(id)
        )) as {{name}}Details
        yield put({{Name}}sActions.setIsFetching{{Name}}Details(false))
        yield put({{Name}}sActions.get{{Name}}DetailsResponse(response))
    } catch (error) {
        yield put({{Name}}sActions.setIsFetching{{Name}}Details(false))
        yield put({{Name}}sActions.setIsErrorFetching{{Name}}Details(true))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
        yield put({{Name}}sActions.setIsErrorFetching{{Name}}Details(true))
    }
}

export function* getPredefinedValues(): Generator {
    yield put({{Name}}sActions.setIsFetching{{Name}}Details(true))
    try {
        const response = (yield call(() =>
            fetchPredefinedValues()
        )) as predefinedValues
        yield put({{Name}}sActions.setIsFetching{{Name}}Details(false))
        yield put({{Name}}sActions.getPredefinedValuesResponse(response))
    } catch (error) {
        yield put({{Name}}sActions.setIsFetching{{Name}}Details(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* get{{Name}}Draft({
    id
}: Get{{Name}}DraftRequestAction): Generator {
    yield put({{Name}}sActions.setIsFetching{{Name}}Details(true))
    try {
        const [draft, predefinedValues] = (yield all([
            call(() => fetch{{Name}}(id)),
            call(() => fetchPredefinedValues())
        ])) as [{{name}}Details, predefinedValues]
        yield put({{Name}}sActions.setIsFetching{{Name}}Details(false))
        yield put({{Name}}sActions.get{{Name}}DraftResponse(draft))
        yield put(
            {{Name}}sActions.getPredefinedValuesResponse(predefinedValues)
        )
    } catch (error) {
        yield put({{Name}}sActions.setIsFetching{{Name}}Details(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* add{{Name}}({
    data,
    publish
}: Add{{Name}}RequestAction): Generator {
    yield put({{Name}}sActions.setIsFetching{{Name}}s(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as {{name}}Details
        yield put({{Name}}sActions.setIsFetching{{Name}}s(false))
        yield put({{Name}}sActions.Add{{Name}}Response(response))
    } catch (error) {
        yield put({{Name}}sActions.setIsFetching{{Name}}s(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* edit{{Name}}({
    data,
    publish
}: Edit{{Name}}RequestAction): Generator {
    yield put({{Name}}sActions.setIsFetching{{Name}}s(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as {{name}}Details
        yield put({{Name}}sActions.setIsFetching{{Name}}s(false))
        yield put({{Name}}sActions.Edit{{Name}}Response(response))
    } catch (error) {
        yield put({{Name}}sActions.setIsFetching{{Name}}s(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export const {{Name}}sSaga = [
    takeEvery(ActionTypes.GET_{{NAME}}S_REQUEST, get{{Name}}s),
    takeLatest(ActionTypes.GET_{{NAME}}_DETAILS_REQUEST, get{{Name}}Details),
    takeLatest(ActionTypes.GET_PREDEFINED_VALUES_REQUEST, getPredefinedValues),
    takeLatest(ActionTypes.GET_{{NAME}}_DRAFT_REQUEST, get{{Name}}Draft),
    takeEvery(ActionTypes.ADD_{{NAME}}_REQUEST, add{{Name}}),
    takeEvery(ActionTypes.EDIT_{{NAME}}_REQUEST, edit{{Name}})
]
