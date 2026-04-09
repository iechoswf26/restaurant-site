import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ReservationsPage = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                        Max 20 characters.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email@.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPartySize">
                    <Form.Label>Party Size</Form.Label>
                    <Form.Control type="number" placeholder="Party Size" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="MM-DD-YYYY" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control type="time" placeholder="HH:MM" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSeatingPreference">
                    <Form.Label>Seating Preference</Form.Label>
                    <Form.Check type="radio" label="Booth" />
                    <Form.Check type="radio" label="Bar" />
                    <Form.Check type="radio" label="Patio" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDietaryNotes">
                    <Form.Label>Dietary Notes</Form.Label>
                    <Form.Check type="text" placeholder="optional" />
                    <Form.Text className="text-muted">
                        Max 30 characters.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNewsletter">
                    <Form.Label>Newsletter</Form.Label>
                    <Form.Check type="checkbox" label="Yes!" />
                    <Form.Check type="checkbox" label="No, thanks." />
                </Form.Group>

            </Form>
        </div>


    )
}

export default ReservationsPage;

/* Need the following:
Name (required, max 20 characters)
Email (required, valid email)
Party Size (required, 1–8)
Date (required)
Time (required)
Seating Preference (required radio group, 3+ options)
Dietary Notes (optional, max 30)
Newsletter Opt-In (optional checkbox)
 */