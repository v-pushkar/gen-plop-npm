import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useSharedStyles } from '../sharedStyles'
import { predefinedValues, templateDetails, bosTemplateData } from 'store'
import { TemplatesForm } from './TemplatesForm'

type Props = {
    onClose: () => void
    getTemplateDraft: (id: number) => void
    cleanTemplateDraft: () => void
    editTemplate: (data: templateDetails, publish: boolean) => void
    predefinedValues: predefinedValues | null
    isFetchingDetails: boolean
    id: number
    templateDraft: templateDetails | null
}

export const EditTemplate: React.FC<Props> = ({
    onClose,
    getTemplateDraft,
    cleanTemplateDraft,
    editTemplate,
    predefinedValues,
    isFetchingDetails,
    id,
    templateDraft
}) => {
    const sharedClasses = useSharedStyles()

    useEffect(() => {
        getTemplateDraft(id)
        return () => {
            cleanTemplateDraft()
        }
    }, [])

    const updateTemplateData = (data: bosTemplateData, publish: boolean) => {
        const draft: templateDetails = {
            ...templateDraft!,
            bosTemplateData: {
                ...data
            }
        }
        editTemplate(draft, publish)
    }

    const initialValues: bosTemplateData = {
        physicalPlaces: templateDraft?.bosTemplateData.physicalPlaces || '',
        ppes: templateDraft?.bosTemplateData.ppes || [],
        notices: templateDraft?.bosTemplateData.notices || [],
        activities: templateDraft?.bosTemplateData.activities || []
    }

    return (
        <div data-testid="edit-template" style={{ height: '100%' }}>
            {predefinedValues && templateDraft && (
                <TemplatesForm
                    onClose={onClose}
                    submitTemplate={updateTemplateData}
                    predefinedValues={predefinedValues}
                    title="Edit template"
                    initialValuesPassed={initialValues}
                />
            )}
            {isFetchingDetails && (
                <div
                    className={sharedClasses.progress}
                    data-testid="loading-details"
                >
                    <CircularProgress />
                </div>
            )}
        </div>
    )
}
