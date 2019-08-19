import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

class About extends Component {
    state = {
        checked: true,
        heading: 'About FakeCars.com'
    }

    toggleSwitch = () => {
        const newVal = !this.state.checked
        if (newVal) {
            return this.setState({
                heading: 'About FakeCars.com',
                checked: newVal
            })
        }
        return this.setState({
            heading: 'About Cars.com',
            checked: newVal
        })
    }

    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                    <p>
                        FakeCars.com was created to solve a specific problem.
                        That problem is quick and reliable access to details 
                        about many different models, all in one place. We had
                        to use the word "Fake" in our name so that we don't 
                        get sued by the real&nbsp; 
                        <a style={{ color: 'mediumblue' }}
                        href="https://www.cars.com"
                        target="_blank">Cars.com</a>
                        &nbsp;but we won't worry too much about that. We've provided a 
                        link to the actual cars.com above and we did not 
                        receive any money from them to do so. Although, there's 
                        an argument that maybe we should since we are a top-notch
                        coding bootcamp and anyone would want to be associated with
                        us :)
                    </p>
                    <Divider />
                    <p>
                        If you'd like you can toggle the word "Fake" because
                        why not? We have the potential to be the real cars.com 
                        if we wanted to be.
                    </p>
                    <Switch
                        checked={this.state.checked}
                        color="primary"
                        onChange={this.toggleSwitch}
                    />
                </Container>
            </div>
        )
    }
}

export default About