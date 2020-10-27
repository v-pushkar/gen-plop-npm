import {
    rtrytryter,
    ActionTypes,
    rtrytryterDetails,
    predefinedValues,
    GetRtrytryterDraftRequestAction,
    GetRtrytryterDetailsRequestAction,
    AddRtrytryterRequestAction,
    EditRtrytryterRequestAction
} from './types'
import { RtrytrytersActions } from '.'
import { put, takeEvery, call, takeLatest, all } from 'redux-saga/effects'
import { NotificationsActions, NotificationTypes } from 'store'
import {
    fetchRtrytryters,
    fetchRtrytryter,
    fetchPredefinedValues,
    sendPublished,
    sendDraft
} from 'Services/Rtrytryters'

export function* getRtrytryters(): Generator {
    yield put(RtrytrytersActions.setIsFetchingRtrytryters(true))
    try {
        const response = (yield call(() => fetchRtrytryters())) as rtrytryter[]
        yield put(RtrytrytersActions.setIsFetchingRtrytryters(false))
        yield put(RtrytrytersActions.getRtrytrytersResponse(response))
    } catch (error) {
        yield put(RtrytrytersActions.setIsFetchingRtrytryters(false))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* getRtrytryterDetails({
    id
}: GetRtrytryterDetailsRequestAction): Generator {
    yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(true))
    try {
        const response = (yield call(() =>
            fetchRtrytryter(id)
        )) as rtrytryterDetails
        yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(false))
        yield put(RtrytrytersActions.getRtrytryterDetailsResponse(response))
    } catch (error) {
        yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(false))
        yield put(RtrytrytersActions.setIsErrorFetchingRtrytryterDetails(true))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
        yield put(RtrytrytersActions.setIsErrorFetchingRtrytryterDetails(true))
    }
}

export function* getPredefinedValues(): Generator {
    yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(true))
    try {
        const response = (yield call(() =>
            fetchPredefinedValues()
        )) as predefinedValues
        yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(false))
        yield put(RtrytrytersActions.getPredefinedValuesResponse(response))
    } catch (error) {
        yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* getRtrytryterDraft({
    id
}: GetRtrytryterDraftRequestAction): Generator {
    yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(true))
    try {
        const [draft, predefinedValues] = (yield all([
            call(() => fetchRtrytryter(id)),
            call(() => fetchPredefinedValues())
        ])) as [rtrytryterDetails, predefinedValues]
        yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(false))
        yield put(RtrytrytersActions.getRtrytryterDraftResponse(draft))
        yield put(
            RtrytrytersActions.getPredefinedValuesResponse(predefinedValues)
        )
    } catch (error) {
        yield put(RtrytrytersActions.setIsFetchingRtrytryterDetails(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* addRtrytryter({
    data,
    publish
}: AddRtrytryterRequestAction): Generator {
    yield put(RtrytrytersActions.setIsFetchingRtrytryters(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as rtrytryterDetails
        yield put(RtrytrytersActions.setIsFetchingRtrytryters(false))
        yield put(RtrytrytersActions.AddRtrytryterResponse(response))
    } catch (error) {
        yield put(RtrytrytersActions.setIsFetchingRtrytryters(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* editRtrytryter({
    data,
    publish
}: EditRtrytryterRequestAction): Generator {
    yield put(RtrytrytersActions.setIsFetchingRtrytryters(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as rtrytryterDetails
        yield put(RtrytrytersActions.setIsFetchingRtrytryters(false))
        yield put(RtrytrytersActions.EditRtrytryterResponse(response))
    } catch (error) {
        yield put(RtrytrytersActions.setIsFetchingRtrytryters(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export const RtrytrytersSaga = [
    takeEvery(ActionTypes.GET_RTRYTRYTERS_REQUEST, getRtrytryters),
    takeLatest(ActionTypes.GET_RTRYTRYTER_DETAILS_REQUEST, getRtrytryterDetails),
    takeLatest(ActionTypes.GET_PREDEFINED_VALUES_REQUEST, getPredefinedValues),
    takeLatest(ActionTypes.GET_RTRYTRYTER_DRAFT_REQUEST, getRtrytryterDraft),
    takeEvery(ActionTypes.ADD_RTRYTRYTER_REQUEST, addRtrytryter),
    takeEvery(ActionTypes.EDIT_RTRYTRYTER_REQUEST, editRtrytryter)
]
