export async function fetchNotifications() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: 4,
        notifications: [
          {
            id: 1,
            title: "Placement Drive",
            message: "Amazon hiring for SDE role",
            type: "Placement",
            read: false,
            date: "2026-06-23",
          },
          {
            id: 2,
            title: "Exam Result",
            message: "Semester results have been announced",
            type: "Result",
            read: true,
            date: "2026-06-20",
          },
          {
            id: 3,
            title: "Tech Event",
            message: "AI workshop starts tomorrow",
            type: "Event",
            read: false,
            date: "2026-06-22",
          },
          {
            id: 4,
            title: "Placement Update",
            message: "Interview schedule released",
            type: "Placement",
            read: true,
            date: "2026-06-21",
          },
        ],
      });
    }, 1000);
  });
}