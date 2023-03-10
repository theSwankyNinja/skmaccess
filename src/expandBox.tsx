import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";

function ExpandBox() {
    return (
        <Accordion>
            <AccordionItem>
                <h3>
                    <AccordionButton>Home</AccordionButton>
                </h3>
                <AccordionPanel>
                    <p>Welcome to my accessibility demonstration</p>
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h3>
                    <AccordionButton>About</AccordionButton>
                </h3>
                <AccordionPanel>
                    About Section Content
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h3>
                    <AccordionButton>Methods</AccordionButton>
                </h3>
                <AccordionPanel>
                    Currently, the React version of the site runs on React.js with Reach UI components
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h3>
                    <AccordionButton>Next Steps</AccordionButton>
                </h3>
                <AccordionPanel>
                    <ul>
                        <li>Add styling</li>
                        <li>Configure the top bar with dropdowns for bypass links and for further accessibility</li>
                        <li>Add appropriate media queries</li>
                        <li>Configure dynamic styling</li>
                        <li>Configure custom titles</li>
                    </ul>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
}
export default ExpandBox;