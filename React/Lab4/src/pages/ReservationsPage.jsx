import {Form, Col, Row, ToggleButton, ToggleButtonGroup, Button} from 'react-bootstrap/';
import {useForm, Controller} from "react-hook-form";
import{object, string, number, date} from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

const ReservationsPage = () => {
    const userSchema = object ({
        name: string()
            .required("Name is required")
            .max(20, "Cannot be more than 20 characters"),

        email: string()
            .required("Email is required")
            .email("Invalid email format"),

        partySize: number()
            .required("Party size is required")
            .max(8, "Maximum 8 people allowed")
            .min(1, "At least 1 person is required")
            .typeError("Party size must be a number")
            .positive("Party size must be a positive number")
            .integer("Party size must be a whole number"),

        date: date()
            .required("Reservation date is required")
            .typeError("Enter a valid date")
            .min(new Date(), "Date cannot be in the past"),

        time: string()
            .test(
                "Valid-business hours",
                "Reservations are only available between 10:00 AM and 9:00 PM",
                function (value) {
                    if (!value) return false;

                    // Convert "HH:mm" to minutes since midnight for easy comparison.

                    const [hours, minutes] = value.split(':').map(Number);
                    const timeInMinutes = hours * 60 + minutes;

                    const openTime = 10 * 60; // 10AM = 600 minutes
                    const closeTime = 21 * 60; // 9PM = 1260 minutes

                    return timeInMinutes >= openTime && timeInMinutes <= closeTime;
                }
            )
            .required("Please select a reservation time"),

        seatingPreference: number()
            .oneOf([1, 2, 3], "Please select a seating preference")
            .required("Seating preference is required"),

        dietaryNotes: string()
            .max(30, "Cannot exceed 30 characters")
            .notRequired(),

        newsletter: number()
            .oneOf([4, 5], "Please select 1 option")
            .notRequired()

    })

    const {
        register,
        control,
        setValue,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: {
            seatingPreference: undefined,
            newsletter: undefined
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const handleChange = (e) => {
        setValue(e.target.name, e.target.value)
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Row} className="mb-3" controlId="name">
                <Form.Label column sm="2">Name</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type="text"
                        {...register("name")}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            {errors.name && <span className="text-danger">{errors.name.message}</span>}

            <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label column sm="2">Email</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type = "email"
                        placeholder="email@example.com"
                        {...register("email")}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            {errors.email && <span className="text-danger">{errors.email.message}</span>}

            <Form.Group as={Row} className="mb-3" controlId="partySize">
                <Form.Label column sm="2">Party Size</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type = "number"
                        min="1"
                        max="8"
                        {...register("partySize")}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            {errors.partySize && <span className="text-danger">{errors.partySize.message}</span>}

            <Form.Group as={Row} className="mb-3" controlId="date">
                <Form.Label column sm="2">Date</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type = "date"
                        {...register("date")}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            {errors.date && <span className="text-danger">{errors.date.message}</span>}

            <Form.Group as={Row} className="mb-3" controlId="time">
                <Form.Label column sm="2">Time</Form.Label>
                <Col sm="10">
                    <Form.Control
                        type = "time"
                        {...register("time")}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            {errors.time && <span className="text-danger">{errors.time.message}</span>}

            <Form.Group as={Row} className="mb-3" controlId="seatingPreference">
                <Form.Label column sm="2">Seating Preference</Form.Label>
                <Col sm="10">
                    <Controller
                        name="seatingPreference"
                        control={control}
                        render={({field}) => (
                            <ToggleButtonGroup
                                type="radio"
                                name="seatingPreference"
                                value={field.value}
                                onChange={field.onChange}
                            >
                                <ToggleButton id="tbg-radio-1" value={1} variant="outline-primary">
                                    Booth
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" value={2} variant="outline-primary">
                                    Bar
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-3" value={3} variant="outline-primary">
                                    Patio
                                </ToggleButton>
                            </ToggleButtonGroup>
                        )}
                    />

                </Col>
            </Form.Group>
            {errors.seatingPreference && <span className="text-danger">{errors.seatingPreference.message}</span>}

            <Form.Group as={Row} className="mb-3" controlId="dietaryNotes">
                <Form.Label column sm="2">Dietary Notes</Form.Label>
                <Col sm="10">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type = "textarea"
                        {...register("dietaryNotes")}
                        onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            {errors.dietaryNotes && <span className="text-danger">{errors.dietaryNotes.message}</span>}

            <Form.Group as={Row} className="mb-3" controlId="newsletter">
                <Form.Label column sm="2">Newsletter</Form.Label>
                <Col sm="10">
                    <Controller
                        name="newsletter"
                        control={control}
                        render={({field}) => (
                            <ToggleButtonGroup
                                type="radio"
                                name="newsletter"
                                value={field.value}
                                onChange={field.onChange}
                            >
                                <ToggleButton id="tbg-radio-4" value={4} variant="outline-primary">
                                    Yes, I'm in!
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-5" value={5} variant="outline-primary">
                                    No, thanks.
                                </ToggleButton>
                            </ToggleButtonGroup>
                        )}
                    />
                </Col>
            </Form.Group>
            {errors.newsletter && <span className="text-danger">{errors.newsletter.message}</span>}

            <Button type={"submit"} variant="secondary">Submit</Button>
            <Button type={"reset"} variant="secondary">Reset</Button>

        </Form>

    )
}

export default ReservationsPage;

