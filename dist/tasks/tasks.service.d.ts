import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { User } from 'src/auth/user.entity';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]>;
    getTaskById(id: string, user: User): Promise<Task>;
    deleteTask(id: string, user: User): Promise<void>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto, user: User): Promise<Task>;
}
