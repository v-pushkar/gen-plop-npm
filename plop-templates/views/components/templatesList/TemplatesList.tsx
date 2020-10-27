import React, { useState, useMemo } from 'react'
import { useTable, useFlexLayout, Column } from 'react-table'
import {
    template,
    templateDetails,
    predefinedValues,
    templateDraft
} from 'store/ducks/Templates'
import { TemplateDetails } from '../templateDetails/TemplateDetails'
import { BasicTable } from 'views/Components/Common/Table/BasicTable/BasicTable'
import { FormModal } from 'views/Components/Common/Modals/FormModal'
import { createColumns } from './columns'
import { CreateNewTemplate } from '../templatesForm/CreateNewTemplate'
import { EditTemplate } from '../templatesForm/EditTemplate'
import { PrimaryButton } from 'views/Components/Common'
import { useTranslation } from 'react-i18next'

export enum ModalContent {
    CREATE_NEW = 'CREATE_NEW',
    EDIT = 'EDIT',
    DETAILS = 'DETAILS'
}

type Props = {
    data: template[]
    loadingData: boolean
    isFetchingDetails: boolean
    isErrorFetchingDetails: boolean
    templateDetails: templateDetails | null
    predefinedValues: predefinedValues | null
    templateDraft: templateDetails | null
    getTemplateDetails: (id: number) => void
    getTemplateDraft: (id: number) => void
    cleanTemplateDetails: () => void
    cleanTemplateDraft: () => void
    getPredefinedValues: () => void
    cleanPredefinedValues: () => void
    addTemplate: (data: templateDraft, publish: boolean) => void
    editTemplate: (data: templateDetails, publish: boolean) => void
}

export const TemplatesList: React.FC<Props> = ({
    data,
    loadingData,
    isFetchingDetails,
    templateDetails,
    predefinedValues,
    templateDraft,
    getTemplateDetails,
    getTemplateDraft,
    cleanTemplateDetails,
    cleanTemplateDraft,
    getPredefinedValues,
    cleanPredefinedValues,
    addTemplate,
    editTemplate,
    isErrorFetchingDetails
}) => {
    const { t } = useTranslation()
    const [modalContent, setModalContent] = useState<ModalContent | null>(null)
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
    const onModalOpen = (id: number, contentType: ModalContent) => {
        setModalContent(contentType)
        setSelectedItemId(id)
    }

    const onCreateNewTemplateModalOpen = () => {
        setModalContent(ModalContent.CREATE_NEW)
    }

    const onModalClose = () => {
        setModalContent(null)
        setSelectedItemId(null)
    }

    const columns = createColumns(onModalOpen) as Column<template>[]

    const tableProps = useTable(
        {
            columns: useMemo(() => columns, [data]),
            data: data || []
        },
        useFlexLayout
    )

    return (
        <div>
            <PrimaryButton
                variant="contained"
                onClick={onCreateNewTemplateModalOpen}
                data-testid="template-create-button"
            >
                {t('button.createNewTemplate')}
            </PrimaryButton>
            <FormModal open={!!modalContent}>
                <>
                    {modalContent === ModalContent.DETAILS && (
                        <TemplateDetails
                            onClose={onModalClose}
                            id={selectedItemId!}
                            getTemplateDetails={getTemplateDetails}
                            templateDetails={templateDetails}
                            cleanTemplateDetails={cleanTemplateDetails}
                            isFetchingDetails={isFetchingDetails}
                            isErrorFetchingDetails={isErrorFetchingDetails}
                        />
                    )}

                    {modalContent === ModalContent.CREATE_NEW && (
                        <CreateNewTemplate
                            onClose={onModalClose}
                            getPredefinedValues={getPredefinedValues}
                            cleanPredefinedValues={cleanPredefinedValues}
                            addTemplate={addTemplate}
                            predefinedValues={predefinedValues}
                            isFetchingDetails={isFetchingDetails}
                        />
                    )}

                    {modalContent === ModalContent.EDIT && (
                        <EditTemplate
                            onClose={onModalClose}
                            getTemplateDraft={getTemplateDraft}
                            cleanTemplateDraft={cleanTemplateDraft}
                            editTemplate={editTemplate}
                            predefinedValues={predefinedValues}
                            isFetchingDetails={isFetchingDetails}
                            templateDraft={templateDraft}
                            id={selectedItemId!}
                        />
                    )}
                </>
            </FormModal>
            <BasicTable {...tableProps} loading={loadingData} />
        </div>
    )
}
