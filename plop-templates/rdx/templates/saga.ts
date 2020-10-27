import {
    <%= name %>,
    ActionTypes,
    <%= name %>Details,
    predefinedValues,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction,
    Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequestAction,
    Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction,
    Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction
} from './types'
import { <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions } from '.'
import { put, takeEvery, call, takeLatest, all } from 'redux-saga/effects'
import { NotificationsActions, NotificationTypes } from 'store'
import {
    fetch<%= name.charAt(0).toUpperCase()+name.slice(1) %>s,
    fetch<%= name.charAt(0).toUpperCase()+name.slice(1) %>,
    fetchPredefinedValues,
    sendPublished,
    sendDraft
} from 'Services/<%= name.charAt(0).toUpperCase()+name.slice(1) %>s'

export function* get<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(): Generator {
    yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(true))
    try {
        const response = (yield call(() => fetch<%= name.charAt(0).toUpperCase()+name.slice(1) %>s())) as <%= name %>[]
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(false))
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>sResponse(response))
    } catch (error) {
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(false))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details({
    id
}: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsRequestAction): Generator {
    yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(true))
    try {
        const response = (yield call(() =>
            fetch<%= name.charAt(0).toUpperCase()+name.slice(1) %>(id)
        )) as <%= name %>Details
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(false))
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DetailsResponse(response))
    } catch (error) {
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(false))
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(true))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsErrorFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(true))
    }
}

export function* getPredefinedValues(): Generator {
    yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(true))
    try {
        const response = (yield call(() =>
            fetchPredefinedValues()
        )) as predefinedValues
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(false))
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.getPredefinedValuesResponse(response))
    } catch (error) {
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft({
    id
}: Get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftRequestAction): Generator {
    yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(true))
    try {
        const [draft, predefinedValues] = (yield all([
            call(() => fetch<%= name.charAt(0).toUpperCase()+name.slice(1) %>(id)),
            call(() => fetchPredefinedValues())
        ])) as [<%= name %>Details, predefinedValues]
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(false))
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.get<%= name.charAt(0).toUpperCase()+name.slice(1) %>DraftResponse(draft))
        yield put(
            <%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.getPredefinedValuesResponse(predefinedValues)
        )
    } catch (error) {
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* add<%= name.charAt(0).toUpperCase()+name.slice(1) %>({
    data,
    publish
}: Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction): Generator {
    yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as <%= name %>Details
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(false))
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.Add<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response(response))
    } catch (error) {
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>({
    data,
    publish
}: Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>RequestAction): Generator {
    yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as <%= name %>Details
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(false))
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.Edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>Response(response))
    } catch (error) {
        yield put(<%= name.charAt(0).toUpperCase()+name.slice(1) %>sActions.setIsFetching<%= name.charAt(0).toUpperCase()+name.slice(1) %>s(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export const <%= name.charAt(0).toUpperCase()+name.slice(1) %>sSaga = [
    takeEvery(ActionTypes.GET_<%= name.toUpperCase() %>S_REQUEST, get<%= name.charAt(0).toUpperCase()+name.slice(1) %>s),
    takeLatest(ActionTypes.GET_<%= name.toUpperCase() %>_DETAILS_REQUEST, get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Details),
    takeLatest(ActionTypes.GET_PREDEFINED_VALUES_REQUEST, getPredefinedValues),
    takeLatest(ActionTypes.GET_<%= name.toUpperCase() %>_DRAFT_REQUEST, get<%= name.charAt(0).toUpperCase()+name.slice(1) %>Draft),
    takeEvery(ActionTypes.ADD_<%= name.toUpperCase() %>_REQUEST, add<%= name.charAt(0).toUpperCase()+name.slice(1) %>),
    takeEvery(ActionTypes.EDIT_<%= name.toUpperCase() %>_REQUEST, edit<%= name.charAt(0).toUpperCase()+name.slice(1) %>)
]
