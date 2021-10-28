import { User } from 'src/auth/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private taskService;
    private logger;
    constructor(taskService: TasksService);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    getTaskById(id: string, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<void>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto, user: User): Promise<Task>;
}
