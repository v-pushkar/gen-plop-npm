import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'

import { predefinedValues, bosTemplateData, templateDraft } from 'store'
import { TemplatesForm } from './TemplatesForm'
import { useSharedStyles } from '../sharedStyles'

type Props = {
    onClose: () => void
    getPredefinedValues: () => void
    cleanPredefinedValues: () => void
    addTemplate: (data: templateDraft, publish: boolean) => void
    predefinedValues: predefinedValues | null
    isFetchingDetails: boolean
}
export const CreateNewTemplate: React.FC<Props> = ({
    onClose,
    getPredefinedValues,
    cleanPredefinedValues,
    addTemplate,
    predefinedValues,
    isFetchingDetails
}) => {
    const sharedClasses = useSharedStyles()

    useEffect(() => {
        getPredefinedValues()
        return () => {
            cleanPredefinedValues()
        }
    }, [])

    const submitTemplate = (data: bosTemplateData, publish: boolean) => {
        const draft: templateDraft = {
            region: 'testRegion',
            area: 'testArea',
            bosTemplateData: {
                ...data
            },
            inUse: false
        }
        addTemplate(draft, publish)
    }
    return (
        <div data-testid="create-new-template" style={{ height: '100%' }}>
            {predefinedValues && (
                <TemplatesForm
                    onClose={onClose}
                    submitTemplate={submitTemplate}
                    predefinedValues={predefinedValues}
                    title="Create new template"
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
