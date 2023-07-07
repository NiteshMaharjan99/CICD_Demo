import { logRoles, render, screen } from '@testing-library/react';
import Skills from './Skills';

describe("Skills component", () => {

    // getBy, queryBy(Code ma bhako, Ui ma na dekhaune), findBy( asyncronous )

    const skills = [
        { id: 1, name: "plumbing" },
        { id: 2, name: "wiring" },
        { id: 3, name: "painting" }

    ]
    test('renders heading correctly', () => {

        render(<Skills skills={[{
            id: 1,
            name: 'coding'
        },
        {
            id: 2,
            name: 'singing'
        }]} />
        );

        const h2Elem = screen.getByRole("heading", {
            name: "List of Skills",
            level: 2
        })

        expect(h2Elem).toBeInTheDocument()
    })


    test('List of skills', () => {

        const view = render(<Skills skills={skills} />);
        logRoles(view.container)
        const listElem = screen.getByRole("list")
        expect(listElem).toBeInTheDocument()
    })


    test('renders the list of skills in proper order', () => {
        render(<Skills skills={skills} />);

        const listItemElem = screen.getAllByRole("listitem")
        expect(listItemElem).toHaveLength(3)
        expect(listItemElem[0]).toHaveTextContent(/plumbing/i)
        expect(listItemElem[1]).toHaveTextContent(/wiring/i)
        expect(listItemElem[2]).toHaveTextContent(/painting/i)

    })

    test('should show login button',() => {
        render(<Skills skills = {skills}/>)
        const loginBtn = screen.queryByRole("button",{
            namet: "Login"
        })
        expect(loginBtn).toBeInTheDocument();
    })

    test('should not show start working button', () => {
        render (<Skills skills={skills}/>)
        const startBtn = screen.queryByRole("button",{
            name: "Start working"
        })
        expect(startBtn).not.toBeInTheDocument();
    })

    test ('should show start working later', async () => {
        render (<Skills skills={skills}/>)
        const startBtn = await screen.findByRole("button",{
            name: "Start working"
        }, {timeout:1010})
        expect(startBtn).toBeInTheDocument();

    })
})