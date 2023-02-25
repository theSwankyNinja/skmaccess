import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
import { useContext } from "react";
import { GlobalContext } from "./provider/GlobalController";

function ExpandBox() {
  const { isTrue, setIsTrue, testFunction } = useContext(GlobalContext);
  return (
    <Accordion>
      <AccordionItem>
        <h3>
          <AccordionButton>Home</AccordionButton>
        </h3>
        <AccordionPanel>
          <p>Welcome to my accessibility demonstration</p>
          <div>
            {isTrue && <div>This is hidden when false</div>}
            <button onClick={() => setIsTrue(!isTrue)}>Toggle</button>
            <button onClick={testFunction}>Console.log('test')</button>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>About</AccordionButton>
        </h3>
        <AccordionPanel>
          Here are some detailed instructions about doing yet another thing.
          There are a lot of things someone might want to do, so I am only going
          to talk about doing that other thing. I'll let my fellow accordion
          items go into detail about even more things.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>Methods</AccordionButton>
        </h3>
        <AccordionPanel>
          Currently, the React version of the site runs on React.js with Reach
          UI components
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h3>
          <AccordionButton>Next Steps</AccordionButton>
        </h3>
        <AccordionPanel>
          <ul>
            <li>Add styling</li>
            <li>
              Configure the top bar with dropdowns for bypass links and for
              further accessibility
            </li>
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
