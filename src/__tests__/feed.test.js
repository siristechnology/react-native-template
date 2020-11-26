import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { render, fireEvent, act } from '@testing-library/react-native'

import { Feed } from '../feed'

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('Testing react navigation', () => {
	test('page contains the items', async () => {
		const promise = Promise.resolve()
		const component = (
			<NavigationContainer>
				<Feed />
			</NavigationContainer>
		)

		const { getAllByText } = render(component)
		const items = getAllByText('Elvin')
		expect(items.length).toBeGreaterThan(1)
		await act(() => promise)
	})

	test('clicking on one item takes you to the details screen', async () => {
		const promise = Promise.resolve()
		const component = (
			<NavigationContainer>
				<Feed />
			</NavigationContainer>
		)

		const { getAllByText } = render(component)
		const toClick = getAllByText('Elvin')[0]

		fireEvent(toClick, 'press')
		const newHeader = getAllByText('Elvin')[0]

		expect(newHeader).toBeTruthy()
		await act(() => promise)
	})
})
