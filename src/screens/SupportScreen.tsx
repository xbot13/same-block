import React, { useRef, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


interface Props {

}

const TOPICS = [
    {
        value: "Support",
        label: "Support"
    },
    {
        value: "Other",
        label: "Other"
    },
]

const emailValidation = (email: string) => {
    if (
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        )
    ) {
        return true;
    }
    if (email.trim() === '') {
        return 'Email is required';
    }
    return 'Please enter a valid email';
};


const SupportScreen = (props: Props) => {

    const [submitted, setSubmitted] = useState(false)
    const [topic, setTopic] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [question, setQuestion] = useState<string>('')
    const [error, setError] = useState({
        email: {
            valid: true,
            error: ""
        },
        topic: {
            valid: true,
            error: ""
        },
        question: {
            valid: true,
            error: ""
        }
    })

    const emailInput = useRef<HTMLDivElement>(null)
    const topicInput = useRef<HTMLDivElement>(null)
    const questionInput = useRef<HTMLDivElement>(null)

    const handleSubmit = () => {

        let err: typeof error = { ...error }
        const emailV = emailValidation(email)

        if (emailV === true) {
            err = {
                ...err, email: {
                    valid: true,
                    error: ""
                }
            }
            emailInput.current?.focus()
        } else {
            err = {
                ...err, email: {
                    valid: false,
                    error: emailV
                }
            }
        }

        if (topic === '') {
            err = {
                ...err, topic: {
                    valid: false,
                    error: "no topic selected"
                }
            }
            topicInput.current?.focus()

        } else {
            err = {
                ...err, topic: {
                    valid: true,
                    error: ""
                }
            }
        }


        if (question === null || question === '') {
            err = {
                ...err, question: {
                    valid: false,
                    error: "no question given"
                }
            }
            questionInput.current?.focus()

        } else {
            err = {
                ...err, question: {
                    valid: true,
                    error: ""
                }
            }
        }

        setError({ ...err })
        console.log("err", err)
        if (err.email.valid && err.topic.valid && err.question.valid) {
            console.log("submit")
            setSubmitted(true)
        }
    }


    if (submitted) {
        return (
            <div className="support">
                Your Request was succesfuly submitted!
            </div>
        )
    } else {

        return (


            <form className="support" onSubmit={() => {
                console.log("test")
            }} >
                <TextField
                    ref={emailInput}
                    required
                    type="email"
                    autoComplete="email"
                    label="E-Mail"
                    variant="outlined"
                    margin={"normal"}
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                    error={!error.email.valid}
                    helperText={error.email.error}
                    onSubmit={() => { }}
                />
                <TextField
                    ref={topicInput}
                    required
                    label="Topic"
                    variant="outlined"
                    select
                    value={topic}
                    margin={"normal"}
                    error={!error.topic.valid}
                    helperText={error.topic.error}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTopic(event.target.value)}
                >
                    {TOPICS.map((option) => (
                        <option key={option.value} value={option.value} >
                            {option.label}
                        </option>
                    ))}
                </TextField>


                <TextField
                    ref={questionInput}
                    required
                    rows={4}
                    label="Question"
                    variant="outlined"
                    multiline
                    margin={"normal"}
                    value={question}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuestion(event.target.value)}
                    error={!error.question.valid}
                    helperText={error.question.error}
                    fullWidth
                />

                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
            </Button>
            </form>

        )
    }
}

export default SupportScreen
