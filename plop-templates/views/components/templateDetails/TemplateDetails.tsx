import React, { useEffect } from 'react'
import { CircularProgress, Divider } from '@material-ui/core'
import { templateDetails, activity } from 'store/ducks/Templates'

import { ActivityItem } from './ActivityItem'
import { useStyles } from './styles'
import { useSharedStyles } from '../sharedStyles'
import { PrimaryButton } from 'views/Components/Common'

type Props = {
    onClose: () => void
    getTemplateDetails: (id: number) => void
    cleanTemplateDetails: () => void
    id: number
    isFetchingDetails: boolean
    isErrorFetchingDetails: boolean
    templateDetails: templateDetails | null
}

export const TemplateDetails: React.FC<Props> = ({
    onClose,
    getTemplateDetails,
    cleanTemplateDetails,
    id,
    isFetchingDetails,
    templateDetails,
    isErrorFetchingDetails
}) => {
    const classes = useStyles()
    const sharedClasses = useSharedStyles()

    useEffect(() => {
        getTemplateDetails(id)
        return () => {
            cleanTemplateDetails()
        }
    }, [])

    useEffect(() => {
        if (isErrorFetchingDetails) onClose()
    }, [isErrorFetchingDetails])

    if (templateDetails) {
        const { bosTemplateData, author, name } = templateDetails
        const { physicalPlaces } = templateDetails.bosTemplateData

        const detailsInfo = [
            {
                key: 'Line/Machine/Area:',
                value: physicalPlaces
            },
            {
                key: 'Author:',
                value: author
            },
            {
                key: "Required PPE's:",
                value:
                    bosTemplateData.ppes &&
                    bosTemplateData.ppes
                        .map((ppe) => ppe.contentPath)
                        .join(', ')
            },
            {
                key: 'Notices:',
                value:
                    bosTemplateData.notices &&
                    bosTemplateData.notices
                        .map((notice) => notice.title)
                        .join(', ')
            },
            {
                key: 'Activities:',
                value:
                    bosTemplateData.activities &&
                    bosTemplateData.activities
                        .map((activity) => activity.category?.value)
                        .join(', ')
            },
            {
                key: 'Physical places',
                value:
                    bosTemplateData.physicalPlaces &&
                    bosTemplateData.physicalPlaces
            }
        ]

        return (
            <div
                className={sharedClasses.wrapper}
                data-testid="template-details"
            >
                <div className={sharedClasses.header}>
                    <span>
                        <div className={sharedClasses.ellipsisText}>
                            {`${name}`.toUpperCase()}
                        </div>
                        <i
                            className={
                                classes.ellipsisVIcon +
                                ' ' +
                                'far fa-ellipsis-v'
                            }
                        />
                    </span>
                    <div
                        onClick={onClose}
                        role="button"
                        tabIndex={0}
                        data-testid="details-close-icon"
                    >
                        <i
                            className={
                                sharedClasses.closeIcon + ' ' + 'far fa-times'
                            }
                        ></i>
                    </div>
                </div>
                <Divider />
                <div className={sharedClasses.contentWrapper}>
                    <div className={sharedClasses.informationsWrapper}></div>
                    <div className={sharedClasses.informationsWrapper}>
                        {detailsInfo.map(({ key, value }) => (
                            <div className={classes.textRow} key={key}>
                                <span className={classes.textTitle}>{key}</span>
                                <span className={classes.textValue}>
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className={sharedClasses.shadedWrapper}>
                        {bosTemplateData?.activities.map((item: activity) => (
                            <ActivityItem key={item.id} activity={item} />
                        ))}
                    </div>
                </div>
                <div className={sharedClasses.bottomPanel}>
                    <PrimaryButton
                        variant="contained"
                        onClick={onClose}
                        data-testid="details-close"
                    >
                        Close
                    </PrimaryButton>
                </div>
            </div>
        )
    } else {
        return (
            <>
                {isFetchingDetails && (
                    <div
                        className={sharedClasses.progress}
                        data-testid="loading-details"
                    >
                        <CircularProgress />
                    </div>
                )}
            </>
        )
    }
}
