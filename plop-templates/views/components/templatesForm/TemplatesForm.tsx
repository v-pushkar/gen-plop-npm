import React, { useState } from 'react'
import {
    Divider,
    Select,
    MenuItem,
    OutlinedInput,
    Button
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Formik, Form, FormikProps } from 'formik'
import clsx from 'clsx'
import * as Yup from 'yup'

import { predefinedValues, bosTemplateData, category } from 'store'
import { uploadFile } from 'Services/File/fetch'
import { getinitialValues, createTemplateData } from './utils'
import {
    BasicInput,
    BasicFormikFileInput,
    ColoredButton,
    PrimaryButton
} from 'views/Components/Common'

import { colors } from 'styles'
import { useSharedStyles } from '../sharedStyles'
import { useStyles } from './styles'

const YupSchema = Yup.object().shape({
    department: Yup.string().required('Required'),
    ppes: Yup.array().required('Required'),
    globalNotices: Yup.array().required('Required'),
    localNotices: Yup.array().required('Required'),
    activities: Yup.array().of(
        Yup.object().shape({
            id: Yup.string().required('Required'),
            generalDesc: Yup.string().required('Required'),
            descGood: Yup.string().required('Required'),
            descBad: Yup.string().required('Required'),
            pictureGood: Yup.string().required('Required'),
            pictureBad: Yup.string().required('Required')
        })
    )
})

type formActivity = {
    id?: string
    generalDesc?: string
    descGood?: string
    descBad?: string
    pictureGood?: string
    pictureBad?: string
}

export type formValues = {
    publish?: boolean | null
    department: string
    ppes: number[]
    globalNotices: number[]
    localNotices: number[]
    newLocalNotices?: string[]
    activities: formActivity[]
}

type Props = {
    onClose: () => void
    submitTemplate: (data: bosTemplateData, publish: boolean) => void
    predefinedValues: predefinedValues
    title: string
    initialValuesPassed?: bosTemplateData
}

export const TemplatesForm: React.FC<Props> = ({
    onClose,
    submitTemplate,
    predefinedValues,
    title,
    initialValuesPassed
}) => {
    const { t } = useTranslation()
    const sharedClasses = useSharedStyles()
    const classes = useStyles()

    const [localNoticeForm, setLocalNoticeForm] = useState<boolean>(false)

    const {
        physicalPlaces,
        ppes,
        localNotices,
        globalNotices,
        categories
    } = predefinedValues

    const toggleLocalNoticeForm = () => setLocalNoticeForm(!localNoticeForm)

    const onNewLocalNoticeKeyDown = (
        event: React.KeyboardEvent,
        formik: FormikProps<formValues>
    ) => {
        if (event.keyCode === 13) {
            event.preventDefault()
            formik.setFieldValue('newLocalNotices', [
                ...(formik.values.newLocalNotices || []),
                (event.target as HTMLInputElement).value
            ])
        }
    }

    const onSubmit = (values: formValues) => {
        submitTemplate(
            createTemplateData(values, predefinedValues),
            values.publish!
        )
        onClose()
    }

    const createError = (
        formik: FormikProps<formValues>,
        fieldName: keyof formValues
    ): JSX.Element | null => {
        return formik.errors[fieldName] && formik.touched[fieldName] ? (
            <span className={classes.error}>{formik.errors[fieldName]}</span>
        ) : null
    }

    const createActivityError = (
        formik: FormikProps<formValues>,
        fieldName: keyof formActivity,
        index: number
    ): JSX.Element | null => {
        return formik.errors.activities &&
            formik.errors.activities[index] &&
            (formik.errors.activities[index] as formActivity)[fieldName] &&
            formik.touched.activities &&
            formik.touched.activities[index] &&
            formik.touched.activities[index][fieldName] ? (
            <span className={classes.error}>
                {(formik.errors.activities[index] as formActivity)[fieldName]}
            </span>
        ) : null
    }

    return (
        <div className={sharedClasses.wrapper} data-testid="templates-form">
            <div className={sharedClasses.header}>
                <span>
                    <div className={sharedClasses.ellipsisText}>{title}</div>
                </span>
                <div
                    onClick={onClose}
                    role="button"
                    tabIndex={0}
                    data-testid="templates-form-close-icon"
                >
                    <i
                        className={
                            sharedClasses.closeIcon + ' ' + 'far fa-times'
                        }
                    ></i>
                </div>
            </div>
            <Divider />
            <Formik
                initialValues={getinitialValues(initialValuesPassed)}
                validationSchema={YupSchema}
                onSubmit={onSubmit}
            >
                {(formik: FormikProps<formValues>) => (
                    <Form className={classes.form}>
                        <div className={classes.contentWrapper}>
                            <div className={sharedClasses.informationsWrapper}>
                                <div>
                                    <p className={classes.title}>
                                        <span className={classes.titleText}>
                                            {t('form.departments')}
                                        </span>
                                        {createError(formik, 'department')}
                                    </p>
                                    <Select
                                        input={<BasicInput />}
                                        {...formik.getFieldProps('department')}
                                        name="department"
                                        placeholder="Select(mandatory)"
                                        variant="outlined"
                                        fullWidth
                                        className={classes.marginBottom}
                                    >
                                        {[...new Set(physicalPlaces)].map(
                                            (item) => (
                                                <MenuItem
                                                    key={item}
                                                    value={item}
                                                >
                                                    {item}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </div>
                                <div>
                                    <p className={classes.title}>
                                        <span className={classes.titleText}>
                                            {t('form.requiredPpes')}
                                        </span>
                                        {createError(formik, 'ppes')}
                                    </p>
                                    <Select
                                        input={<BasicInput />}
                                        multiple
                                        {...formik.getFieldProps('ppes')}
                                        name="ppes"
                                        placeholder="Select(optional)"
                                        variant="outlined"
                                        fullWidth
                                        className={classes.marginBottom}
                                    >
                                        {ppes.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.contentPath}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                                <div>
                                    <p className={classes.title}>
                                        <span className={classes.titleText}>
                                            {t('form.globalNotices')}
                                        </span>
                                        {createError(formik, 'globalNotices')}
                                    </p>
                                    <Select
                                        input={<BasicInput />}
                                        multiple
                                        {...formik.getFieldProps(
                                            'globalNotices'
                                        )}
                                        name="globalNotices"
                                        placeholder="Select(optional)"
                                        variant="outlined"
                                        fullWidth
                                        className={classes.marginBottom}
                                    >
                                        {globalNotices.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                                <div>
                                    <p className={classes.title}>
                                        <span className={classes.titleText}>
                                            {t('form.localNotices')}
                                        </span>
                                        {createError(formik, 'localNotices')}
                                    </p>
                                    <Select
                                        input={<BasicInput />}
                                        multiple
                                        {...formik.getFieldProps(
                                            'localNotices'
                                        )}
                                        name="localNotices"
                                        placeholder="Select(optional)"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        {localNotices.map((item) => (
                                            <MenuItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.title}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                            <div
                                className={clsx([
                                    sharedClasses.shadedWrapper,
                                    sharedClasses.marginedWrapper
                                ])}
                            >
                                {formik.values.newLocalNotices?.map((item) => (
                                    <div key={item}>{item}</div>
                                ))}
                                {localNoticeForm && (
                                    <div>
                                        <p className={classes.titleText}>
                                            {t('form.notice')}
                                        </p>
                                        <OutlinedInput
                                            classes={{ input: classes.input }}
                                            fullWidth
                                            placeholder="Type in"
                                            onKeyDown={(e) =>
                                                onNewLocalNoticeKeyDown(
                                                    e,
                                                    formik
                                                )
                                            }
                                        />
                                    </div>
                                )}
                                <Button
                                    color="primary"
                                    type="button"
                                    onClick={toggleLocalNoticeForm}
                                >
                                    + {t('form.addLocalNotice')}
                                </Button>
                            </div>
                            <div className={sharedClasses.shadedWrapper}>
                                <p
                                    className={clsx([
                                        classes.titleText,
                                        classes.marginBottom
                                    ])}
                                >
                                    {t('form.observations')}
                                </p>
                                {[0, 1, 2].map((index: number) => (
                                    <div key={index}>
                                        <p className={classes.title}>
                                            <span className={classes.titleText}>
                                                {t('form.activity')} {index + 1}
                                            </span>
                                            {createActivityError(
                                                formik,
                                                'id',
                                                index
                                            )}
                                        </p>
                                        <Select
                                            input={<BasicInput />}
                                            {...formik.getFieldProps(
                                                `activities[${index}].id`
                                            )}
                                            name={`activities[${index}].id`}
                                            placeholder="Select(mandatory)"
                                            variant="outlined"
                                            fullWidth
                                            className={classes.marginBottom}
                                        >
                                            {categories
                                                .filter(
                                                    (el: category) => el.value
                                                )
                                                .map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id!}
                                                    >
                                                        {item.value}
                                                    </MenuItem>
                                                ))}
                                        </Select>
                                        <p className={classes.title}>
                                            <span className={classes.titleText}>
                                                {t('form.generalDesc')}
                                            </span>
                                            {createActivityError(
                                                formik,
                                                'generalDesc',
                                                index
                                            )}
                                        </p>
                                        <OutlinedInput
                                            classes={{ input: classes.input }}
                                            fullWidth
                                            placeholder="Type in"
                                            {...formik.getFieldProps(
                                                `activities[${index}].generalDesc`
                                            )}
                                            name={`activities[${index}].generalDesc`}
                                            className={classes.marginBottom}
                                        />
                                        <p className={classes.title}>
                                            <span className={classes.titleText}>
                                                {t('form.descSaveBehavior')}
                                            </span>
                                            {createActivityError(
                                                formik,
                                                'descGood',
                                                index
                                            )}
                                        </p>
                                        <OutlinedInput
                                            classes={{ input: classes.input }}
                                            fullWidth
                                            placeholder="Type in"
                                            {...formik.getFieldProps(
                                                `activities[${index}].descGood`
                                            )}
                                            name={`activities[${index}].descGood`}
                                            className={classes.marginBottom}
                                        />

                                        <BasicFormikFileInput
                                            uploadSingleFile={uploadFile(
                                                formik.setFieldValue
                                            )(
                                                `activities[${index}].pictureGood`
                                            )}
                                            {...formik.getFieldProps(
                                                `activities[${index}].pictureGood`
                                            )}
                                            name={`activities[${index}].pictureGood`}
                                        >
                                            {createActivityError(
                                                formik,
                                                'pictureGood',
                                                index
                                            )}
                                        </BasicFormikFileInput>
                                        <p className={classes.title}>
                                            <span className={classes.titleText}>
                                                {t('form.descUnsafeBehavior')}
                                            </span>
                                            {createActivityError(
                                                formik,
                                                'descBad',
                                                index
                                            )}
                                        </p>
                                        <OutlinedInput
                                            classes={{ input: classes.input }}
                                            fullWidth
                                            placeholder="Type in"
                                            {...formik.getFieldProps(
                                                `activities[${index}].descBad`
                                            )}
                                            name={`activities[${index}].descBad`}
                                            className={classes.marginBottom}
                                        />
                                        <BasicFormikFileInput
                                            uploadSingleFile={uploadFile(
                                                formik.setFieldValue
                                            )(
                                                `activities[${index}].pictureBad`
                                            )}
                                            {...formik.getFieldProps(
                                                `activities[${index}].pictureBad`
                                            )}
                                            name={`activities[${index}].pictureBad`}
                                        >
                                            {createActivityError(
                                                formik,
                                                'pictureBad',
                                                index
                                            )}
                                        </BasicFormikFileInput>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={sharedClasses.bottomPanel}>
                            <ColoredButton
                                customColor={colors.greyLightPrimary}
                                fontColor={colors.greyDarkNinth}
                                variant="contained"
                                onClick={onClose}
                                data-testid="templates-form-close-button"
                            >
                                {t('button.close')}
                            </ColoredButton>
                            <ColoredButton
                                customColor={colors.blueDarkThird}
                                variant="contained"
                                type="button"
                                className={classes.marginLeft}
                                onClick={() => {
                                    const values = {
                                        ...formik.values,
                                        publish: false
                                    }
                                    onSubmit(values)
                                }}
                                data-testid="templates-form-save"
                            >
                                {t('button.save')}
                            </ColoredButton>
                            <PrimaryButton
                                variant="contained"
                                type="button"
                                className={classes.marginLeft}
                                onClick={() => {
                                    formik.setFieldValue('publish', true)
                                    setTimeout(() => formik.handleSubmit(), 0)
                                }}
                                data-testid="templates-form-publish"
                            >
                                {t('button.publish')}
                            </PrimaryButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
