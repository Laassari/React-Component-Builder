import firstSample from './data.json';
import secondSample from './data2.json';
import * as components from './Components';
import { useState } from 'react';

function dynamicImport(name) {
  // @todo use dynamic module imports instead of importing everything upfront
  // @todo implement fail-safe so the app doesn't break if a component doesn't exist. report instead.
  return components[name];
}

function App() {
  const allSamples = [firstSample, secondSample];
  const [selectedSampleIdx, setSelectedSampleIdx] = useState(0);

  const renderAssignment = ({ Content, Children }) => {
    const componentName = Content.type.replace('Component', '');
    const Component = dynamicImport(componentName);

    const children = Object.values(Children || {}).map((child) => {
      return renderAssignment(child);
    });

    return <Component {...Content.props}>{children}</Component>;
  };

  return (
    <div className="App">
      <select onChange={(e) => setSelectedSampleIdx(e.target.value)}>
        {allSamples.map((_, idx) => (
          <option value={idx} key={idx}>
            sample {idx}
          </option>
        ))}
      </select>

      {renderAssignment(allSamples[selectedSampleIdx])}
    </div>
  );
}

export default App;
