import { render, screen } from '@testing-library/react';
import Recipes from './recipes.jsx'; // Anpassa sökvägen efter din filstruktur
import { recipes } from '../../mockdb/recipes';

jest.mock('../../mockdb/recipes', () => ({
    recipes: {
        dishes: [
            {
                name: 'Test Recept',
                img: 'test.jpg',
                desc: 'En testbeskrivning',
                tags: ['Tag1', 'Tag2']
            }
        ]
    }
}));

describe('Recipes Component', () => {
    test('renders the title', () => {
        render(<Recipes />);
        expect(screen.getByText('Recipes')).toBeInTheDocument();
    });

    test('renders dish name', () => {
        render(<Recipes />);
        expect(screen.getByText('Test Recept')).toBeInTheDocument();
    });

    test('renders all tag buttons', () => {
        render(<Recipes />);
        expect(screen.getByText('Tag1')).toBeInTheDocument();
        expect(screen.getByText('Tag2')).toBeInTheDocument();
    });
});