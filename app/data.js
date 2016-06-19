'use strict';

const data = [
  {
    label: 'To-Do',
    key: 'todo',
    tasks: [
      {
        title: 'Haircut'
      },
      {
        title: 'Plan eurotrip',
        tasks: [
          {title: 'Purchase flight ticket', completed: true},
          {title: 'Book stays in Morocco'}
        ]
      }
    ]    
  },
  {
    label: 'In Progress',
    key: 'in-progress',
    tasks: [
      {
        title: 'Learn React'
      },
      {
        title: 'Organize room'
      }
    ]
  }
];

module.exports = data;