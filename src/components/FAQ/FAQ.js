import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css'
function BasicExample() {
    return (
        <div className='faq'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='acrdn-hdr'><h5>What is the purpose of react router..?</h5></Accordion.Header>
                    <Accordion.Body>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='acrdn-hdr'><h5>Difference between Props and States</h5></Accordion.Header>
                    <Accordion.Body>
                        State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className='acrdn-hdr'><h5>Without api fetch what other things useEffect hook can do ?</h5></Accordion.Header>
                    <Accordion.Body>
                        The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are:<br>
                        </br>
                        1.Add an event listener for a button<br></br>
                        2.Perform an action when state or props change<br></br>
                        3.Clean up event listeners when the component unmounts.<br></br>
                        4.timers
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default BasicExample;