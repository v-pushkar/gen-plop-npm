import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'
import { useSharedStyles } from '../sharedStyles'
import { predefinedValues, {{name}}Details, bos{{Name}}Data } from 'store'
import { {{Name}}sForm } from './{{Name}}sForm'

type Props = {
    onClose: () => void
    get{{Name}}Draft: (id: number) => void
    clean{{Name}}Draft: () => void
    edit{{Name}}: (data: {{name}}Details, publish: boolean) => void
    predefinedValues: predefinedValues | null
    isFetchingDetails: boolean
    id: number
    {{name}}Draft: {{name}}Details | null
}

export const Edit{{Name}}: React.FC<Props> = ({
    onClose,
    get{{Name}}Draft,
    clean{{Name}}Draft,
    edit{{Name}},
    predefinedValues,
    isFetchingDetails,
    id,
    {{name}}Draft
}) => {
    const sharedClasses = useSharedStyles()

    useEffect(() => {
        get{{Name}}Draft(id)
        return () => {
            clean{{Name}}Draft()
        }
    }, [])

    const update{{Name}}Data = (data: bos{{Name}}Data, publish: boolean) => {
        const draft: {{name}}Details = {
            ...{{name}}Draft!,
            bos{{Name}}Data: {
                ...data
            }
        }
        edit{{Name}}(draft, publish)
    }

    const initialValues: bos{{Name}}Data = {
        physicalPlaces: {{name}}Draft?.bos{{Name}}Data.physicalPlaces || '',
        ppes: {{name}}Draft?.bos{{Name}}Data.ppes || [],
        notices: {{name}}Draft?.bos{{Name}}Data.notices || [],
        activities: {{name}}Draft?.bos{{Name}}Data.activities || []
    }

    return (
        <div data-testid="edit-{{name}}" style={ { height: '100%' }}>
            {predefinedValues && {{name}}Draft && (
                <{{Name}}sForm
                    onClose={onClose}
                    submit{{Name}}={update{{Name}}Data}
                    predefinedValues={predefinedValues}
                    title="Edit {{name}}"
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
