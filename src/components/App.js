import React, { useState } from "react";
import "../styles/App.css";

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

const App = () => {
  const [selectedState, setSelectedState] = useState(states[0]);
  const [selectedCity, setSelectedCity] = useState(selectedState.city[0]);
  const [selectedLandmark, setSelectedLandmark] = useState(selectedCity.landmarks[0]);

  const handleStateChange = (e) => {
    const state = states[e.target.value];
    setSelectedState(state);
    setSelectedCity(state.city[0]);
    setSelectedLandmark(state.city[0].landmarks[0]);
  };

  const handleCityChange = (e) => {
    const city = selectedState.city[e.target.value];
    setSelectedCity(city);
    setSelectedLandmark(city.landmarks[0]);
  };

  const handleLandmarkChange = (e) => {
    const landmark = selectedCity.landmarks[e.target.value];
    setSelectedLandmark(landmark);
  };

  return (
    <div>
      <h1>Dropdown React</h1>
      <select id="state" onChange={handleStateChange}>
        {states.map((state, index) => (
          <option key={index} value={index}>{state.name}</option>
        ))}
      </select>

      <select id="city" onChange={handleCityChange}>
        {selectedState.city.map((city, index) => (
          <option key={index} value={index}>{city.name}</option>
        ))}
      </select>

      <select id="landmark" onChange={handleLandmarkChange}>
        {selectedCity.landmarks.map((landmark, index) => (
          <option key={index} value={index}>{landmark.name}</option>
        ))}
      </select>

      <div id="state-name">{selectedState.name}</div>
      <div id="state-description">{selectedState.description}</div>
      <div id="city-name">{selectedCity.name}</div>
      <div id="city-description">{selectedCity.description}</div>
      <div id="landmark-name">{selectedLandmark.name}</div>
      <div id="landmark-description">{selectedLandmark.description}</div>
    </div>
  );
};

export default App;