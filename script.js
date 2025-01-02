const scheduleData = [
    {
      "name": "AP Computer Science",
      "room": "Room 203",
      "teacher": "Mr. Kilgore",
      "days": ["A", "C", "E", "G"]
    },
    {
      "name": "English Literature",
      "room": "Room 110",
      "teacher": "Ms. Thompson",
      "days": ["B", "D", "F"]
    }
  ];
  
  
  // Function to filter classes for a specific day
  function getClassesForDay(day) {
    return scheduleData.filter(classInfo => classInfo.days.includes(day));
  }
  
  // Example usage: Get classes for 'A' day
  const aDayClasses = getClassesForDay('A');
  console.log(aDayClasses);
  