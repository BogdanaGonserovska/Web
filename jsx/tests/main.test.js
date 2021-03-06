import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../src/pages/main/main";

describe('Main page', () => {
    it('renders main', () => {
        render(<Router><Main /> </Router>);
        expect(screen.getAllByRole('a'));
    });
})