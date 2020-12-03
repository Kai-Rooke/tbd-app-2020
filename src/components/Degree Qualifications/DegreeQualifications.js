import React, { useState } from 'react'
import "./DegreeQualifications.css"; 
import {Row, Col, Container} from "react-bootstrap";
import RadioButton from '../RadioButton/RadioButton';
import TextBox from '../TextBox/TextBox';
import UCPButton from '../Buttons/UCPButton'

const DegreeQualifications = (props) => {
    

    var priorLevelFour = [
        {label: 'Yes', id: 'prior-yes', value: 'yes'},
        {label: 'No', id: 'prior-no', value: 'no'}
    ];

    var elq = [
        {label:'Yes', id:'elq-yes', value:"yes"},
        {label:'No', id:'elq-no', value:"no"}
    ];

    const[levelFour, setLevelFour] = useState(false);

    function handleClick(e) {
        if(e === 'yes') {
            setLevelFour(true);
        } else {
            setLevelFour(false);
        }
    }

    return (
        <>
        <Container className="degree-form d-flex justify-content-center">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap" rel="stylesheet"></link>
            <div className="form-background">
                <h3 className="form-title">Level 4 or Above Experience</h3>
                <Row>
                    <Col>
                        <RadioButton
                            subtitle="Do you have any level 4 or above qualifications?"
                            name="level-four"
                            options={priorLevelFour}
                            oc={handleClick}
                            data-testid="level-4-radio"
                        />
                        {
                            (levelFour)
                            ? <TextBox title="Enter qualification name and grade" name="l-4-qual" size={30} />
                            : <span></span>
                        }

                    </Col>
                    <Col>
                        <TextBox 
                            name="recent-school" 
                            title="What is the name of the most recent school/college attended?" 
                            size={25} 
                            type="text" 
                        />
                        <RadioButton 
                            subtitle="ELQ - is the applicant applying to study a qualification that is equivalent or lower to one they already hold?"
                            options={elq}
                            name="elq"
                        />
                    </Col>
                </Row>
            </div>
        </Container>
        <Container>
            <Row id="buttonRow">
          <Col className="centered-buttons">
            <UCPButton to='/LevelThreeQualifications'
              primary="True"
              className="mediumbutton"
              buttonText="Go Back"
            />
          </Col>
          <Col className="centered-buttons">
            <div id="confirmButton">
              <UCPButton
               to = "/ClearingOfferMade"
                primary="True"
                className="mediumbutton"
                buttonText="Confirm and Go"
          
              />
            </div>
          </Col>
        </Row>
        </Container>
        </>
    );
    
}

export default DegreeQualifications;