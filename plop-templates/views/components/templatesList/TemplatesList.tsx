import React, { useState, useMemo } from 'react'
import { useTable, useFlexLayout, Column } from 'react-table'
import {
    {{name}},
    {{name}}Details,
    predefinedValues,
    {{name}}Draft
} from 'store/ducks/{{Name}}s'
import { {{Name}}Details } from '../{{name}}Details/{{Name}}Details'
import { BasicTable } from 'views/Components/Common/Table/BasicTable/BasicTable'
import { FormModal } from 'views/Components/Common/Modals/FormModal'
import { createColumns } from './columns'
import { CreateNew{{Name}} } from '../{{name}}sForm/CreateNew{{Name}}'
import { Edit{{Name}} } from '../{{name}}sForm/Edit{{Name}}'
import { PrimaryButton } from 'views/Components/Common'
import { useTranslation } from 'react-i18next'

export enum ModalContent {
    CREATE_NEW = 'CREATE_NEW',
    EDIT = 'EDIT',
    DETAILS = 'DETAILS'
}

type Props = {
    data: {{name}}[]
    loadingData: boolean
    isFetchingDetails: boolean
    isErrorFetchingDetails: boolean
    {{name}}Details: {{name}}Details | null
    predefinedValues: predefinedValues | null
    {{name}}Draft: {{name}}Details | null
    get{{Name}}Details: (id: number) => void
    get{{Name}}Draft: (id: number) => void
    clean{{Name}}Details: () => void
    clean{{Name}}Draft: () => void
    getPredefinedValues: () => void
    cleanPredefinedValues: () => void
    add{{Name}}: (data: {{name}}Draft, publish: boolean) => void
    edit{{Name}}: (data: {{name}}Details, publish: boolean) => void
}

export const {{Name}}sList: React.FC<Props> = ({
    data,
    loadingData,
    isFetchingDetails,
    {{name}}Details,
    predefinedValues,
    {{name}}Draft,
    get{{Name}}Details,
    get{{Name}}Draft,
    clean{{Name}}Details,
    clean{{Name}}Draft,
    getPredefinedValues,
    cleanPredefinedValues,
    add{{Name}},
    edit{{Name}},
    isErrorFetchingDetails
}) => {
    const { t } = useTranslation()
    const [modalContent, setModalContent] = useState<ModalContent | null>(null)
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null)
    const onModalOpen = (id: number, contentType: ModalContent) => {
        setModalContent(contentType)
        setSelectedItemId(id)
    }

    const onCreateNew{{Name}}ModalOpen = () => {
        setModalContent(ModalContent.CREATE_NEW)
    }

    const onModalClose = () => {
        setModalContent(null)
        setSelectedItemId(null)
    }

    const columns = createColumns(onModalOpen) as Column<{{name}}>[]

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
                onClick={onCreateNew{{Name}}ModalOpen}
                data-testid="{{name}}-create-button"
            >
                {t('button.createNew{{Name}}')}
            </PrimaryButton>
            <FormModal open={!!modalContent}>
                <>
                    {modalContent === ModalContent.DETAILS && (
                        <{{Name}}Details
                            onClose={onModalClose}
                            id={selectedItemId!}
                            get{{Name}}Details={get{{Name}}Details}
                            {{name}}Details={{{name}}Details}
                            clean{{Name}}Details={clean{{Name}}Details}
                            isFetchingDetails={isFetchingDetails}
                            isErrorFetchingDetails={isErrorFetchingDetails}
                        />
                    )}

                    {modalContent === ModalContent.CREATE_NEW && (
                        <CreateNew{{Name}}
                            onClose={onModalClose}
                            getPredefinedValues={getPredefinedValues}
                            cleanPredefinedValues={cleanPredefinedValues}
                            add{{Name}}={add{{Name}} }
                            predefinedValues={predefinedValues}
                            isFetchingDetails={isFetchingDetails}
                        />
                    )}

                    {modalContent === ModalContent.EDIT && (
                        <Edit{{Name}}
                            onClose={onModalClose}
                            get{{Name}}Draft={get{{Name}}Draft}
                            clean{{Name}}Draft={clean{{Name}}Draft}
                            edit{{Name}}={edit{{Name}} }
                            predefinedValues={predefinedValues}
                            isFetchingDetails={isFetchingDetails}
                            {{name}}Draft={{{name}}Draft}
                            id={selectedItemId!}
                        />
                    )}
                </>
            </FormModal>
            <BasicTable {...tableProps} loading={loadingData} />
        </div>
    )
}
