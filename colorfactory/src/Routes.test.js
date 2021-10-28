import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Routes from './Routes';


test('renders learn react link', () => {
    render(<Routes/>);
});

it("matches snapshot", () => {
    const {asFragment} = render(<Routes />);
    expect(asFragment()).toMatchSnapshot();
});

test('renders all colors in the color list', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/colors"]}>
        <Routes />
      </MemoryRouter>
    );
    
    const linkColor = getByText("red");
    expect(linkColor).toBeInTheDocument();

});

