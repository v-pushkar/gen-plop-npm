import React from 'react'
import { render } from '@testing-library/react'
import { Edit{{Name}} } from './Edit{{Name}}'
import {
    mock{{Name}}Details,
    mock{{Name}}PredefinedValues
} from 'store/ducks/{{Name}}s/mockedData'

const onClose = jest.fn()
const get{{Name}}Draft = jest.fn()
const clean{{Name}}Draft = jest.fn()
const edit{{Name}} = jest.fn()
jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}))

describe('Edit{{Name}} component unit test', () => {
    it('should test if renders without crashing and displays wrapper', () => {
        const { queryByTestId } = render(
            <Edit{{Name}}
                onClose={onClose}
                get{{Name}}Draft={get{{Name}}Draft}
                clean{{Name}}Draft={clean{{Name}}Draft}
                edit{{Name}}={edit{{Name}} }
                predefinedValues={null}
                isFetchingDetails={true}
                id={1}
                {{name}}Draft={mock{{Name}}Details}
            />
        )
        expect(queryByTestId('edit-{{name}}')).toBeInTheDocument()
    })

    it('should fetch predefinedValues on init and show spinner', () => {
        const { queryByTestId } = render(
            <Edit{{Name}}
                onClose={onClose}
                get{{Name}}Draft={get{{Name}}Draft}
                clean{{Name}}Draft={clean{{Name}}Draft}
                edit{{Name}}={edit{{Name}} }
                predefinedValues={null}
                isFetchingDetails={true}
                id={1}
                {{name}}Draft={mock{{Name}}Details}
            />
        )
        expect(get{{Name}}Draft).toHaveBeenCalled()
        expect(queryByTestId('loading-details')).toBeInTheDocument()
    })

    it('should render {{Name}}sForm', () => {
        const { queryByTestId } = render(
            <Edit{{Name}}
                onClose={onClose}
                get{{Name}}Draft={get{{Name}}Draft}
                clean{{Name}}Draft={clean{{Name}}Draft}
                edit{{Name}}={edit{{Name}} }
                predefinedValues={mock{{Name}}PredefinedValues}
                isFetchingDetails={false}
                id={1}
                {{name}}Draft={mock{{Name}}Details}
            />
        )

        expect(queryByTestId('{{name}}s-form')).toBeInTheDocument()
    })
})
