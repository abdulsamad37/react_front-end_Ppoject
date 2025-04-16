// src/services/api.js
const API_BASE_URL = 'http://localhost:3002';

export const fetchEducationData = async (section) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${section}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching education data:', error);
    throw error;
  }
};