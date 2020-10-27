import React, { useEffect } from 'react'
import { CircularProgress, Divider } from '@material-ui/core'
import { rtyryryDetails, activity } from 'store/ducks/Rtyryrys'

import { ActivityItem } from './ActivityItem'
import { useStyles } from './styles'
import { useSharedStyles } from '../sharedStyles'
import { PrimaryButton } from 'views/Components/Common'

type Props = {
    onClose: () => void
    getRtyryryDetails: (id: number) => void
    cleanRtyryryDetails: () => void
    id: number
    isFetchingDetails: boolean
    isErrorFetchingDetails: boolean
    rtyryryDetails: rtyryryDetails | null
}

export const RtyryryDetails: React.FC<Props> = ({
    onClose,
    getRtyryryDetails,
    cleanRtyryryDetails,
    id,
    isFetchingDetails,
    rtyryryDetails,
    isErrorFetchingDetails
}) => {
    const classes = useStyles()
    const sharedClasses = useSharedStyles()

    useEffect(() => {
        getRtyryryDetails(id)
        return () => {
            cleanRtyryryDetails()
        }
    }, [])

    useEffect(() => {
        if (isErrorFetchingDetails) onClose()
    }, [isErrorFetchingDetails])

    if (rtyryryDetails) {
        const { bosRtyryryData, author, name } = rtyryryDetails
        const { physicalPlaces } = rtyryryDetails.bosRtyryryData

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
                    bosRtyryryData.ppes &&
                    bosRtyryryData.ppes
                        .map((ppe) => ppe.contentPath)
                        .join(', ')
            },
            {
                key: 'Notices:',
                value:
                    bosRtyryryData.notices &&
                    bosRtyryryData.notices
                        .map((notice) => notice.title)
                        .join(', ')
            },
            {
                key: 'Activities:',
                value:
                    bosRtyryryData.activities &&
                    bosRtyryryData.activities
                        .map((activity) => activity.category?.value)
                        .join(', ')
            },
            {
                key: 'Physical places',
                value:
                    bosRtyryryData.physicalPlaces &&
                    bosRtyryryData.physicalPlaces
            }
        ]

        return (
            <div
                className={sharedClasses.wrapper}
                data-testid="rtyryry-details"
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
                        {bosRtyryryData?.activities.map((item: activity) => (
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
