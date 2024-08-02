import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button className="show-popup-btn" onClick={togglePopup}>
        show popup
      </button>

      {isOpen && (
        <div className="popup-backdrop" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="header">
              <h2>Theme Color</h2>
              <h3>Change Theme</h3>
            </div>
            <ul>
              <li>
                <span>Font Color</span>
                <input type="text" defaultValue="#444444" />
                <input type="color" defaultValue="#444444" />
              </li>
              <li>
                <span>Background Color</span>
                <input type="text" defaultValue="#FFFFFF" />
                <input type="color" defaultValue="#FFFFFF" />
              </li>
              <li>
                <span>Button Color</span>
                <input type="text" defaultValue="#2072EF" />
                <input type="color" defaultValue="#2072EF" />
              </li>
              <li>
                <span>Button Border Color</span>
                <input type="text" defaultValue="#2072EF" />
                <input type="color" defaultValue="#2072EF" />
              </li>
              <li>
                <span>Buttons Mouseover Color</span>
                <input type="text" defaultValue="#0053D1" />
                <input type="color" defaultValue="#0053D1" />
              </li>
            </ul>
            <div className="popup-actions">
              <button className="cancel-btn" onClick={togglePopup}>
                Cancel
              </button>
              <button className="save-btn" onClick={togglePopup}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
