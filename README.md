# "Live Timer" Productivity App

## Introduction

As someone who has struggled with productivity, I wanted to create an app that helps me see how much actual time I have available for work and efficiently manage my tasks. The Live Timer App provides a visual representation of time left until bedtime, tracks the time spent on tasks, and helps you organize and prioritize your tasks effectively.

![Screenshot 2024-08-11 234808](https://github.com/user-attachments/assets/b71c9521-6903-4fe5-8058-50dab8a8fd2c)

## Features

### Live Timer

- **Visual Countdown**: Displays the time left until bedtime.
- **Indicators**: Shows "Tasks Completed" and "Time Spent."
- **Interactive**: Click the timer to:
  - Edit your bedtime.
  - View completed tasks and the time spent on each task for the day.
  - See when the next scheduled task begins.

### Task List Interface

- **Location**: Positioned beneath the live timer.
- **Organization**: Displays tasks categorized by groups (e.g., Study, Hobbies, Life Goals).
- **Details**:
  - Task name
  - Deadline with remaining time
  - Time spent on the task
  - Time left to complete the task
- **Progress Bar**: Dynamically updates based on time spent versus estimated total time.
- **Task Management**:
  - Add tasks using a "+" button.
  - Edit task details (name, time left).
  - Delete tasks.
- **Sorting Options**:
  - Time added
  - Closest deadline
  - Least time left

### Today View

- **Location**: Positioned on the right side of the page.
- **Navigation**: Switch between previous and future dates using arrows.
- **Features**:
  - Task queue for adding tasks from the task list.
  - Calendar for scheduling tasks from the task queue.
  - Schedule tasks for:
    - A user-specified time and duration
    - The next available time slot based on task duration
  - Prevent overlapping tasks and alert if task duration exceeds the remaining time in the day.

### Task Timer

- **Function**: Starts a countdown timer when a task begins.
- **Manual Control**: Stop the timer if the task ends early.
- **Updates**:
  - Reflects time spent in the task list and live timer.
  - Updates "Tasks Completed" and "Time Spent" indicators.

### Daily Summary and Analytics

- **Daily Summary**:
  - Total number of tasks completed
  - Total time spent on tasks
  - Tasks not completed and carried over to the next day
- **Analytics Dashboard**:
  - Insights and trends over time, such as:
    - Average time spent on tasks
    - Most productive times of the day
    - Progress towards long-term goals
  - Visual representation of task completion rates and time allocation across categories
