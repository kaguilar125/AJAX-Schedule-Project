const scheduleData = [
    {
    "period": 1,
    "startTime": "7:30 a.m.",
    "endTime": "8:37 a.m.",
    "class": "AP Environmental Science",
    "room": "B211",
    "teacher": "McQuade, Tara",
    "days": ["A", "B", "C", "F"]
  },
    {
    "period": 2,
    "startTime": "7:30 a.m.",
    "endTime": "8:37 a.m.",
    "class": "AP Environmental Science",
    "room": "B211",
    "teacher": "McQuade, Tara",
    "days": ["A", "B", "D", "E", "F"]
    },

    {
      "period": 3,
      "startTime": "9:54 a.m.",
      "endTime": "11:01 a.m.",
      "class": "Calculus",
      "room": "B202",
      "teacher": "Blum, Jason",
      "days": ["A", "C", "D", "E", "G"]
    },

    {
      "period": 4,
      "startTime": "11:06 a.m.",
      "endTime": "11:41 a.m.",
      "class": "Lunch",
      "room": "Lunch",
      "teacher": "Lunch",
      "days": ["B", "C", "D", "F", "G"]
    },

    {
      "period": 5,
      "startTime": "11:06 a.m.",
      "endTime": "11:41 a.m.",
      "class": "Lunch",
      "room": "Lunch",
      "teacher": "Lunch",
      "days": ["A", "B", "D", "E", "G"]
    },

    {
      "period": 6,
      "startTime": "11:47 a.m.",
      "endTime": "12:54 a.m.",
      "class": "Fine Art 1",
      "room": "B120",
      "teacher": "Finaldi, Daniel",
      "days": ["A", "B", "D", "E", "F"]
    },

    {
      "period": 7,
      "startTime": "12:59 a.m.",
      "endTime": "2:06 a.m.",
      "class": "Honors NJIT IS219 Advanced Website Development W",
      "room": "C104",
      "teacher": "McDonald, Ashley",
      "days": ["A", "B", "D", "E", "F"]
    },
  ];
  
  
  $(document).ready(function () {
  
    $("#submitDay").click(function () {
      const dayInput = $("#dayInput").val().toUpperCase();
      const validDays = ["A", "B", "C", "D", "E", "F", "G"];
  
   
      if (!validDays.includes(dayInput)) {
        alert("Please enter a valid day (A-G).");
        return;
      }
  
      displaySchedule(dayInput);
    });
  
    
    function displaySchedule(day) {
      const scheduleList = $("#scheduleList");
      scheduleList.empty();
  
     
      const filteredData = scheduleData.filter(item => item.days.includes(day));
  
      if (filteredData.length === 0) {
        scheduleList.append("<tr><td colspan='5' class='text-center'>No classes today</td></tr>");
        return;
      }
  
     
      filteredData.forEach(item => {
        const time = `${item.startTime} - ${item.endTime}`;
        scheduleList.append(`
          <tr>
            <td>${item.period}</td>
            <td>${time}</td>
            <td>${item.class}</td>
            <td>${item.teacher}</td>
            <td>${item.room}</td>
          </tr>
        `);
      });
    }
  });