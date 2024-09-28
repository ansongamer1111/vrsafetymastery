// src/pages/data.js
export const skillsData = [
  {
    id: 1,
    name: 'VR Safety Basics',
    description: 'Learn the essential safety measures in VR environments.',
    category: 'Safety',
    progress: 75,
    relatedCourses: [
      { id: 2, name: 'Advanced VR Safety', description: 'In-depth safety protocols for VR.' },
      { id: 3, name: 'Emergency Procedures in VR', description: 'Handle emergencies in virtual reality.' }
    ]
  },
  {
    id: 2,
    name: 'Advanced VR Safety',
    description: 'Deep dive into advanced safety protocols.',
    category: 'Safety',
    progress: 50,
    relatedCourses: [
      { id: 1, name: 'VR Safety Basics', description: 'Essential safety measures in VR.' },
      { id: 3, name: 'Emergency Procedures in VR', description: 'Handle emergencies in virtual reality.' }
    ]
  },
  // Add more skills as needed...
];
