import React, { useState } from "react";
import "./../styles/App.css";

// Your given dataset
const states = [
  {
    name: "Madhya Pradesh",
    description:
      "Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.",
    city: [
      {
        name: "Indore",
        description:
          "Indore is a city in west-central India. It’s known for the 7-story Rajwada Palace and the Lal Baag Palace, which date back to Indore’s 19th-century Holkar dynasty.",
        landmarks: [
          {
            name: "Mhow",
            description:
              "Dr. Ambedkar Nagar, commonly known as Mhow, is a cantonment in the Indore district in Madhya Pradesh state of India.",
          },
          {
            name: "Dewas",
            description:
              "Dewas is a city in the Malwa region of the Indian state of Madhya Pradesh.",
          },
        ],
      },
      {
        name: "Bhopal",
        description:
          "Bhopal is a city in the central Indian state of Madhya Pradesh. It's one of India’s greenest cities.",
        landmarks: [
          {
            name: "MANIT",
            description:
              "Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal.",
          },
          {
            name: "Berasia",
            description: "Berasia is a landmark in Bhopal district.",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    description:
      "Jharkhand is a state in eastern India known for its waterfalls and wildlife.",
    city: [
      {
        name: "Dhanbad",
        description:
          "Dhanbad is the second-most populated city in the Indian state of Jharkhand.",
        landmarks: [
          {
            name: "IIT(ISM) Dhanbad",
            description:
              "Indian Institute of Technology (Indian School of Mines) Dhanbad is a public technical and research university.",
          },
          {
            name: "Hirapur",
            description:
              "Hirapur is a census landmark in Balaghat district in the Indian state of Madhya Pradesh.",
          },
        ],
      },
    ],
  },
];

function App() {
  const [selectedStateIndex, setSelectedStateIndex] = useState(0);
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [selectedLandmarkIndex, setSelectedLandmarkIndex] = useState(0);

  const cities = states[selectedStateIndex].city;
  const landmarks = cities[selectedCityIndex].landmarks;

  const handleStateChange = (e) => {
    setSelectedStateIndex(Number(e.target.value));
    setSelectedCityIndex(0);
    setSelectedLandmarkIndex(0);
  };

  const handleCityChange = (e) => {
    setSelectedCityIndex(Number(e.target.value));
    setSelectedLandmarkIndex(0);
  };

  const handleLandmarkChange = (e) => {
    setSelectedLandmarkIndex(Number(e.target.value));
  };

  return (
    <div id="main">
      <h1>Dynamic Dropdown - State, City, Landmark</h1>

      {/* Dropdowns */}
<select id="state" value={selectedStateIndex} onChange={handleStateChange}>
  {states.map((state, index) => (
    <option key={index} value={index}>
      {state.name}
    </option>
  ))}
</select>

<select id="city" value={selectedCityIndex} onChange={handleCityChange}>
  {cities.map((city, index) => (
    <option key={index} value={index}>
      {city.name}
    </option>
  ))}
</select>

<select id="landmark" value={selectedLandmarkIndex} onChange={handleLandmarkChange}>
  {landmarks.map((landmark, index) => (
    <option key={index} value={index}>
      {landmark.name}
    </option>
  ))}
</select>

{/* Titles to match Cypress */}
<h2 id="state-title">{states[selectedStateIndex].name}</h2>
<p id="state-description">{states[selectedStateIndex].description}</p>

<h3 id="city-title">{cities[selectedCityIndex].name}</h3>
<p id="city-description">{cities[selectedCityIndex].description}</p>

<h4 id="landmark-title">{landmarks[selectedLandmarkIndex].name}</h4>
<p id="landmark-description">
  {landmarks[selectedLandmarkIndex].description}
</p>

    </div>
  );
}

export default App;