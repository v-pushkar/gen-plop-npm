import React from 'react'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import {
    mock{{Template}}Details,
    mock{{Template}}PredefinedValues
} from 'store/ducks/{{Name}}/mockedData'
import { {{Name}}Form } from './{{Name}}Form'

const onClose = jest.fn()
const submit{{Template}} = jest.fn()
const title = 'testTitle'
const initialValuesPassed = { ...mock{{Template}}Details.bos{{Template}}Data }
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}))

describe('{{Name}}Form component unit test', () => {
    afterEach(() => {
        cleanup()
        jest.resetAllMocks()
    })

    it('should test if renders without crashing and displays wrapper and call onClose on close action', async () => {
        const { queryByTestId, getByTestId } = render(
            <{{Name}}Form
                onClose={onClose}
                submit{{Template}}={submit{{Template}} }
                predefinedValues={mock{{Template}}PredefinedValues}
                title={title}
                initialValuesPassed={initialValuesPassed}
            />
        )
        await waitFor(() =>
            expect(queryByTestId('{{name}}-form')).toBeInTheDocument()
        )
        fireEvent.click(getByTestId('{{name}}-form-close-button'))
        await waitFor(() => expect(onClose).toHaveBeenCalled())
    })

    it('should call submit{{Template}} on save', async () => {
        const { getByTestId } = render(
            <{{Name}}Form
                onClose={onClose}
                submit{{Template}}={submit{{Template}} }
                predefinedValues={mock{{Template}}PredefinedValues}
                title={title}
                initialValuesPassed={initialValuesPassed}
            />
        )

        fireEvent.click(getByTestId('{{name}}-form-save'))
        await waitFor(() => expect(submit{{Template}}).toHaveBeenCalled())
    })

    it('should not call submit{{Template}} when trying to publish not filled form', async () => {
        const { getByTestId } = render(
            <{{Name}}Form
                onClose={onClose}
                submit{{Template}}={submit{{Template}} }
                predefinedValues={mock{{Template}}PredefinedValues}
                title={title}
                initialValuesPassed={undefined}
            />
        )

        fireEvent.click(getByTestId('{{name}}-form-publish'))
        await waitFor(() => expect(submit{{Template}}).not.toHaveBeenCalled())
    })
})
