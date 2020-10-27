import React from 'react'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import {
    mockTemplateDetails,
    mockTemplatePredefinedValues
} from 'store/ducks/Templates/mockedData'
import { TemplatesForm } from './TemplatesForm'

const onClose = jest.fn()
const submitTemplate = jest.fn()
const title = 'testTitle'
const initialValuesPassed = { ...mockTemplateDetails.bosTemplateData }
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}))

describe('TemplatesForm component unit test', () => {
    afterEach(() => {
        cleanup()
        jest.resetAllMocks()
    })

    it('should test if renders without crashing and displays wrapper and call onClose on close action', async () => {
        const { queryByTestId, getByTestId } = render(
            <TemplatesForm
                onClose={onClose}
                submitTemplate={submitTemplate}
                predefinedValues={mockTemplatePredefinedValues}
                title={title}
                initialValuesPassed={initialValuesPassed}
            />
        )
        await waitFor(() =>
            expect(queryByTestId('templates-form')).toBeInTheDocument()
        )
        fireEvent.click(getByTestId('templates-form-close-button'))
        await waitFor(() => expect(onClose).toHaveBeenCalled())
    })

    it('should call submitTemplate on save', async () => {
        const { getByTestId } = render(
            <TemplatesForm
                onClose={onClose}
                submitTemplate={submitTemplate}
                predefinedValues={mockTemplatePredefinedValues}
                title={title}
                initialValuesPassed={initialValuesPassed}
            />
        )

        fireEvent.click(getByTestId('templates-form-save'))
        await waitFor(() => expect(submitTemplate).toHaveBeenCalled())
    })

    it('should not call submitTemplate when trying to publish not filled form', async () => {
        const { getByTestId } = render(
            <TemplatesForm
                onClose={onClose}
                submitTemplate={submitTemplate}
                predefinedValues={mockTemplatePredefinedValues}
                title={title}
                initialValuesPassed={undefined}
            />
        )

        fireEvent.click(getByTestId('templates-form-publish'))
        await waitFor(() => expect(submitTemplate).not.toHaveBeenCalled())
    })
})
