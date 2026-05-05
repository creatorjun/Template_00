// src/application/data/skills.js

/** @type {import('../../domain/entities/Skill').SkillGroup[]} */
export const skills = [
  {
    label: 'Game Development',
    items: ['Unreal Engine 5', 'Unity', 'C++20', 'C#', 'HLSL / GLSL', 'DirectX 12', 'Vulkan', 'ECS Architecture'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'TypeScript', 'Express.js', 'FastAPI', 'Python', 'WebSocket', 'Redis', 'REST API'],
  },
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'WebGL', 'Chart.js'],
  },
  {
    label: 'Infrastructure & Tools',
    items: ['AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'CMake', 'Firebase', 'MySQL', 'SQLite'],
  },
]
