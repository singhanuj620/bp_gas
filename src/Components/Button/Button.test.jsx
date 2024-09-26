import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Button from './Button';
import '@testing-library/jest-dom'; // Add this line to import jest-dom for extended matchers
import { describe, test, expect, beforeEach, jest } from '@jest/globals'; // Import Jest globals

const mockStore = configureStore([]);

describe('Button Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            darkMode: { isDarkMode: false },
        });
    });

    test('renders with default props', () => {
        render(
            <Provider store={store}>
                <Button>Click Me</Button>
            </Provider>
        );
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('text-black border-black bg-green-400 cursor-pointer');
    });

    test('renders with dark mode', () => {
        store = mockStore({
            darkMode: { isDarkMode: true },
        });

        render(
            <Provider store={store}>
                <Button>Click Me</Button>
            </Provider>
        );
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('text-black border-white bg-yellow-400 cursor-pointer');
    });

    test('renders with outline', () => {
        render(
            <Provider store={store}>
                <Button outline>Click Me</Button>
            </Provider>
        );
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('text-black border-black');
        expect(buttonElement).not.toHaveClass('bg-green-400');
    });

    test('renders with disabled state', () => {
        render(
            <Provider store={store}>
                <Button disabled>Click Me</Button>
            </Provider>
        );
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveClass('cursor-not-allowed');
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(
            <Provider store={store}>
                <Button onClick={handleClick}>Click Me</Button>
            </Provider>
        );
        const buttonElement = screen.getByText(/Click Me/i);
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});