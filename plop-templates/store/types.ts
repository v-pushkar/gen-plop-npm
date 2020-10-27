import { Action } from 'redux'

export enum ActionTypes {
    GET_{{NAME}}S_REQUEST = '@{{Name}}s/GET_{{NAME}}S_REQUEST',
    GET_{{NAME}}S_RESPONSE = '@{{Name}}s/GET_{{NAME}}S_RESPONSE',
    SET_IS_FETCHING = '@{{Name}}s/SET_IS_FETCHING',
    GET_{{NAME}}_DETAILS_REQUEST = '@{{Name}}s/GET_{{NAME}}_DETAILS_REQUEST',
    GET_{{NAME}}S_DETAILS_RESPONSE = '@{{Name}}s/GET_{{NAME}}S_DETAILS_RESPONSE',
    SET_IS_FETCHING_DETAILS = '@{{Name}}s/SET_IS_FETCHING_DETAILS',
    GET_PREDEFINED_VALUES_REQUEST = '@{{Name}}s/GET_PREDEFINED_VALUES_REQUEST',
    GET_PREDEFINED_VALUES_RESPONSE = '@{{Name}}s/GET_PREDEFINED_VALUES_RESPONSE',
    GET_{{NAME}}_DRAFT_REQUEST = '@{{Name}}s/GET_{{NAME}}_DRAFT_REQUEST',
    GET_{{NAME}}_DRAFT_RESPONSE = '@{{Name}}s/GET_{{NAME}}_DRAFT_RESPONSE',
    ADD_{{NAME}}_REQUEST = '@{{Name}}s/ADD_{{NAME}}_REQUEST',
    EDIT_{{NAME}}_REQUEST = '@{{Name}}s/EDIT_{{NAME}}_REQUEST',
    ADD_{{NAME}}_RESPONSE = '@{{Name}}s/ADD_{{NAME}}_RESPONSE',
    EDIT_{{NAME}}_RESPONSE = '@{{Name}}s/EDIT_{{NAME}}_RESPONSE',
    SET_IS_ERROR_FETCHING_DETAILS = '@{{Name}}s/SET_IS_ERROR_FETCHING_DETAILS'
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

export type bos{{Name}}Data = {
    physicalPlaces: string
    ppes: ppe[]
    notices: notice[]
    activities: activity[]
    activeCareActivities?: activity[]
}

export type {{name}} = {
    id: number
    productionCenterId: string
    publishDate: Date
    inUse: boolean
    lastEdition: Date
    author: string
    status: string
    name: string
}

export type {{name}}Details = {{name}} & {
    bos{{Name}}Data: bos{{Name}}Data
}

export type {{name}}Draft = {
    region: string
    area: string
    bos{{Name}}Data: bos{{Name}}Data
    inUse: boolean
}

export type predefinedValues = {
    physicalPlaces: string[]
    ppes: ppe[]
    localNotices: notice[]
    globalNotices: notice[]
    categories: category[]
}

export type {{Name}}sState = {
    readonly {{name}}sList: {{name}}[]
    readonly isFetching: boolean
    readonly {{name}}Details: {{name}}Details | null
    readonly isFetchingDetails: boolean
    readonly predefinedValues: predefinedValues | null
    readonly {{name}}Draft: {{name}}Details | null
    readonly isErrorFetchingDetails: boolean
}

export interface Get{{Name}}sResponseAction extends Action {
    {{name}}sList: {{name}}[]
}

export interface SetIsFetchingAction extends Action {
    isFetching: boolean
}

export interface SetIsErrorFetchingAction extends Action {
    isError: boolean
}

export interface Get{{Name}}DetailsRequestAction extends Action {
    id: number
}

export interface Get{{Name}}DetailsResponseAction extends Action {
    details: {{name}}Details | null
}

export interface GetPredefinedValuesResponseAction extends Action {
    values: predefinedValues | null
}

export interface Get{{Name}}DraftRequestAction extends Action {
    id: number
}

export interface Get{{Name}}DraftResponseAction extends Action {
    draft: {{name}}Details | null
}

export interface Add{{Name}}RequestAction extends Action {
    data: {{name}}Draft
    publish: boolean
}

export interface Edit{{Name}}RequestAction extends Action {
    data: {{name}}Details
    publish: boolean
}

export interface Submit{{Name}}ResponseAction extends Action {
    {{name}}: {{name}}Details
}
