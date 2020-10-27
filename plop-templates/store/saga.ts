import {
    template,
    ActionTypes,
    templateDetails,
    predefinedValues,
    GetTemplateDraftRequestAction,
    GetTemplateDetailsRequestAction,
    AddTemplateRequestAction,
    EditTemplateRequestAction
} from './types'
import { TemplatesActions } from '.'
import { put, takeEvery, call, takeLatest, all } from 'redux-saga/effects'
import { NotificationsActions, NotificationTypes } from 'store'
import {
    fetchTemplates,
    fetchTemplate,
    fetchPredefinedValues,
    sendPublished,
    sendDraft
} from 'Services/Templates'

export function* getTemplates(): Generator {
    yield put(TemplatesActions.setIsFetchingTemplates(true))
    try {
        const response = (yield call(() => fetchTemplates())) as template[]
        yield put(TemplatesActions.setIsFetchingTemplates(false))
        yield put(TemplatesActions.getTemplatesResponse(response))
    } catch (error) {
        yield put(TemplatesActions.setIsFetchingTemplates(false))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* getTemplateDetails({
    id
}: GetTemplateDetailsRequestAction): Generator {
    yield put(TemplatesActions.setIsFetchingTemplateDetails(true))
    try {
        const response = (yield call(() =>
            fetchTemplate(id)
        )) as templateDetails
        yield put(TemplatesActions.setIsFetchingTemplateDetails(false))
        yield put(TemplatesActions.getTemplateDetailsResponse(response))
    } catch (error) {
        yield put(TemplatesActions.setIsFetchingTemplateDetails(false))
        yield put(TemplatesActions.setIsErrorFetchingTemplateDetails(true))
        yield put(
            NotificationsActions.addNotification({
                message: error.message,
                type: NotificationTypes.ERROR
            })
        )
        yield put(TemplatesActions.setIsErrorFetchingTemplateDetails(true))
    }
}

export function* getPredefinedValues(): Generator {
    yield put(TemplatesActions.setIsFetchingTemplateDetails(true))
    try {
        const response = (yield call(() =>
            fetchPredefinedValues()
        )) as predefinedValues
        yield put(TemplatesActions.setIsFetchingTemplateDetails(false))
        yield put(TemplatesActions.getPredefinedValuesResponse(response))
    } catch (error) {
        yield put(TemplatesActions.setIsFetchingTemplateDetails(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* getTemplateDraft({
    id
}: GetTemplateDraftRequestAction): Generator {
    yield put(TemplatesActions.setIsFetchingTemplateDetails(true))
    try {
        const [draft, predefinedValues] = (yield all([
            call(() => fetchTemplate(id)),
            call(() => fetchPredefinedValues())
        ])) as [templateDetails, predefinedValues]
        yield put(TemplatesActions.setIsFetchingTemplateDetails(false))
        yield put(TemplatesActions.getTemplateDraftResponse(draft))
        yield put(
            TemplatesActions.getPredefinedValuesResponse(predefinedValues)
        )
    } catch (error) {
        yield put(TemplatesActions.setIsFetchingTemplateDetails(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* addTemplate({
    data,
    publish
}: AddTemplateRequestAction): Generator {
    yield put(TemplatesActions.setIsFetchingTemplates(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as templateDetails
        yield put(TemplatesActions.setIsFetchingTemplates(false))
        yield put(TemplatesActions.AddTemplateResponse(response))
    } catch (error) {
        yield put(TemplatesActions.setIsFetchingTemplates(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export function* editTemplate({
    data,
    publish
}: EditTemplateRequestAction): Generator {
    yield put(TemplatesActions.setIsFetchingTemplates(true))
    try {
        const request = publish ? sendPublished : sendDraft
        const response = (yield call(() => request(data))) as templateDetails
        yield put(TemplatesActions.setIsFetchingTemplates(false))
        yield put(TemplatesActions.EditTemplateResponse(response))
    } catch (error) {
        yield put(TemplatesActions.setIsFetchingTemplates(false))
        yield put(
            NotificationsActions.addNotification({
                message: 'Error',
                type: NotificationTypes.ERROR
            })
        )
    }
}

export const TemplatesSaga = [
    takeEvery(ActionTypes.GET_TEMPLATES_REQUEST, getTemplates),
    takeLatest(ActionTypes.GET_TEMPLATE_DETAILS_REQUEST, getTemplateDetails),
    takeLatest(ActionTypes.GET_PREDEFINED_VALUES_REQUEST, getPredefinedValues),
    takeLatest(ActionTypes.GET_TEMPLATE_DRAFT_REQUEST, getTemplateDraft),
    takeEvery(ActionTypes.ADD_TEMPLATE_REQUEST, addTemplate),
    takeEvery(ActionTypes.EDIT_TEMPLATE_REQUEST, editTemplate)
]
