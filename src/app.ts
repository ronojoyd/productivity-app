interface Task {
    id: number;
    name: string;
    deadline: string;
    timeSpent: string;
    timeLeft: string;
}

class App {
    private tasks: Task[] = [
        { id: 1, name: 'Finish cleaning the backyard', deadline: 'August 15th, 11:59pm', timeSpent: '3hrs', timeLeft: '2hrs' },
        { id: 2, name: 'Work on diagramming', deadline: 'August 15th, 11:59pm', timeSpent: '3hrs', timeLeft: '2hrs' },
    ];
    private timeUntilBedtime: string = '3 hrs and 24 mins';

    init() {
        this.renderLiveTimer();
        this.renderTaskList();
        this.renderCalendar();
        this.startTimer();
    }

    private renderLiveTimer() {
        const timerElement = document.getElementById('live-timer');
        if (timerElement) {
            timerElement.innerHTML = `
                <h2 class="text-2xl font-bold mb-2">Time until bedtime</h2>
                <p class="text-4xl font-bold">${this.timeUntilBedtime}</p>
                <div class="mt-4">
                    <p>Tasks Completed: 4</p>
                    <p>Time Spent: 2:30</p>
                </div>
            `;
        }
    }

    private renderTaskList() {
        const taskListElement = document.getElementById('task-list');
        if (taskListElement) {
            taskListElement.innerHTML = `
                <div class="flex space-x-2 mb-4">
                    <button class="bg-orange-500 text-white px-4 py-2 rounded">All</button>
                    <button class="bg-gray-200 px-4 py-2 rounded">Study</button>
                    <button class="bg-gray-200 px-4 py-2 rounded">Hobbies</button>
                    <button class="bg-gray-200 px-4 py-2 rounded">Life Goals</button>
                    <button class="bg-gray-200 px-4 py-2 rounded">+</button>
                </div>
                ${this.tasks.map(task => this.renderTask(task)).join('')}
                <button id="add-task" class="bg-teal-500 text-white p-2 rounded-full">+</button>
            `;
        }
    }

    private renderTask(task: Task): string {
        return `
            <div class="bg-white p-4 rounded-lg shadow mb-4">
                <h3 class="font-bold">${task.name}</h3>
                <p>Deadline: ${task.deadline}</p>
                <p>Time Spent: ${task.timeSpent} | Time Left: ${task.timeLeft}</p>
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 60%"></div>
                </div>
                <div class="mt-2">
                    <button class="text-blue-500 mr-2">Edit</button>
                    <button class="text-red-500">Delete</button>
                </div>
            </div>
        `;
    }

    private renderCalendar() {
        const calendarElement = document.getElementById('calendar');
        if (calendarElement) {
            calendarElement.innerHTML = `
                <div class="flex justify-between items-center mb-4">
                    <button class="cursor-pointer">←</button>
                    <h2 class="text-xl font-bold">${new Date().toDateString()}</h2>
                    <button class="cursor-pointer">→</button>
                </div>
                <div class="space-y-2">
                    ${this.tasks.map(task => `
                        <div class="bg-orange-200 p-2 rounded">
                            ${task.name}
                        </div>
                    `).join('')}
                </div>
                <div class="mt-4">
                    <h3 class="font-bold mb-2">Task Queue</h3>
                    <div class="flex justify-between items-center bg-gray-100 p-2 rounded">
                        <span>Work on diagramming</span>
                        <button class="bg-orange-500 text-white px-2 py-1 rounded text-sm">Add to plan</button>
                    </div>
                </div>
            `;
        }
    }

    private startTimer() {
        setInterval(() => {
            const [hours, mins] = this.timeUntilBedtime.split(' and ');
            let newMins = parseInt(mins) - 1;
            let newHours = parseInt(hours);
            if (newMins < 0) {
                newMins = 59;
                newHours -= 1;
            }
            this.timeUntilBedtime = `${newHours} hrs and ${newMins} mins`;
            this.renderLiveTimer();
        }, 60000); // Update every minute
    }
}

export default App;