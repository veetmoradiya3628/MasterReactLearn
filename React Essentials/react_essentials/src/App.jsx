import { CORE_CONCEPTS, EXAMPLES } from './data';
import { useState } from 'react';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreCencept';
import TabButton from './components/TabButton';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedBtn) {
    // selectedBtn => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedBtn)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              {...CORE_CONCEPTS[0]}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton label='Components' onSelect={() => handleSelect('components')} />
            <TabButton label='JSX' onSelect={() => handleSelect('jsx')} />
            <TabButton label='Props' onSelect={() => handleSelect('props')} />
            <TabButton label='States' onSelect={() => handleSelect('state')} />
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
