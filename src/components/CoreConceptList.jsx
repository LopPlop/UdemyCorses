import { CORE_CONCEPTS } from "./data"
import CoreConcept from "./CoreConcept"
import Section from "./Section"

const CoreConceptList = () => {
    return (
        <Section title= {"Core Concepts"} id="core-concepts">
          {CORE_CONCEPTS.map((item) => (
            <CoreConcept key={item.title} {...item}/>
          ))}
        </Section>
    )
}

export default CoreConceptList;