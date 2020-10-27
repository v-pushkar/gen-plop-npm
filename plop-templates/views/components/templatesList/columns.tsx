import React from 'react'
import moment from 'moment'
import { useTranslation as translation } from 'react-i18next'

import { getColumnsStyles } from './styles'
import { ModalContent } from './TemplatesList'

export const createColumns = (onModalOpen: Function) => {
    const classes = getColumnsStyles()
    const { t } = translation()
    const columns = [
        {
            Header: () => <div>{t('table.templateName')}</div>,
            className: classes.header,
            accessor: 'region',
            Cell: ({ row }: any) => (
                <div
                    role="button"
                    tabIndex={0}
                    style={{ cursor: 'pointer', outline: 'none' }}
                    className={classes.cell}
                    onClick={() =>
                        onModalOpen(row.original.id, ModalContent.DETAILS)
                    }
                >
                    {row.original.name}
                </div>
            )
        },
        {
            Header: () => <div>{t('table.published')}</div>,
            className: classes.header,
            accessor: 'published_date',
            Cell: ({ row }: any) => (
                <div className={classes.cell}>
                    {row.original.publishDate
                        ? moment(row.original.publishDate).format('DD.MM.YYYY')
                        : '-'}
                </div>
            )
        },
        // {
        //     Header: () => <div>{t('table.status')}</div>,
        //     className: classes.header,
        //     accessor: 'status',
        //     Cell: ({ row }: any) => (
        //         <div className={classes.cell}>{row.original.status}</div>
        //     )
        // },
        // {
        //     Header: () => <div>{t('table.inUse')}</div>,
        //     className: classes.header,
        //     accessor: 'in_use',
        //     Cell: ({ row }: any) => (
        //         <div className={classes.cell}>
        //             {row.original.inUse ? 'Yes' : 'No'}
        //         </div>
        //     )
        // },
        {
            Header: () => <div>{t('table.lastEdition')}</div>,
            className: classes.header,
            accessor: 'last_edition',
            Cell: ({ row }: any) => (
                <div className={classes.cell}>
                    {moment(row.original.lastEdition).format('DD.MM.YYYY')}
                </div>
            )
        },
        {
            Header: () => <div>{t('table.author')}</div>,
            className: classes.header,
            accessor: 'author',
            Cell: ({ row }: any) => (
                <div className={classes.cell}>{row.original.author}</div>
            )
        },
        {
            Header: () => <div></div>,
            className: classes.header,
            accessor: 'more',
            width: '2rem',
            Cell: ({ row }: any) => (
                <div
                    className={classes.cell}
                    style={{ outline: 'none' }}
                    role="button"
                    tabIndex={0}
                    onClick={
                        !row.original.publishDate
                            ? () =>
                                  onModalOpen(
                                      row.original.id,
                                      ModalContent.EDIT
                                  )
                            : undefined
                    }
                >
                    <i
                        className={
                            classes.ellipsisVIcon + ' ' + 'far fa-ellipsis-v'
                        }
                    />
                </div>
            )
        }
    ]

    return columns
}
