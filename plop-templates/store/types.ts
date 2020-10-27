import { Action } from 'redux'

export enum ActionTypes {
    GET_TEMPLATES_REQUEST = '@Templates/GET_TEMPLATES_REQUEST',
    GET_TEMPLATES_RESPONSE = '@Templates/GET_TEMPLATES_RESPONSE',
    SET_IS_FETCHING = '@Templates/SET_IS_FETCHING',
    GET_TEMPLATE_DETAILS_REQUEST = '@Templates/GET_TEMPLATE_DETAILS_REQUEST',
    GET_TEMPLATES_DETAILS_RESPONSE = '@Templates/GET_TEMPLATES_DETAILS_RESPONSE',
    SET_IS_FETCHING_DETAILS = '@Templates/SET_IS_FETCHING_DETAILS',
    GET_PREDEFINED_VALUES_REQUEST = '@Templates/GET_PREDEFINED_VALUES_REQUEST',
    GET_PREDEFINED_VALUES_RESPONSE = '@Templates/GET_PREDEFINED_VALUES_RESPONSE',
    GET_TEMPLATE_DRAFT_REQUEST = '@Templates/GET_TEMPLATE_DRAFT_REQUEST',
    GET_TEMPLATE_DRAFT_RESPONSE = '@Templates/GET_TEMPLATE_DRAFT_RESPONSE',
    ADD_TEMPLATE_REQUEST = '@Templates/ADD_TEMPLATE_REQUEST',
    EDIT_TEMPLATE_REQUEST = '@Templates/EDIT_TEMPLATE_REQUEST',
    ADD_TEMPLATE_RESPONSE = '@Templates/ADD_TEMPLATE_RESPONSE',
    EDIT_TEMPLATE_RESPONSE = '@Templates/EDIT_TEMPLATE_RESPONSE',
    SET_IS_ERROR_FETCHING_DETAILS = '@Templates/SET_IS_ERROR_FETCHING_DETAILS'
}

type ppe = {
    id: number
    contentPath: string
}

export type notice = {
    id: number
    content: string
    title: string
    global: boolean
    mandatory: boolean
}

export type motivator = {
    id: number
    value: string
    causes: cause[]
}

export type cause = {
    id: number
    value: string
}

export type category = {
    id: number | null
    value: string
}

export type picture = {
    id?: number
    path: string
    safe: boolean
}

export type activity = {
    safeBehaviorDescription: string | null
    unsafeBehaviorDescription: string | null
    category: category
    pictures?: picture[]
    activityDescription?: string
    motivators?: motivator[]
    id?: number | null
    displayOrder?: number
}

export type bosTemplateData = {
    physicalPlaces: string
    ppes: ppe[]
    notices: notice[]
    activities: activity[]
    activeCareActivities?: activity[]
}

export type template = {
    id: number
    productionCenterId: string
    publishDate: Date
    inUse: boolean
    lastEdition: Date
    author: string
    status: string
    name: string
}

export type templateDetails = template & {
    bosTemplateData: bosTemplateData
}

export type templateDraft = {
    region: string
    area: string
    bosTemplateData: bosTemplateData
    inUse: boolean
}

export type predefinedValues = {
    physicalPlaces: string[]
    ppes: ppe[]
    localNotices: notice[]
    globalNotices: notice[]
    categories: category[]
}

export type TemplatesState = {
    readonly templatesList: template[]
    readonly isFetching: boolean
    readonly templateDetails: templateDetails | null
    readonly isFetchingDetails: boolean
    readonly predefinedValues: predefinedValues | null
    readonly templateDraft: templateDetails | null
    readonly isErrorFetchingDetails: boolean
}

export interface GetTemplatesResponseAction extends Action {
    templatesList: template[]
}

export interface SetIsFetchingAction extends Action {
    isFetching: boolean
}

export interface SetIsErrorFetchingAction extends Action {
    isError: boolean
}

export interface GetTemplateDetailsRequestAction extends Action {
    id: number
}

export interface GetTemplateDetailsResponseAction extends Action {
    details: templateDetails | null
}

export interface GetPredefinedValuesResponseAction extends Action {
    values: predefinedValues | null
}

export interface GetTemplateDraftRequestAction extends Action {
    id: number
}

export interface GetTemplateDraftResponseAction extends Action {
    draft: templateDetails | null
}

export interface AddTemplateRequestAction extends Action {
    data: templateDraft
    publish: boolean
}

export interface EditTemplateRequestAction extends Action {
    data: templateDetails
    publish: boolean
}

export interface SubmitTemplateResponseAction extends Action {
    template: templateDetails
}
