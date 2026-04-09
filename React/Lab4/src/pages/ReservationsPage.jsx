import Form from 'react-bootstrap/Form';

const ReservationsPage = () => {

    return(
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPartySize">
                    <Form.Label>Party Size</Form.Label>
                    <Form.Control
                        type="number"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="date"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTime">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                        type="time"
                    />
                </Form.Group>

                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Label column={"md"}>Seating Preference</Form.Label>
                        <br/>
                        <Form.Check
                            inline
                            label="Bar"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="Booth"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                        <Form.Check
                            inline
                            label="Patio"
                            name="group1"
                            type={type}
                            id={`inline-${type}-3`}
                        />
                    </div>
                ))}

                <Form.Group className="mb-3" controlId="formDietaryNotes">
                    <Form.Label column={"md"}>Dietary Notes</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                    />
                </Form.Group>

                {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Label column={"md"}>Join our Newsletter!</Form.Label>
                        <br/>
                        <Form.Check
                            inline
                            label="Sign me up!"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                        />
                        <Form.Check
                            inline
                            label="No, thanks."
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                        />
                    </div>
                ))}

            </Form>
        </div>


    )
}

export default ReservationsPage;

