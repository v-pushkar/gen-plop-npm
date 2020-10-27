import { Action } from 'redux'

export enum ActionTypes {
    GET_RTRYTRYTERS_REQUEST = '@Rtrytryters/GET_RTRYTRYTERS_REQUEST',
    GET_RTRYTRYTERS_RESPONSE = '@Rtrytryters/GET_RTRYTRYTERS_RESPONSE',
    SET_IS_FETCHING = '@Rtrytryters/SET_IS_FETCHING',
    GET_RTRYTRYTER_DETAILS_REQUEST = '@Rtrytryters/GET_RTRYTRYTER_DETAILS_REQUEST',
    GET_RTRYTRYTERS_DETAILS_RESPONSE = '@Rtrytryters/GET_RTRYTRYTERS_DETAILS_RESPONSE',
    SET_IS_FETCHING_DETAILS = '@Rtrytryters/SET_IS_FETCHING_DETAILS',
    GET_PREDEFINED_VALUES_REQUEST = '@Rtrytryters/GET_PREDEFINED_VALUES_REQUEST',
    GET_PREDEFINED_VALUES_RESPONSE = '@Rtrytryters/GET_PREDEFINED_VALUES_RESPONSE',
    GET_RTRYTRYTER_DRAFT_REQUEST = '@Rtrytryters/GET_RTRYTRYTER_DRAFT_REQUEST',
    GET_RTRYTRYTER_DRAFT_RESPONSE = '@Rtrytryters/GET_RTRYTRYTER_DRAFT_RESPONSE',
    ADD_RTRYTRYTER_REQUEST = '@Rtrytryters/ADD_RTRYTRYTER_REQUEST',
    EDIT_RTRYTRYTER_REQUEST = '@Rtrytryters/EDIT_RTRYTRYTER_REQUEST',
    ADD_RTRYTRYTER_RESPONSE = '@Rtrytryters/ADD_RTRYTRYTER_RESPONSE',
    EDIT_RTRYTRYTER_RESPONSE = '@Rtrytryters/EDIT_RTRYTRYTER_RESPONSE',
    SET_IS_ERROR_FETCHING_DETAILS = '@Rtrytryters/SET_IS_ERROR_FETCHING_DETAILS'
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

export type bosRtrytryterData = {
    physicalPlaces: string
    ppes: ppe[]
    notices: notice[]
    activities: activity[]
    activeCareActivities?: activity[]
}

export type rtrytryter = {
    id: number
    productionCenterId: string
    publishDate: Date
    inUse: boolean
    lastEdition: Date
    author: string
    status: string
    name: string
}

export type rtrytryterDetails = rtrytryter & {
    bosRtrytryterData: bosRtrytryterData
}

export type rtrytryterDraft = {
    region: string
    area: string
    bosRtrytryterData: bosRtrytryterData
    inUse: boolean
}

export type predefinedValues = {
    physicalPlaces: string[]
    ppes: ppe[]
    localNotices: notice[]
    globalNotices: notice[]
    categories: category[]
}

export type RtrytrytersState = {
    readonly rtrytrytersList: rtrytryter[]
    readonly isFetching: boolean
    readonly rtrytryterDetails: rtrytryterDetails | null
    readonly isFetchingDetails: boolean
    readonly predefinedValues: predefinedValues | null
    readonly rtrytryterDraft: rtrytryterDetails | null
    readonly isErrorFetchingDetails: boolean
}

export interface GetRtrytrytersResponseAction extends Action {
    rtrytrytersList: rtrytryter[]
}

export interface SetIsFetchingAction extends Action {
    isFetching: boolean
}

export interface SetIsErrorFetchingAction extends Action {
    isError: boolean
}

export interface GetRtrytryterDetailsRequestAction extends Action {
    id: number
}

export interface GetRtrytryterDetailsResponseAction extends Action {
    details: rtrytryterDetails | null
}

export interface GetPredefinedValuesResponseAction extends Action {
    values: predefinedValues | null
}

export interface GetRtrytryterDraftRequestAction extends Action {
    id: number
}

export interface GetRtrytryterDraftResponseAction extends Action {
    draft: rtrytryterDetails | null
}

export interface AddRtrytryterRequestAction extends Action {
    data: rtrytryterDraft
    publish: boolean
}

export interface EditRtrytryterRequestAction extends Action {
    data: rtrytryterDetails
    publish: boolean
}

export interface SubmitRtrytryterResponseAction extends Action {
    rtrytryter: rtrytryterDetails
}
