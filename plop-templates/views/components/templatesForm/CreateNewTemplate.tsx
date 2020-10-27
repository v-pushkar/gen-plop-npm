import React, { useEffect } from 'react'
import { CircularProgress } from '@material-ui/core'

import { predefinedValues, bos{{Name}}Data, {{name}}Draft } from 'store'
import { {{Name}}sForm } from './{{Name}}sForm'
import { useSharedStyles } from '../sharedStyles'

type Props = {
    onClose: () => void
    getPredefinedValues: () => void
    cleanPredefinedValues: () => void
    add{{Name}}: (data: {{name}}Draft, publish: boolean) => void
    predefinedValues: predefinedValues | null
    isFetchingDetails: boolean
}
export const CreateNew{{Name}}: React.FC<Props> = ({
    onClose,
    getPredefinedValues,
    cleanPredefinedValues,
    add{{Name}},
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

    const submit{{Name}} = (data: bos{{Name}}Data, publish: boolean) => {
        const draft: {{name}}Draft = {
            region: 'testRegion',
            area: 'testArea',
            bos{{Name}}Data: {
                ...data
            },
            inUse: false
        }
        add{{Name}}(draft, publish)
    }
    return (
        <div data-testid="create-new-{{name}}" style={ { height: '100%' }}>
            {predefinedValues && (
                <{{Name}}sForm
                    onClose={onClose}
                    submit{{Name}}={submit{{Name}} }
                    predefinedValues={predefinedValues}
                    title="Create new {{name}}"
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
